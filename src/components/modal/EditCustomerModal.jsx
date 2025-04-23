import { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { updateCustomer } from '../../graphql/mutations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { getCurrentFormattedDate } from '../../utils/dateUtils';

const validationSchema = Yup.object({
	name: Yup.string().required('Name is required'),
	phone: Yup.string().required('Mobile Number is required'),
	cnic: Yup.string().required('CNIC Number is required'),
	address: Yup.string().required('Address is required'),
	city: Yup.string().required('City is required'),
});
const client = generateClient();

const AddCustomerModal = ({ customerToEdit, onClose, setCustomers }) => {
	if (!customerToEdit) return null;

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			await client.graphql({
				query: updateCustomer,
				variables: { input: values },
				authMode: 'userPool',
			});
			toast.success('Customer edited successfully!');
			resetForm();
			onClose();
			setCustomers((prevCustomers) => {
				return prevCustomers.map((customer) => {
					if (customer.id === values.id) {
						return values;
					}
					return customer;
				});
			});
		} catch (error) {
			if (error?.errors?.length > 0) {
				const errorMessage = error.errors[0]?.message || 'An unknown error occurred.';
				toast.error(`Failed to edit customer: ${errorMessage}`);
			} else if (error?.message) {
				toast.error(`Failed to edit customer: ${error.message}`);
			} else {
				toast.error('Failed to edit customer. Please try again later.');
			}
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className='fixed inset-0 right-0 bg-[#10182885] flex justify-end items-center h-full z-50'>
			<div className='bg-white p-6 w-full max-w-[588px] shadow-lg h-full relative'>
				<div className='flex justify-between items-center pb-[16px] border-b border-gray-200'>
					<h2 className='text-[20px] font-medium text-[#1B1F29]'>Edit Customers</h2>
					<button onClick={onClose} className='text-gray-500 text-[30px]'>
						&times;
					</button>
				</div>

				<Formik
					initialValues={{
						id: customerToEdit.id,
						name: customerToEdit.name || '',
						email: customerToEdit.email || '',
						phone: customerToEdit.phone || '',
						cnic: customerToEdit.cnic || '',
						address: customerToEdit.address || '',
						city: customerToEdit.city || '',
					}}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{({ isSubmitting }) => (
						<Form className='flex flex-col gap-[24px] mt-[40px]'>
							{['name', 'email', 'phone', 'cnic', 'address', 'city'].map((field, index) => (
								<div key={index}>
									<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor={field}>
										{field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
									</label>
									<Field
										id={field}
										name={field}
										type='text'
										placeholder={`Enter ${field}`}
										className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
									/>
									<ErrorMessage name={field} component='div' className='text-red-500 text-sm mt-1' />
								</div>
							))}

							<div className='flex justify-end border-t border-gray-200 absolute bottom-0 w-full right-0 p-5'>
								<button
									type='submit'
									disabled={isSubmitting}
									className='bg-[#0BA5EC] text-white px-[30px] py-[10px] rounded-[8px] hover:bg-[#0BA5EC]'>
									{isSubmitting ? 'Loading...' : 'Save'}
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default AddCustomerModal;
