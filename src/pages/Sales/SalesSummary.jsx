'use client';
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { Eye, Pencil, Trash2, Printer } from 'lucide-react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../../components/ui/table';
import AddInvoiceModal from '../../components/modal/AddInvoiceModal';
import EditInvoiceModal from '../../components/modal/EditInvoiceModal';
import { listInvoices } from '../../graphql/queries'; // GraphQL query to fetch invoices
import ConfirmDeleteModal from '../../components/modal/DeleteConfirmationModal';
import { deleteInstallment, deleteInvoice, deleteInvoiceItem } from '../../graphql/mutations';
import { toast } from 'react-toastify';
import PrintInvoice from '../../components/invoices/PrintInvoice';

const client = generateClient();

export default function SalesSummary() {
	const [invoices, setInvoices] = useState([]);
	const [filteredInvoices, setFilteredInvoices] = useState([]);
	const [activeFilter, setActiveFilter] = useState('all');
	const [modalOpen, setModalOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [itemToDelete, setItemToDelete] = useState(null);
	const [invoiceToEdit, setInvoiceToEdit] = useState(null);
	const [quotationToPrint, setQuotationToPrint] = useState(null);
	const [nextToken, setNextToken] = useState(null);
	const [prevTokens, setPrevTokens] = useState([]);

	const fetchInvoices = async (token = null, filter) => {
		try {
			const response = await client.graphql({
				query: listInvoices,
				variables: {
					nextToken: token,
					filter: filter,
					limit: 10,
				},
			});
			const fetchedInvoices = response.data.listInvoices.items;
			setNextToken(response.data.listInvoices.nextToken || null);
			if (token && !prevTokens.includes(token)) {
				setPrevTokens((prev) => {
					return [...prev, token];
				});
			}
			setInvoices(fetchedInvoices);
			setFilteredInvoices(fetchedInvoices); // Initialize filtered invoices
		} catch (error) {
			console.error('Error fetching invoices:', error);
		}
	};
	useEffect(() => {
		fetchInvoices();
	}, []);

	// Filter invoices based on the active filter
	useEffect(() => {
		if (activeFilter === 'all') {
			setFilteredInvoices(invoices);
		} else if (activeFilter === 'walkin') {
			setFilteredInvoices(invoices.filter((invoice) => invoice.paymentMethod === 'CASH'));
		} else if (activeFilter === 'registered') {
			setFilteredInvoices(invoices.filter((invoice) => invoice.paymentMethod !== 'CASH'));
		}
	}, [activeFilter, invoices]);

	const handleDeleteClick = (quotation) => {
		setItemToDelete({ id: quotation.id, title: `Quotation #${quotation.id}`, ...quotation });
	};

	const handleConfirmDelete = async () => {
		setIsDeleting(true);
		try {
			await client.graphql({
				query: deleteInvoice,
				variables: {
					input: {
						id: itemToDelete.id,
					},
				},
			});
			await Promise.all(
				itemToDelete?.items?.items.map((item) =>
					client.graphql({
						query: deleteInvoiceItem,
						variables: {
							input: {
								id: item.id,
							},
						},
					})
				)
			);
			await Promise.all(
				itemToDelete?.installments?.items.map((item) =>
					client.graphql({
						query: deleteInstallment,
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
			setInvoices((prevInvoice) => {
				return prevInvoice.filter((invoice) => invoice.id !== itemToDelete.id);
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

	const handlePrev = () => {
		if (prevTokens.length >= 1) {
			const newPrevTokens = [...prevTokens];
			newPrevTokens.pop();
			const prevToken = newPrevTokens[newPrevTokens.length - 1];
			setPrevTokens(newPrevTokens);
			fetchInvoices(prevToken);
		}
	};

	const handleNext = () => {
		fetchInvoices(nextToken);
	};

	return (
		<div>
			<div className='mb-6'>
				<div className='flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between px-4'>
					<div>
						<h3 className='text-lg font-semibold text-[#212121] dark:text-white/90'>Sales Summary</h3>
					</div>

					<div className='flex items-center gap-3 max-w-[320px] w-full'>
						<div className='hidden lg:block w-full'>
							<form>
								<div className='relative'>
									<span className='absolute -translate-y-1/2 pointer-events-none left-4 top-1/2'>
										<svg
											className='fill-gray-500 dark:fill-gray-400'
											width='20'
											height='20'
											viewBox='0 0 20 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z'
												fill=''
											/>
										</svg>
									</span>
									<input
										type='text'
										placeholder='Search'
										className='bg-white dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200  py-2.5 pl-12 pr-14 text-sm text-[#212121] shadow-theme-xs placeholder:text-[#667085]  focus:outline-hidden  focus:ring-brand-500/10 dark:border-gray-800  dark:text-white/90 dark:placeholder:text-white/30  xl:w-[100%]'
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className='p-4 flex md:justify-between lg:justify-between justify-end items-center flex-wrap gap-4'>
					{/* Tabs */}
					<div className='inline-flex rounded-md border border-gray-200 p-1 bg-white  '></div>
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
						Add Invoice
					</button>
				</div>

				<div className='px-4'>
					<div className='overflow-hidden rounded-2xl border border-b border-gray-200 bg-white  pb-1 dark:border-gray-800 dark:bg-white/[0.03]'>
						<div className='max-w-full overflow-x-auto'>
							<Table>
								<TableHeader className='border-gray-100 dark:border-gray-800 border-b'>
									<TableRow className='w-full mx-3'>
										<TableCell className='font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Customer Name
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Purchase Date
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Total Items
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Paid Amount
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Payment Method
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Installments
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Remainings
										</TableCell>
										<TableCell className='w-[100px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Action
										</TableCell>
									</TableRow>
								</TableHeader>
								<TableBody className='divide-y divide-gray-100 dark:divide-gray-800 '>
									{filteredInvoices.map((invoice) => (
										<TableRow key={invoice.id}>
											<TableCell className='py-[26px] px-[10px]'>
												<div className='flex items-center gap-3 '>{invoice.customer?.name || 'N/A'}</div>
											</TableCell>
											<TableCell className='py-[26px] px-[10px]'>{invoice.createdAt}</TableCell>
											<TableCell className='w-[200px] py-[26px] px-[10px] flex gap-[10px] flex-wrap'>
												{invoice.items?.items?.map((item) => {
													return (
														<span className='border border-[#079455] text-[#067647] rounded p-[10px]' key={item.id}>
															{item?.product?.name}
														</span>
													);
												})}
											</TableCell>
											<TableCell className='py-[26px] px-[10px]'>{invoice.paidAmount}</TableCell>
											<TableCell className='py-[26px] px-[10px] uppercase'>{invoice.paymentMethod}</TableCell>
											<TableCell
												className={`${
													invoice.installments?.items?.length > 0 ? 'w-[300px]' : 'w-[130px]'
												} py-[26px] px-[10px] flex gap-[10px] flex-wrap`}>
												{invoice.installments?.items?.length > 0
													? invoice.installments?.items?.map((item) => {
															return (
																<span className='border border-[#079455] text-[#067647] rounded p-[10px]' key={item.id}>
																	Rs:{item?.amount}
																	<hr className='my-[10px] border-[#079455]' />
																	{item?.dueDate}
																</span>
															);
													  })
													: 'N/A'}
											</TableCell>
											<TableCell className='py-[26px] px-[10px]'>{invoice.totalAmount - invoice.paidAmount}</TableCell>
											<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
												<div className='flex items-center gap-3'>
													<button onClick={() => setQuotationToPrint(invoice)}>
														<Printer className='w-6 h-6 text-slate-600' />
													</button>
													<button onClick={() => setInvoiceToEdit(invoice)}>
														<Pencil className='w-6 h-6 text-slate-600' />
													</button>
													<button onClick={() => handleDeleteClick(invoice)}>
														<Trash2 className='w-6 h-6 text-slate-600' />
													</button>
												</div>
											</TableCell>
										</TableRow>
									))}
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
					<PrintInvoice quotation={quotationToPrint} onClose={() => setQuotationToPrint(null)} />
				</div>
			)}
			<AddInvoiceModal isOpen={modalOpen} setInvoices={setInvoices} onClose={() => setModalOpen(false)} />
			<EditInvoiceModal
				invoice={invoiceToEdit}
				setInvoices={setInvoices}
				onClose={() => {
					setInvoiceToEdit(null);
					fetchInvoices();
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
