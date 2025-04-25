import { generateClient } from 'aws-amplify/api';
import { createQuotation, createQuotationItem } from '../../graphql/mutations';
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

const AddQuotationModal = ({ isOpen, onClose, setQuotations }) => {
	if (!isOpen) return null;

	const [customers, setCustomers] = useState([]);
	const [products, setProducts] = useState([]);
	const [quotationItems, setQuotationItems] = useState([]);

	// Fetch customers and products
	useEffect(() => {
		const fetchData = async () => {
			try {
				const customerResponse = await client.graphql({
					query: listCustomers,
					variables: { limit: 1000 },
				});
				setCustomers(customerResponse.data.listCustomers.items);

				const productResponse = await client.graphql({
					query: listProducts,
					variables: { limit: 1000 },
				});
				setProducts(productResponse.data.listProducts.items);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);

	// Add a new quotation item
	const addQuotationItem = () => {
		setQuotationItems((prevItems) => [...prevItems, { productID: '', quantity: 1, pricePerUnit: 0, totalPrice: 0 }]);
	};

	// Update a specific quotation item
	const updateQuotationItem = (index, field, value) => {
		setQuotationItems((prevItems) => {
			const updatedItems = [...prevItems];

			// Check for duplicate product
			if (field === 'productID') {
				const isDuplicate = updatedItems.some((item, i) => item.productID === value && i !== index);
				if (isDuplicate) {
					toast.error('This product has already been added.');
					return prevItems;
				}

				const selectedProduct = products.find((p) => p.id === value);
				if (selectedProduct) {
					updatedItems[index].pricePerUnit = selectedProduct.unitPrice || 0;
				}
				updatedItems[index].productID = value;
			} else {
				updatedItems[index][field] = value;
			}

			// Always update total price
			const item = updatedItems[index];
			item.totalPrice = item.quantity * item.pricePerUnit;

			return updatedItems;
		});
	};

	// Remove a quotation item
	const removeQuotationItem = (index) => {
		setQuotationItems((prevItems) => prevItems.filter((_, i) => i !== index));
	};

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			// Create the quotation
			values.createdAt = getCurrentFormattedDate(values.createdAt);
			const quotationResponse = await client.graphql({
				query: createQuotation,
				variables: {
					input: { ...values, totalAmount: quotationItems.reduce((sum, item) => sum + item.totalPrice, 0) },
				},
			});

			const quotationID = quotationResponse.data.createQuotation.id;

			// Create quotation items
			await Promise.all(
				quotationItems.map((item) =>
					client.graphql({
						query: createQuotationItem,
						variables: { input: { ...item, quotationID } },
					})
				)
			);

			toast.success('Quotation added successfully!');
			resetForm();
			onClose();
		} catch (error) {
			console.error('Error creating quotation:', error);
			toast.error('Failed to add quotation. Please try again later.');
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className='fixed inset-0 right-0 bg-[#10182885] flex justify-end items-center h-full z-50'>
			<div className='bg-white p-6 w-full max-w-[588px] shadow-lg h-full relative flex flex-col'>
				{/* Header */}
				<div className='flex justify-between items-center pb-[16px] border-b border-gray-200'>
					<h2 className='text-[20px] font-medium text-[#1B1F29]'>Add Quotation</h2>
					<button onClick={onClose} className='text-gray-500 text-[30px]'>
						&times;
					</button>
				</div>

				{/* Scrollable Content */}
				<div className='flex-1 overflow-y-auto mt-[16px]'>
					<Formik
						initialValues={{
							customerID: '',
							createdAt: new Date(),
						}}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}>
						{({ values, errors, isSubmitting, setFieldValue }) => {
							return (
								<Form className='flex flex-col gap-[24px]'>
									{/* Customer Selection */}
									<div>
										<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='customerID'>
											Customer
										</label>
										<Field
											as='select'
											id='customerID'
											name='customerID'
											className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'>
											<option value=''>Select a customer</option>
											{customers.map((customer) => (
												<option key={customer.id} value={customer.id}>
													{customer.name}
												</option>
											))}
										</Field>
										<ErrorMessage name='customerID' component='div' className='text-red-500 text-sm mt-1' />
									</div>

									{/* Created At */}
									<div>
										<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='createdAt'>
											Created At
										</label>
										<DatePicker
											className='p-2 w-full border rounded'
											selected={values.createdAt}
											onChange={(date) => setFieldValue('createdAt', date)}
										/>
										<ErrorMessage name='createdAt' component='div' className='text-red-500 text-sm mt-1' />
									</div>

									{/* Quotation Items */}
									<div>
										<h3 className='text-[16px] font-medium text-[#1B1F29]'>Quotation Items</h3>
										{quotationItems.map((item, index) => (
											<div key={index} className='border p-4 rounded mb-4'>
												<div>
													<label className='block text-[14px] font-medium text-[#4F5B67]'>Product</label>
													<select
														value={item.productID}
														onChange={(e) => updateQuotationItem(index, 'productID', e.target.value)}
														className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'>
														<option value=''>Select a product</option>
														{products.map((product) => (
															<option key={product.id} value={product.id}>
																{product.name}
															</option>
														))}
													</select>
												</div>
												<div className='mt-2'>
													<label className='block text-[14px] font-medium text-[#4F5B67]'>Quantity</label>
													<input
														type='number'
														value={item.quantity}
														onChange={(e) => updateQuotationItem(index, 'quantity', parseInt(e.target.value, 10))}
														className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
													/>
												</div>
												<div className='mt-2'>
													<label className='block text-[14px] font-medium text-[#4F5B67]'>Price Per Unit</label>
													<input
														type='number'
														value={item.pricePerUnit}
														onChange={(e) => updateQuotationItem(index, 'pricePerUnit', parseFloat(e.target.value))}
														className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
													/>
												</div>
												<div className='mt-2'>
													<label className='block text-[14px] font-medium text-[#4F5B67]'>Total Price</label>
													<input
														type='number'
														value={item.totalPrice}
														disabled
														className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
													/>
												</div>
												<button type='button' onClick={() => removeQuotationItem(index)} className='mt-2 text-red-500'>
													Remove Item
												</button>
											</div>
										))}
										<button
											type='button'
											onClick={addQuotationItem}
											className='mt-4 bg-[#0BA5EC] text-white px-4 py-2 rounded'>
											Add Quotation Item
										</button>
									</div>
									<div className='flex justify-end border-t border-gray-200 p-5'>
										<button
											type='submit'
											className='bg-[#0BA5EC] text-white px-[30px] py-[10px] rounded-[8px] hover:bg-[#0BA5EC]'>
											Save
										</button>
									</div>
								</Form>
							);
						}}
					</Formik>
				</div>

				{/* Footer */}
			</div>
		</div>
	);
};

export default AddQuotationModal;
