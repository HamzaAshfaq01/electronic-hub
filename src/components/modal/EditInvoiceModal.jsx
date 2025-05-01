import { generateClient } from 'aws-amplify/api';
import { updateInvoice, updateInstallment, updateInvoiceItem, createInstallment } from '../../graphql/mutations';
import { listCustomers, listWarehouses, listProducts } from '../../graphql/queries';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { getCurrentFormattedDate } from '../../utils/dateUtils';
import { useEffect, useState } from 'react';

const validationSchema = Yup.object({
	customerID: Yup.string().required('Customer is required'),
	warehouseID: Yup.string().required('Warehouse is required'),
	totalAmount: Yup.number().required('Total Amount is required'),
	paidAmount: Yup.number().required('Paid Amount is required').min(0),
	paymentMethod: Yup.string().required('Payment Method is required'),
	dueDate: Yup.date().nullable(),
	status: Yup.string().required('Status is required'),
	installments: Yup.array().of(
		Yup.object({
			dueDate: Yup.date().required('Due Date is required'),
			amount: Yup.number().required('Amount is required'),
		})
	),
	items: Yup.array().of(
		Yup.object({
			productID: Yup.string().required('Product is required'),
			quantity: Yup.number().required('Quantity is required').positive(),
			unitPrice: Yup.number().required('Unit Price is required').positive(),
			totalPrice: Yup.number().required('Total Price is required').positive(),
		})
	),
});

const client = generateClient();

const EditInvoiceModal = ({ invoice, onClose, setInvoices }) => {
	if (!invoice) return null;

	const [customers, setCustomers] = useState([]);
	const [warehouses, setWarehouses] = useState([]);
	const [products, setProducts] = useState([]);
	const [quotationItems, setQuotationItems] = useState(invoice?.items?.items || []);
	const [totalAmount, setTotalAmount] = useState(invoice.totalAmount || 0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const customerResponse = await client.graphql({ query: listCustomers });
				const warehouseResponse = await client.graphql({ query: listWarehouses });
				const productResponse = await client.graphql({ query: listProducts });

				setCustomers(customerResponse.data.listCustomers.items || []);
				setWarehouses(warehouseResponse.data.listWarehouses.items || []);
				setProducts(productResponse.data.listProducts.items || []);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const updatedTotalAmount = quotationItems.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
		setTotalAmount(updatedTotalAmount);
	}, [quotationItems]);

	const addQuotationItem = () => {
		setQuotationItems((prevItems) => [...prevItems, { productID: '', quantity: 1, pricePerUnit: 0, totalPrice: 0 }]);
	};

	const updateQuotationItem = (index, field, value) => {
		setQuotationItems((prevItems) => {
			const updatedItems = [...prevItems];

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

			const item = updatedItems[index];
			item.totalPrice = item.quantity * item.pricePerUnit;

			return updatedItems;
		});
	};

	const removeQuotationItem = (index) => {
		setQuotationItems((prevItems) => prevItems.filter((_, i) => i !== index));
	};

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			const invoiceInput = {
				id: invoice.id,
				customerID: values.customerID,
				warehouseID: values.warehouseID,
				totalAmount: totalAmount,
				paidAmount: values.paidAmount,
				paymentMethod: values.paymentMethod,
				dueDate: values.dueDate || null,
				status: values.status,
				createdAt: values.createdAt,
			};

			await client.graphql({
				query: updateInvoice,
				variables: { input: invoiceInput },
			});

			await Promise.all(
				quotationItems.map((item) =>
					client.graphql({
						query: updateInvoiceItem,
						variables: {
							input: {
								id: item.id,
								productID: item.productID,
								quantity: item.quantity,
								pricePerUnit: item.pricePerUnit,
								totalPrice: item.totalPrice,
								invoiceID: invoice.id,
							},
						},
					})
				)
			);

			if (values.installments.length > 0) {
				await Promise.all(
					values.installments.map((installment) => {
						if (installment.id) {
							return client.graphql({
								query: updateInstallment,
								variables: {
									input: {
										id: installment.id,
										invoiceID: invoice.id,
										dueDate: installment.dueDate,
										amount: installment.amount,
										status: installment.status,
										createdAt: installment.createdAt,
									},
								},
							});
						} else {
							return client.graphql({
								query: createInstallment,
								variables: {
									input: {
										invoiceID: invoice.id,
										dueDate: installment.dueDate,
										amount: installment.amount,
										status: 'PENDING',
										createdAt: getCurrentFormattedDate(),
									},
								},
							});
						}
					})
				);
			}

			toast.success('Invoice updated successfully!');
			resetForm();
			onClose();
			setInvoices((prevInvoices) =>
				prevInvoices.map((inv) => (inv.id === invoice.id ? { ...invoiceInput, id: invoice.id } : inv))
			);
		} catch (error) {
			console.error(error);
			toast.error('Failed to update invoice. Please try again later.');
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className='fixed inset-0 right-0 bg-[#10182885] flex justify-end items-center h-full z-50'>
			<div className='bg-white p-6 w-full max-w-[588px] shadow-lg h-full relative flex flex-col'>
				{/* Header */}
				<div className='flex justify-between items-center pb-[16px] border-b border-gray-200'>
					<h2 className='text-[20px] font-medium text-[#1B1F29]'>Edit Invoice</h2>
					<button onClick={onClose} className='text-gray-500 text-[30px]'>
						&times;
					</button>
				</div>

				{/* Scrollable Content */}
				<div className='flex-1 overflow-y-auto mt-[16px]'>
					<Formik
						initialValues={{
							customerID: invoice?.customerID || '',
							warehouseID: invoice?.warehouseID || '',
							totalAmount: invoice?.totalAmount || totalAmount,
							paidAmount: invoice?.paidAmount || '',
							paymentMethod: invoice?.paymentMethod || '',
							dueDate: invoice?.dueDate || '',
							status: invoice?.status || '',
							installments: invoice?.installments?.items || [],
							items: [],
							createdAt: invoice?.createdAt || new Date(),
						}}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}>
						{({ values, errors, isSubmitting, setFieldValue }) => {
							console.log(errors, 'errprs');
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

									<div>
										<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='customerID'>
											Warehouse
										</label>
										<Field
											as='select'
											id='warehouseID'
											name='warehouseID'
											className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'>
											<option value=''>Select a warehouse</option>
											{warehouses.map((warehouse) => (
												<option key={warehouse.id} value={warehouse.id}>
													{warehouse.name}
												</option>
											))}
										</Field>
										<ErrorMessage name='customerID' component='div' className='text-red-500 text-sm mt-1' />
									</div>

									<div>
										<h3 className='text-[16px] font-medium text-[#1B1F29]'>Product Items</h3>
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
											Add Product Item
										</button>
									</div>

									<div className='mt-2'>
										<label className='block text-[14px] font-medium text-[#4F5B67]'>Total Amount</label>
										<Field
											as='input'
											placeholder='Total Amount'
											type='number'
											value={values.totalAmount}
											disabled
											className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
										/>
									</div>

									<div className='mt-2'>
										<label className='block text-[14px] font-medium text-[#4F5B67]'>Paid Amount</label>
										<Field
											as='input'
											name='paidAmount'
											placeholder='Paid Amount'
											type='number'
											value={values.paidAmount}
											className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
										/>
									</div>

									{/* Payment Method Dropdown */}
									<div>
										<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='paymentMethod'>
											Payment Method
										</label>
										<Field
											as='select'
											id='paymentMethod'
											name='paymentMethod'
											className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'>
											<option value='' disabled>
												Select Payment Method
											</option>
											<option value='MCB'>MCB</option>
											<option value='CREDIT'>Credit</option>
											<option value='CASH'>Cash</option>
											<option value='INSTALLMENT'>Installment</option>
										</Field>
										<ErrorMessage name='paymentMethod' component='div' className='text-red-500 text-sm mt-1' />
									</div>

									{/* Invoice Status Dropdown */}
									<div>
										<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='status'>
											Status
										</label>
										<Field
											as='select'
											id='status'
											name='status'
											className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'>
											<option value='' disabled>
												Select Status
											</option>
											<option value='PAID'>Paid</option>
											<option value='PARTIALLY_PAID'>Partially Paid</option>
											<option value='UNPAID'>Unpaid</option>
										</Field>
										<ErrorMessage name='status' component='div' className='text-red-500 text-sm mt-1' />
									</div>

									{/* Installments Section */}
									{values.paymentMethod === 'INSTALLMENT' && (
										<div>
											<FieldArray
												name='installments'
												render={(arrayHelpers) => (
													<div>
														{values.installments.map((_, index) => (
															<div key={index} className='flex gap-4 items-center'>
																<DatePicker
																	className='p-2 w-full border rounded'
																	selected={values.installments[index].dueDate}
																	onChange={(date) =>
																		setFieldValue(`installments.${index}.dueDate`, getCurrentFormattedDate(date))
																	}
																/>
																<Field
																	name={`installments.${index}.amount`}
																	type='number'
																	placeholder='Amount'
																	disabled
																	className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
																/>
																{/* <button
																	type='button'
																	onClick={() => arrayHelpers.remove(index)}
																	className='text-red-500'>
																	Remove
																</button> */}
															</div>
														))}
													</div>
												)}
											/>
										</div>
									)}

									<div>
										<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='createdAt'>
											Created At
										</label>
										<DatePicker
											className='p-2 w-full border rounded'
											selected={values.createdAt}
											onChange={(date) => setFieldValue('createdAt', getCurrentFormattedDate(date))}
										/>
										<ErrorMessage name='createdAt' component='div' className='text-red-500 text-sm mt-1' />
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

export default EditInvoiceModal;
