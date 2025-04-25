'use client';
import { useState, useEffect } from 'react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../../components/ui/table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AddQuotationModal from '../../components/modal/AddQoutationModal';
import EditQuotationModal from '../../components/modal/EditQoutationModal';
import ConfirmDeleteModal from '../../components/modal/DeleteConfirmationModal';
import { generateClient } from 'aws-amplify/api';
import { toast } from 'react-toastify';
import { listQuotations, quotationsByCustomer } from '../../graphql/queries';
import { deleteQuotation, deleteQuotationItem } from '../../graphql/mutations';
import { getCurrentFormattedDate, getCurrentMonthRange } from '../../utils/dateUtils';
import QoutationPrintInvoice from '../../components/invoices/QoutationPrintInvoice';

const client = generateClient();

export default function ManageQuotations() {
	const { start, end } = getCurrentMonthRange();
	const [modalOpen, setModalOpen] = useState(false);
	const [itemToDelete, setItemToDelete] = useState(null);
	const [quotationToEdit, setQuotationToEdit] = useState(null);
	const [quotations, setQuotations] = useState([]);
	const [nextToken, setNextToken] = useState(null);
	const [prevTokens, setPrevTokens] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [quotationToPrint, setQuotationToPrint] = useState(null);

	const fetchQuotations = async (token = null, filter) => {
		setLoading(true);
		try {
			const response = await client.graphql({
				query: listQuotations,
				variables: {
					nextToken: token,
					filter: filter,
					limit: 10,
				},
			});
			const data = response.data.listQuotations;
			setQuotations(data.items);
			setNextToken(data.nextToken || null);
			if (token && !prevTokens.includes(token)) {
				setPrevTokens((prev) => {
					return [...prev, token];
				});
			}
		} catch (error) {
			console.error('Error fetching quotations:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchQuotations();
	}, []);

	const handlePrev = () => {
		if (prevTokens.length >= 1) {
			const newPrevTokens = [...prevTokens];
			newPrevTokens.pop();
			const prevToken = newPrevTokens[newPrevTokens.length - 1];
			setPrevTokens(newPrevTokens);
			fetchQuotations(prevToken);
		}
	};

	const handleNext = () => {
		fetchQuotations(nextToken);
	};

	const handleDeleteClick = (quotation) => {
		setItemToDelete({ id: quotation.id, title: `Quotation #${quotation.id}`, ...quotation });
	};

	const handleConfirmDelete = async () => {
		setIsDeleting(true);
		try {
			await client.graphql({
				query: deleteQuotation,
				variables: {
					input: {
						id: itemToDelete.id,
					},
				},
			});
			await Promise.all(
				itemToDelete?.items?.items.map((item) =>
					client.graphql({
						query: deleteQuotationItem,
						variables: {
							input: {
								id: item.id,
							},
						},
					})
				)
			);
			toast.success('Quotation deleted successfully!');
			setItemToDelete(null);
			setQuotations((prevQuotations) => {
				return prevQuotations.filter((quotation) => quotation.id !== itemToDelete.id);
			});
		} catch (error) {
			if (error?.errors?.length > 0) {
				const errorMessage = error.errors[0]?.message || 'An unknown error occurred.';
				toast.error(`Failed to delete quotation: ${errorMessage}`);
			} else if (error?.message) {
				toast.error(`Failed to delete quotation: ${error.message}`);
			} else {
				toast.error('Failed to delete quotation. Please try again later.');
			}
		} finally {
			setIsDeleting(false);
		}
	};

	return (
		<div>
			<div className='mb-6'>
				<div className='flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between pt-5'>
					<div className='w-full'>
						<div className='flex justify-between items-center mb-[16px]'>
							<h2>All Quotations</h2>
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
									Add new quotation
								</button>
							</div>
						</div>
						<div className='overflow-x-auto rounded-2xl border border-b border-gray-200 bg-white  pb-1 dark:border-gray-800 dark:bg-white/[0.03]'>
							<Table className='table-fixed w-full'>
								<TableHeader className='border-gray-100 dark:border-gray-800 border-b'>
									<TableRow className='w-full mx-3 col-span-12'>
										<TableCell className='w-[250px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Customer
										</TableCell>
										<TableCell className='w-[150px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Total Amount
										</TableCell>
										<TableCell className='w-[150px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Date
										</TableCell>
										<TableCell className='w-[450px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Items
										</TableCell>
										<TableCell className='w-[100px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Action
										</TableCell>
									</TableRow>
								</TableHeader>
								<TableBody className='divide-y divide-gray-100 dark:divide-gray-800 '>
									{quotations.length === 0 ? (
										<TableRow>
											<TableCell
												colSpan={5}
												className='flex justify-center items-center text-center py-4 text-gray-500'>
												No Data Found
											</TableCell>
										</TableRow>
									) : (
										quotations.map((quotation) => (
											<TableRow key={quotation.id}>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>
													{quotation.customer?.name || 'N/A'}
												</TableCell>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>
													{quotation.totalAmount}
												</TableCell>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>
													{quotation.createdAt}
												</TableCell>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal flex gap-[10px]'>
													{quotation.items?.items?.map((item) => {
														return (
															<span className='border border-[#079455] text-[#067647] rounded p-[10px]' key={item.id}>
																{item?.product?.name}
															</span>
														);
													})}
												</TableCell>
												<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
													<div className='flex items-center gap-3'>
														<button onClick={() => setQuotationToPrint(quotation)}>
															<Eye className='w-6 h-6 text-slate-600' />
														</button>
														<button onClick={() => setQuotationToEdit(quotation)}>
															<Pencil className='w-6 h-6 text-slate-600' />
														</button>
														<button onClick={() => handleDeleteClick(quotation)}>
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
			{quotationToPrint && (
				<div className='hidden print:block'>
					<QoutationPrintInvoice quotation={quotationToPrint} onClose={() => setQuotationToPrint(null)} />
				</div>
			)}
			<AddQuotationModal
				isOpen={modalOpen}
				setQuotations={setQuotations}
				onClose={() => {
					setModalOpen(false);
					fetchQuotations();
				}}
			/>
			<EditQuotationModal
				quotation={quotationToEdit}
				setQuotations={setQuotations}
				onClose={() => {
					setQuotationToEdit(null);
					fetchQuotations();
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
	);
}
