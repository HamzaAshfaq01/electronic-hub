import { generateClient } from 'aws-amplify/api';
import { createExpense, createExpenseType } from '../../graphql/mutations';
import { listExpenseTypes } from '../../graphql/queries';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { getCurrentFormattedDate } from '../../utils/dateUtils';

const validationSchema = Yup.object({
	title: Yup.string().required('Title is required'),
	description: Yup.string(),
	amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
	expenseTypeID: Yup.string().required('Expense type is required'),
});

const client = generateClient();

const AddExpenseModal = ({ isOpen, onClose, setExpenses }) => {
	if (!isOpen) return null;

	const [expenseTypes, setExpenseTypes] = useState([]);
	const [isAddingType, setIsAddingType] = useState(false); // State for adding a new expense type
	const [newExpenseType, setNewExpenseType] = useState(''); // State for the new expense type

	// Fetch expense types
	useEffect(() => {
		const fetchExpenseTypes = async () => {
			try {
				const response = await client.graphql({
					query: listExpenseTypes,
				});
				setExpenseTypes(response.data.listExpenseTypes.items || []);
			} catch (error) {
				toast.error('Failed to load expense types. Please try again later.');
				console.error(error);
			}
		};
		fetchExpenseTypes();
	}, []);

	// Handle adding a new expense type
	const handleAddExpenseType = async () => {
		if (!newExpenseType.trim()) {
			toast.error('Expense type name cannot be empty.');
			return;
		}
		try {
			const response = await client.graphql({
				query: createExpenseType,
				variables: {
					input: {
						name: newExpenseType,
					},
				},
			});
			toast.success('Expense type added successfully!');
			setExpenseTypes((prev) => [...prev, response.data.createExpenseType]);
			setNewExpenseType('');
			setIsAddingType(false);
		} catch (error) {
			toast.error('Failed to add expense type. Please try again later.');
			console.error(error);
		}
	};

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			values.createdAt = getCurrentFormattedDate(values.createdAt);
			const response = await client.graphql({
				query: createExpense,
				variables: { input: values },
			});
			toast.success('Expense added successfully!');
			resetForm();
			onClose();
			setExpenses((prevExpenses) => [...prevExpenses, response.data.createExpense]);
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
						expenseTypeID: '', // Use expenseTypeID instead of expenseType
						createdAt: new Date(),
					}}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{({ values, errors, isSubmitting, setFieldValue }) => {
						console.log(errors);
						return (
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
									<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='expenseTypeID'>
										Expense Type
									</label>
									<div className='flex gap-2'>
										<Field
											as='select'
											id='expenseTypeID'
											name='expenseTypeID'
											className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'>
											<option value=''>Select an expense type</option>
											{expenseTypes.map((type) => (
												<option key={type.id} value={type.id}>
													{type.name}
												</option>
											))}
										</Field>
										<button
											type='button'
											onClick={() => setIsAddingType(true)}
											className='bg-blue-500 w-[150px] text-white px-4 py-2 rounded'>
											Add New
										</button>
									</div>
									<ErrorMessage name='expenseTypeID' component='div' className='text-red-500 text-sm mt-1' />
								</div>

								<div>
									<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='createdAt'>
										Created At
									</label>
									<DatePicker
										className='p-2 w-full border rounded'
										selected={values.createdAt}
										onChange={(date) => setFieldValue('createdAt', date)}
									/>
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
						);
					}}
				</Formik>

				{/* Add Expense Type Modal */}
				{isAddingType && (
					<div className='fixed inset-0 bg-[#10182885] flex justify-center items-center z-50'>
						<div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
							<h2 className='text-lg font-medium mb-4'>Add Expense Type</h2>
							<div className='mb-4'>
								<label className='block text-sm font-medium mb-1'>Expense Type Name</label>
								<input
									type='text'
									value={newExpenseType}
									onChange={(e) => setNewExpenseType(e.target.value)}
									className='w-full border border-gray-300 rounded-md p-2'
								/>
							</div>
							<div className='flex justify-end gap-2'>
								<button
									type='button'
									onClick={() => setIsAddingType(false)}
									className='px-4 py-2 bg-gray-200 rounded-md'>
									Cancel
								</button>
								<button
									type='button'
									onClick={handleAddExpenseType}
									className='px-4 py-2 bg-blue-500 text-white rounded-md'>
									Add
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AddExpenseModal;
