import { generateClient } from 'aws-amplify/api';
import { createExpense } from '../../graphql/mutations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { getCurrentFormattedDate } from '../../utils/dateUtils';

const validationSchema = Yup.object({
	title: Yup.string().required('Title is required'),
	description: Yup.string(),
	amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
	expenseType: Yup.string().required('Expense type is required'),
});

const client = generateClient();

const AddExpenseModal = ({ isOpen, onClose, setExpenses }) => {
	if (!isOpen) return null;

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			values.createdAt = getCurrentFormattedDate();
			const response = await client.graphql({
				query: createExpense,
				variables: { input: values },
			});
			toast.success('Expense added successfully!');
			resetForm();
			onClose();
			setExpenses((prevExpenses) => [response.data.createExpense, ...prevExpenses]);
		} catch (error) {
			if (error?.errors?.length > 0) {
				const errorMessage = error.errors[0]?.message || 'An unknown error occurred.';
				toast.error(`Failed to add expense: ${errorMessage}`);
			} else if (error?.message) {
				toast.error(`Failed to add expense: ${error.message}`);
			} else {
				toast.error('Failed to add expense. Please try again later.');
			}
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className='fixed inset-0 right-0 bg-[#10182885] flex justify-end items-center h-full z-50'>
			<div className='bg-white p-6 w-full max-w-[588px] shadow-lg h-full relative'>
				<div className='flex justify-between items-center pb-[16px] border-b border-gray-200'>
					<h2 className='text-[20px] font-medium text-[#1B1F29]'>Add Expense</h2>
					<button onClick={onClose} className='text-gray-500 text-[30px]'>
						&times;
					</button>
				</div>

				<Formik
					initialValues={{
						title: '',
						description: '',
						amount: '',
						expenseType: 'SALARY', // Default value
					}}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{({ isSubmitting }) => (
						<Form className='flex flex-col gap-[24px] mt-[40px]'>
							<div>
								<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='title'>
									Title
								</label>
								<Field
									id='title'
									name='title'
									type='text'
									placeholder='Enter title'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='title' component='div' className='text-red-500 text-sm mt-1' />
							</div>

							<div>
								<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='description'>
									Description
								</label>
								<Field
									id='description'
									as='textarea'
									name='description'
									type='text'
									placeholder='Enter description'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='description' component='div' className='text-red-500 text-sm mt-1' />
							</div>

							<div>
								<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='amount'>
									Amount
								</label>
								<Field
									id='amount'
									name='amount'
									type='number'
									placeholder='Enter amount'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='amount' component='div' className='text-red-500 text-sm mt-1' />
							</div>

							<div>
								<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='expenseType'>
									Expense Type
								</label>
								<Field
									as='select'
									id='expenseType'
									name='expenseType'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'>
									<option value='SALARY'>Salary</option>
									<option value='ELECTRICITY'>Electricity</option>
									<option value='RENT'>Rent</option>
									<option value='MAINTENANCE'>Maintenance</option>
									<option value='MISC'>Miscellaneous</option>
								</Field>
								<ErrorMessage name='expenseType' component='div' className='text-red-500 text-sm mt-1' />
							</div>

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

export default AddExpenseModal;
