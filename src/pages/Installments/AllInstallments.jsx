'use client';
import { useState, useEffect } from 'react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { generateClient } from 'aws-amplify/api';
import { listInstallments } from '../../graphql/queries'; // Replace with your actual query
import { toast } from 'react-toastify';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../../components/ui/table';
import EditInstallmentModal from '../../components/modal/EditInstallmentModal';
import ConfirmDeleteModal from '../../components/modal/DeleteConfirmationModal';
import { Search, ChevronDown } from 'lucide-react';
import { deleteInstallment, updateInvoice } from '../../graphql/mutations';

const client = generateClient();

export default function AllInstallments() {
	const [installments, setInstallments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [itemToDelete, setItemToDelete] = useState(null);
	const [isDeleting, setIsDeleting] = useState(false);
	const [installmentToEdit, setInstallmentToEdit] = useState(null);
	const [installmentStatus, setInstallmentStatus] = useState('');
	const [nextToken, setNextToken] = useState(null);
	const [prevTokens, setPrevTokens] = useState([]);

	const fetchInstallments = async (token = null, filter) => {
		try {
			const response = await client.graphql({
				query: listInstallments,
				variables: {
					limit: 100,
					filter,
					nextToken: token,
				},
			});
			setInstallments(response.data.listInstallments.items || []);
			setNextToken(response.data.listInstallments.nextToken || null);
			if (token && !prevTokens.includes(token)) {
				setPrevTokens((prev) => {
					return [...prev, token];
				});
			}
		} catch (error) {
			toast.error('Failed to load installments. Please try again later.');
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const handleDeleteClick = (installment) => {
		setItemToDelete({ id: installment.id, title: `Installment #${installment.id}`, ...installment });
	};

	const handleConfirmDelete = async () => {
		setIsDeleting(true);
		try {
			await client.graphql({
				query: deleteInstallment,
				variables: {
					input: {
						id: itemToDelete.id,
					},
				},
			});
			await client.graphql({
				query: updateInvoice,
				variables: {
					input: {
						id: itemToDelete.invoice.id,
						paidAmount: itemToDelete?.invoice?.paidAmount + itemToDelete.amount,
					},
				},
			});
			toast.success('Expense deleted successfully!');
			setItemToDelete(null);
			setInstallments((prevInstallment) => {
				return prevInstallment.filter((installment) => installment.id !== itemToDelete.id);
			});
		} catch (error) {
			if (error?.errors?.length > 0) {
				const errorMessage = error.errors[0]?.message || 'An unknown error occurred.';
				toast.error(`Failed to delete installement: ${errorMessage}`);
			} else if (error?.message) {
				toast.error(`Failed to delete installement: ${error.message}`);
			} else {
				toast.error('Failed to delete installement. Please try again later.');
			}
		} finally {
			setIsDeleting(false);
		}
	};

	const handlePrev = () => {
		if (prevTokens.length >= 1) {
			const newPrevTokens = [...prevTokens];
			newPrevTokens.pop();
			const prevToken = newPrevTokens[newPrevTokens.length - 1];
			setPrevTokens(newPrevTokens);
			fetchInstallments(prevToken);
		}
	};

	const handleNext = () => {
		fetchInstallments(nextToken);
	};

	useEffect(() => {
		if (installmentStatus) {
			fetchInstallments(null, {
				status: {
					eq: installmentStatus,
				},
			});
		} else {
			fetchInstallments();
		}
	}, [installmentStatus]);

	return (
		<div className=''>
			<div className='flex justify-between items-center mb-[16px]'>
				<h2>All Installments</h2>
				<div>
					<button
						className='inline-flex items-center gap-2 bg-[#0BA5EC] rounded-lg border border-gray-300 px-4 py-2.5 text-theme-sm font-medium text-[#fff] shadow-theme-xs hover:bg-[#0BA5EC] hover:text-[#fff]'
						onClick={() => toast.info('Add Installment functionality coming soon!')}>
						<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.0001 4.16669V15.8334M4.16675 10H15.8334'
								stroke='white'
								strokeWidth='1.66667'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						Create Installment
					</button>
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-[#FFFFFF] p-[20px] rounded-[8px] border-white border-2'>
				{/* <div>
					<label htmlFor='search' className='block text-[14px] font-medium text-[#344054] mb-[6px] leading-[20px]'>
						Search for client
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
							<Search className='h-5 w-5 text-[#667085]' />
						</div>
						<input
							type='text'
							id='search'
							className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm'
							placeholder='Search'
						/>
					</div>
				</div> */}

				<div>
					<label htmlFor='status' className='block text-[14px] font-medium text-[#344054] mb-[6px] leading-[20px]'>
						Status
					</label>
					<div className='relative'>
						<select
							id='status'
							onChange={(e) => setInstallmentStatus(e.target.value)}
							className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm'
							defaultValue='all'>
							<option value='all'>All</option>
							<option value='PENDING'>Pending</option>
							<option value='PAID'>Paid</option>
							<option value='OVERDUE'>Overdue</option>
						</select>
						<div className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
							<ChevronDown className='h-4 w-4 text-[#667085]' />
						</div>
					</div>
				</div>
			</div>

			<div className='overflow-x-auto rounded-2xl border border-b border-gray-200 bg-white  pb-1 dark:border-gray-800 dark:bg-white/[0.03]'>
				<Table className='table-fixed w-full'>
					<TableHeader className='border-gray-100 dark:border-gray-800 border-b'>
						<TableRow className='w-full mx-3 col-span-12'>
							<TableCell className='w-[150px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
								Customer Name
							</TableCell>
							<TableCell className='w-[200px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
								Products
							</TableCell>
							<TableCell className='w-[120px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
								Due Date
							</TableCell>
							<TableCell className='w-[150px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
								Amount
							</TableCell>
							<TableCell className='w-[150px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
								Status
							</TableCell>
							<TableCell className='w-[100px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
								Action
							</TableCell>
						</TableRow>
					</TableHeader>
					<TableBody className='divide-y divide-gray-100 dark:divide-gray-800 '>
						{installments.length === 0 ? (
							<TableRow>
								<TableCell colSpan={5} className='flex justify-center items-center text-center py-4 text-gray-500'>
									No Data Found
								</TableCell>
							</TableRow>
						) : (
							installments.map((installment) => (
								<TableRow key={installment.id}>
									<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>
										{installment?.invoice?.customer?.name || 'N/A'}
									</TableCell>
									<TableCell className='w-[200px] py-[26px] px-[10px] flex gap-[10px] flex-wrap'>
										{installment?.invoice?.items?.items?.map((item) => {
											return (
												<span className='border border-[#079455] text-[#067647] rounded p-[10px]' key={item.id}>
													{item?.product?.name}
												</span>
											);
										})}
									</TableCell>
									<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>
										{installment.dueDate || 'N/A'}
									</TableCell>
									<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{installment.amount}</TableCell>
									<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{installment.status}</TableCell>
									<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
										<div className='flex items-center gap-3'>
											<button>
												<Eye className='w-6 h-6 text-slate-600' />
											</button>
											<button onClick={() => setInstallmentToEdit(installment)}>
												<Pencil className='w-6 h-6 text-slate-600' />
											</button>
											<button onClick={() => handleDeleteClick(installment)}>
												<Trash2 className='w-6 h-6 text-slate-600' />
											</button>
										</div>
									</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
				<EditInstallmentModal
					installment={installmentToEdit}
					setInstallments={setInstallments}
					onClose={() => {
						setInstallmentToEdit(null);
						fetchInstallments();
					}}
				/>
				<ConfirmDeleteModal
					isDeleting={isDeleting}
					itemToDelete={itemToDelete?.title}
					isOpen={itemToDelete}
					onConfirm={handleConfirmDelete}
					onClose={() => setItemToDelete(null)}
				/>
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
	);
}
