'use client';
import { useState, useEffect } from 'react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../../components/ui/table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AddExpenseModal from '../../components/modal/AddExpenseModal';
import EditExpenseModal from '../../components/modal/EditExpenseModal';
import ConfirmDeleteModal from '../../components/modal/DeleteConfirmationModal';
import { generateClient } from 'aws-amplify/api';
import { toast } from 'react-toastify';
import { listExpenses, expensesByExpenseType } from '../../graphql/queries';
import { deleteExpense } from '../../graphql/mutations';
import { getCurrentFormattedDate, getCurrentMonthRange } from '../../utils/dateUtils';

const client = generateClient();

export default function Managewarehouses() {
	const { start, end } = getCurrentMonthRange();
	const [modalOpen, setModalOpen] = useState(false);
	const [itemToDelete, setItemToDelete] = useState(null);
	const [expenseToEdit, setExpenseToEdit] = useState(null);
	const [expenses, setExpenses] = useState([]);
	const [nextToken, setNextToken] = useState(null);
	const [prevTokens, setPrevTokens] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	const [selectedExpenseType, setSelectedExpenseType] = useState('');
	const [startDate, setStartDate] = useState(start);
	const [endDate, setEndDate] = useState(end);

	const fetchExpenses = async (token = null, filter) => {
		setLoading(true);
		try {
			let data;
			if (selectedExpenseType) {
				const response = await client.graphql({
					query: expensesByExpenseType,
					variables: {
						nextToken: token,
						filter: filter,
						limit: 10,
						expenseType: selectedExpenseType,
					},
				});
				data = response.data.expensesByExpenseType;
			} else {
				const response = await client.graphql({
					query: listExpenses,
					variables: {
						nextToken: token,
						filter: filter,
						limit: 10,
					},
				});
				data = response.data.listExpenses;
			}
			setExpenses(data.items);
			setNextToken(data.nextToken || null);
			if (token && !prevTokens.includes(token)) {
				setPrevTokens((prev) => {
					return [...prev, token];
				});
			}
		} catch (error) {
			console.error('Error fetching expenses:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchExpenses();
	}, [selectedExpenseType]);

	const handlePrev = () => {
		if (prevTokens.length >= 1) {
			const newPrevTokens = [...prevTokens];
			newPrevTokens.pop();
			const prevToken = newPrevTokens[newPrevTokens.length - 1];
			setPrevTokens(newPrevTokens);
			fetchExpenses(prevToken);
		}
	};

	const handleNext = () => {
		fetchExpenses(nextToken);
	};

	const handleDeleteClick = (expense) => {
		setItemToDelete({ id: expense.id, title: expense.title });
	};

	const handleConfirmDelete = async () => {
		setIsDeleting(true);
		try {
			await client.graphql({
				query: deleteExpense,
				variables: {
					input: {
						id: itemToDelete.id,
					},
				},
			});
			toast.success('Expense deleted successfully!');
			setItemToDelete(null);
			setExpenses((prevExpenses) => {
				return prevExpenses.filter((expense) => expense.id !== itemToDelete.id);
			});
		} catch (error) {
			if (error?.errors?.length > 0) {
				const errorMessage = error.errors[0]?.message || 'An unknown error occurred.';
				toast.error(`Failed to delete expense: ${errorMessage}`);
			} else if (error?.message) {
				toast.error(`Failed to delete expense: ${error.message}`);
			} else {
				toast.error('Failed to delete expense. Please try again later.');
			}
		} finally {
			setIsDeleting(false);
		}
	};

	const applyFilters = () => {
		const filters = {
			createdAt: {
				between: [getCurrentFormattedDate(startDate), getCurrentFormattedDate(endDate)],
			},
		};
		fetchExpenses(null, filters);
	};

	return (
		<div>
			<div className='mb-6'>
				<div className='flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between pt-5'>
					<div className='w-full'>
						<div className='flex justify-between items-center mb-[16px]'>
							<h2>All expenses</h2>
							<div>
								<button
									onClick={() => setModalOpen(true)}
									className='inline-flex items-center gap-2 bg-[#0BA5EC] rounded-lg border border-gray-300  px-4 py-2.5 text-theme-sm font-medium text-[#fff] shadow-theme-xs hover:bg-[#0BA5EC] hover:text-[#fff]  dark:bg-gray-800 dark:text-[#667085] dark:hover:bg-white/[0.03] dark:hover:text-gray-200'>
									<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M10.0001 4.16669V15.8334M4.16675 10H15.8334'
											stroke='white'
											strokeWidth='1.66667'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
									Add new expense
								</button>
							</div>
						</div>
						<div className='flex gap-4 mb-4'>
							<select
								value={selectedExpenseType}
								onChange={(e) => setSelectedExpenseType(e.target.value)}
								className='p-2 border rounded'>
								<option value=''>All Types</option>
								<option value='SALARY'>Salary</option>
								<option value='ELECTRICITY'>Electricity</option>
								<option value='RENT'>Rent</option>
								<option value='MAINTENANCE'>Maintenance</option>
								<option value='MISC'>Miscellaneous</option>
							</select>
							<DatePicker className='p-2 border rounded' selected={startDate} onChange={(date) => setStartDate(date)} />
							<DatePicker className='p-2 border rounded' selected={endDate} onChange={(date) => setEndDate(date)} />
							<button onClick={applyFilters} className='p-2 bg-[#0BA5EC] text-white rounded'>
								Apply Filters
							</button>
						</div>
						<div className='overflow-x-auto rounded-2xl border border-b border-gray-200 bg-white  pb-1 dark:border-gray-800 dark:bg-white/[0.03]'>
							<Table className='table-fixed w-full'>
								<TableHeader className='border-gray-100 dark:border-gray-800 border-b'>
									<TableRow className='w-full mx-3 col-span-12'>
										<TableCell className='w-[250px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Title
										</TableCell>
										<TableCell className='w-[150px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Amount
										</TableCell>
										<TableCell className='w-[150px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Type
										</TableCell>
										<TableCell className='w-[150px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Date
										</TableCell>
										<TableCell className='w-[450px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Description
										</TableCell>
										<TableCell className='w-[100px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Action
										</TableCell>
									</TableRow>
								</TableHeader>
								<TableBody className='divide-y divide-gray-100 dark:divide-gray-800 '>
									{expenses.length === 0 ? (
										<TableRow>
											<TableCell
												colSpan={6}
												className='flex justify-center items-center text-center py-4 text-gray-500'>
												No Data Found
											</TableCell>
										</TableRow>
									) : (
										expenses.map((expense) => (
											<TableRow key={expense.id}>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{expense.title}</TableCell>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{expense.amount}</TableCell>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>
													{expense.expenseType}
												</TableCell>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{expense.createdAt}</TableCell>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>
													{expense.description}
												</TableCell>
												<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
													<div className='flex items-center gap-3'>
														<button onClick={() => setExpenseToEdit(expense)}>
															<Pencil className='w-6 h-6 text-slate-600' />
														</button>
														<button onClick={() => handleDeleteClick(expense)}>
															<Trash2 className='w-6 h-6 text-slate-600' />
														</button>
													</div>
												</TableCell>
											</TableRow>
										))
									)}
								</TableBody>
							</Table>
						</div>
					</div>
				</div>
				<div className='flex justify-end gap-[10px] items-center py-4 border-t border-[#EAECF0] '>
					<button
						onClick={handlePrev}
						disabled={prevTokens.length == 0}
						className={`p-3 py-2 cursor-pointer border ${
							prevTokens.length == 0 ? 'bg-gray-200' : 'hover:bg-gray-100 bg-white'
						}`}>
						← Previous
					</button>
					<button
						onClick={handleNext}
						disabled={!nextToken}
						className={`p-3 py-2 cursor-pointer border ${!nextToken ? 'bg-gray-200' : 'hover:bg-gray-100 bg-white'}`}>
						Next →
					</button>
				</div>
			</div>
			<AddExpenseModal isOpen={modalOpen} setExpenses={setExpenses} onClose={() => setModalOpen(false)} />
			<EditExpenseModal
				expenseToEdit={expenseToEdit}
				setExpenses={setExpenses}
				onClose={() => setExpenseToEdit(null)}
			/>
			<ConfirmDeleteModal
				isDeleting={isDeleting}
				itemToDelete={itemToDelete?.title}
				isOpen={itemToDelete}
				onConfirm={handleConfirmDelete}
				onClose={() => setItemToDelete(null)}
			/>
		</div>
	);
}
