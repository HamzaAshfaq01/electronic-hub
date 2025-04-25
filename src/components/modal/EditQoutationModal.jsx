import { generateClient } from 'aws-amplify/api';
import { updateQuotation, updateQuotationItem } from '../../graphql/mutations';
import { listCustomers, listProducts } from '../../graphql/queries';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { getCurrentFormattedDate } from '../../utils/dateUtils';
import { useEffect, useState } from 'react';

const validationSchema = Yup.object({
	customerID: Yup.string().required('Customer is required'),
	createdAt: Yup.date().required('Date is required'),
});

const client = generateClient();

const EditQuotationModal = ({ onClose, quotation, setQuotations }) => {
	if (!quotation) return null;

	const [customers, setCustomers] = useState([]);
	const [products, setProducts] = useState([]);
	const [quotationItems, setQuotationItems] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const customerRes = await client.graphql({
					query: listCustomers,
					variables: { limit: 1000 },
				});
				setCustomers(customerRes.data.listCustomers.items);

				const productRes = await client.graphql({
					query: listProducts,
					variables: { limit: 1000 },
				});
				setProducts(productRes.data.listProducts.items);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		if (quotation?.items) {
			const preparedItems = quotation?.items?.items?.map((item) => ({
				id: item.id,
				productID: item.productID,
				quantity: item.quantity,
				pricePerUnit: item.pricePerUnit,
				totalPrice: item.quantity * item.pricePerUnit,
			}));
			setQuotationItems(preparedItems);
		}
	}, [quotation]);

	const addQuotationItem = () => {
		setQuotationItems((prev) => [...prev, { productID: '', quantity: 1, pricePerUnit: 0, totalPrice: 0 }]);
	};

	const handleUpdateQuotationItem = (index, field, value) => {
		setQuotationItems((prev) => {
			const updated = [...prev];

			if (field === 'productID') {
				const isDuplicate = updated.some((item, i) => item.productID === value && i !== index);
				if (isDuplicate) {
					toast.error('This product has already been added.');
					return prev;
				}

				const selectedProduct = products.find((p) => p.id === value);
				if (selectedProduct) {
					updated[index].pricePerUnit = selectedProduct.unitPrice || 0;
				}
				updated[index].productID = value;
			} else {
				updated[index][field] = value;
			}

			const item = updated[index];
			item.totalPrice = item.quantity * item.pricePerUnit;

			return updated;
		});
	};

	const removeQuotationItem = (index) => {
		setQuotationItems((prev) => prev.filter((_, i) => i !== index));
	};

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			values.createdAt = getCurrentFormattedDate(values.createdAt);

			const updateRes = await client.graphql({
				query: updateQuotation,
				variables: {
					input: {
						id: quotation.id,
						customerID: values.customerID,
						createdAt: values.createdAt,
						totalAmount: quotationItems.reduce((sum, item) => sum + item.totalPrice, 0),
					},
				},
			});

			const updatedQuotation = updateRes.data.updateQuotation;

			await Promise.all(
				quotationItems.map((item) =>
					client.graphql({
						query: updateQuotationItem,
						variables: {
							input: {
								id: item.id,
								productID: item.productID,
								quantity: item.quantity,
								pricePerUnit: item.pricePerUnit,
								quotationID: updatedQuotation.id,
							},
						},
					})
				)
			);

			toast.success('Quotation updated successfully!');
			onClose();
			resetForm();
		} catch (error) {
			console.error('Error updating quotation:', error);
			toast.error('Failed to update quotation.');
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className='fixed inset-0 bg-[#10182885] flex justify-end items-center h-full z-50'>
			<div className='bg-white p-6 w-full max-w-[588px] shadow-lg h-full relative flex flex-col'>
				<div className='flex justify-between items-center pb-4 border-b border-gray-200'>
					<h2 className='text-lg font-semibold'>Edit Quotation</h2>
					<button onClick={onClose} className='text-gray-500 text-2xl'>
						&times;
					</button>
				</div>

				<div className='flex-1 overflow-y-auto mt-4'>
					<Formik
						enableReinitialize
						initialValues={{
							customerID: quotation.customerID,
							createdAt: new Date(quotation.createdAt),
						}}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}>
						{({ values, setFieldValue, isSubmitting }) => {
							return (
								<Form className='flex flex-col gap-6'>
									<div>
										<label className='block text-sm font-medium'>Customer</label>
										<Field as='select' name='customerID' className='w-full p-2 border rounded mt-1 bg-gray-50'>
											<option value=''>Select Customer</option>
											{customers.map((c) => (
												<option key={c.id} value={c.id}>
													{c.name}
												</option>
											))}
										</Field>
										<ErrorMessage name='customerID' component='div' className='text-red-500 text-sm' />
									</div>

									<div>
										<label className='block text-sm font-medium'>Created At</label>
										<DatePicker
											className='p-2 w-full border rounded mt-1'
											selected={values.createdAt}
											onChange={(date) => setFieldValue('createdAt', date)}
										/>
										<ErrorMessage name='createdAt' component='div' className='text-red-500 text-sm' />
									</div>

									<div>
										<h3 className='text-base font-semibold'>Quotation Items</h3>
										{quotationItems.map((item, index) => (
											<div key={index} className='border p-4 rounded mb-4'>
												<div className='mb-2'>
													<label className='block text-sm'>Product</label>
													<select
														value={item.productID}
														onChange={(e) => handleUpdateQuotationItem(index, 'productID', e.target.value)}
														className='w-full p-2 border rounded mt-1 bg-gray-50'>
														<option value=''>Select Product</option>
														{products.map((p) => (
															<option key={p.id} value={p.id}>
																{p.name}
															</option>
														))}
													</select>
												</div>
												<div className='mb-2'>
													<label className='block text-sm'>Quantity</label>
													<input
														type='number'
														value={item.quantity}
														onChange={(e) => handleUpdateQuotationItem(index, 'quantity', parseInt(e.target.value))}
														className='w-full p-2 border rounded mt-1'
													/>
												</div>
												<div className='mb-2'>
													<label className='block text-sm'>Price Per Unit</label>
													<input
														type='number'
														value={item.pricePerUnit}
														onChange={(e) =>
															handleUpdateQuotationItem(index, 'pricePerUnit', parseFloat(e.target.value))
														}
														className='w-full p-2 border rounded mt-1'
													/>
												</div>
												<div className='mb-2'>
													<label className='block text-sm'>Total Price</label>
													<input
														type='number'
														value={item.totalPrice}
														disabled
														className='w-full p-2 border rounded mt-1 bg-gray-100'
													/>
												</div>
												<button
													type='button'
													onClick={() => removeQuotationItem(index)}
													className='text-red-500 text-sm mt-2'>
													Remove Item
												</button>
											</div>
										))}
										<button
											type='button'
											onClick={addQuotationItem}
											className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'>
											Add Quotation Item
										</button>
									</div>

									<div className='flex justify-end border-t pt-4'>
										<button
											type='submit'
											disabled={isSubmitting}
											className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'>
											{isSubmitting ? 'Updating...' : 'Update'}
										</button>
									</div>
								</Form>
							);
						}}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default EditQuotationModal;
