import { generateClient } from 'aws-amplify/api';
import { updateInvoice, updateInstallment, updateInvoiceItem, deleteInstallment } from '../../graphql/mutations';
import { listCustomers, listWarehouses, listProducts } from '../../graphql/queries';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { getCurrentFormattedDate } from '../../utils/dateUtils';
import { useEffect, useState } from 'react';

const validationSchema = Yup.object({
	warehouseID: Yup.string().required('Warehouse is required'),
	dueDate: Yup.date().nullable(),
	status: Yup.string().required('Status is required'),
});

const client = generateClient();

const EditInvoiceModal = ({ installment, onClose, setInstallments }) => {
	if (!installment) return null;

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			const invoiceInput = {
				id: installment?.id,
				invoiceID: values?.invoice?.id,
				dueDate: values.dueDate,
				paidDate: values.dueDate,
				amount: values.amount || null,
				status: values.status,
				createdAt: values.createdAt,
			};

			if (values.status === 'PAID') {
				await client.graphql({
					query: deleteInstallment,
					variables: {
						input: {
							id: installment.id,
						},
					},
				});
			}
			toast.success('Installement updated successfully!');
			resetForm();
			onClose();
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
					<h2 className='text-[20px] font-medium text-[#1B1F29]'>Edit Installment</h2>
					<button onClick={onClose} className='text-gray-500 text-[30px]'>
						&times;
					</button>
				</div>

				{/* Scrollable Content */}
				<div className='flex-1 overflow-y-auto mt-[16px]'>
					<Formik
						initialValues={{
							customerID: installment?.invoice?.customer?.name || '',
							warehouseID: installment?.invoice?.warehouse?.name || '',
							amount: installment?.amount || 0,
							dueDate: installment?.dueDate || '',
							status: installment?.status || '',
							paidDate: installment?.paidDate || new Date(),
							createdAt: installment?.createdAt,
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
											Invoice ID
										</label>
										<Field
											as='input'
											name='customerID'
											placeholder='Customer'
											value={installment?.invoice?.id}
											disabled
											className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
										/>
										<ErrorMessage name='customerID' component='div' className='text-red-500 text-sm mt-1' />
									</div>

									<div>
										<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='customerID'>
											Customer
										</label>
										<Field
											as='input'
											name='customerID'
											placeholder='Customer'
											disabled
											className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
										/>
										<ErrorMessage name='customerID' component='div' className='text-red-500 text-sm mt-1' />
									</div>

									<div>
										<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='warehouseID'>
											Warehouse
										</label>
										<Field
											as='input'
											name='warehouseID'
											placeholder='Warehouse'
											disabled
											className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
										/>
										<ErrorMessage name='warehouseID' component='div' className='text-red-500 text-sm mt-1' />
									</div>

									<div>
										<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='amount'>
											Amount
										</label>
										<Field
											as='input'
											id='amount'
											name='amount'
											placeholder='Amount'
											disabled
											className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
										/>
										<ErrorMessage name='amount' component='div' className='text-red-500 text-sm mt-1' />
									</div>

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
											<option value='PENDING'>Pending</option>
											<option value='PAID'>Paid</option>
											<option value='OVERDUE'>Over Due</option>
										</Field>
										<ErrorMessage name='status' component='div' className='text-red-500 text-sm mt-1' />
									</div>

									<div>
										<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='createdAt'>
											Paid Date
										</label>
										<DatePicker
											className='p-2 w-full border rounded'
											selected={values.paidDate}
											onChange={(date) => setFieldValue('paidDate', getCurrentFormattedDate(date))}
										/>
										<ErrorMessage name='createdAt' component='div' className='text-red-500 text-sm mt-1' />
									</div>

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
