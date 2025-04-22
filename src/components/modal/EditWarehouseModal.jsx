import { generateClient } from 'aws-amplify/api';
import { updateWarehouse } from '../../graphql/mutations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const validationSchema = Yup.object({
	name: Yup.string().required('Name is required'),
	location: Yup.string().required('Location is required'),
});

const client = generateClient();

const EditWarehouseModal = ({ warehouseToEdit, onClose, setWarehouses }) => {
	if (!warehouseToEdit) return null;

	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			const response = await client.graphql({
				query: updateWarehouse,
				variables: { input: { id: warehouseToEdit.id, ...values } },
			});
			toast.success('Warehouse updated successfully!');
			onClose();
			setWarehouses((prevWarehouses) =>
				prevWarehouses.map((warehouse) =>
					warehouse.id === warehouseToEdit.id ? response.data.updateWarehouse : warehouse
				)
			);
		} catch (error) {
			if (error?.errors?.length > 0) {
				const errorMessage = error.errors[0]?.message || 'An unknown error occurred.';
				toast.error(`Failed to update warehouse: ${errorMessage}`);
			} else if (error?.message) {
				toast.error(`Failed to update warehouse: ${error.message}`);
			} else {
				toast.error('Failed to update warehouse. Please try again later.');
			}
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className='fixed inset-0 right-0 bg-[#10182885] flex justify-end items-center h-full z-50'>
			<div className='bg-white p-6 w-full max-w-[588px] shadow-lg h-full relative'>
				<div className='flex justify-between items-center pb-[16px] border-b border-gray-200'>
					<h2 className='text-[20px] font-medium text-[#1B1F29]'>Edit Warehouse</h2>
					<button onClick={onClose} className='text-gray-500 text-[30px]'>
						&times;
					</button>
				</div>

				<Formik
					initialValues={{
						name: warehouseToEdit.name || '',
						location: warehouseToEdit.location || '',
					}}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{({ isSubmitting }) => (
						<Form className='flex flex-col gap-[24px] mt-[40px]'>
							{/* Name Field */}
							<div>
								<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='name'>
									Name
								</label>
								<Field
									id='name'
									name='name'
									type='text'
									placeholder='Enter warehouse name'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='name' component='div' className='text-red-500 text-sm mt-1' />
							</div>

							{/* Location Field */}
							<div>
								<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='location'>
									Location
								</label>
								<Field
									id='location'
									name='location'
									type='text'
									placeholder='Enter warehouse location'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='location' component='div' className='text-red-500 text-sm mt-1' />
							</div>

							{/* Submit Button */}
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

export default EditWarehouseModal;
