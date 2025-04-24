'use client';
import { useState, useEffect } from 'react';
import { Eye, Pencil, Trash2, Search } from 'lucide-react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../../components/ui/table';
import AddCustomerModal from '../../components/modal/AddCustomerModal';
import EditCustomerModal from '../../components/modal/EditCustomerModal';
import ConfirmDeleteModal from '../../components/modal/DeleteConfirmationModal';
import { generateClient } from 'aws-amplify/api';
import { toast } from 'react-toastify';
import { listCustomers, customerByPhone } from '../../graphql/queries';
import { deleteCustomer } from '../../graphql/mutations';

const client = generateClient();

export default function Managewarehouses() {
	const [modalOpen, setModalOpen] = useState(false);
	const [itemToDelete, setItemToDelete] = useState(null);
	const [customerToEdit, setCustomerToEdit] = useState(null);
	const [customers, setCustomers] = useState([]);
	const [nextToken, setNextToken] = useState(null);
	const [prevTokens, setPrevTokens] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [query, setQuery] = useState('');
	const [debouncedQuery, setDebouncedQuery] = useState('');

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(query);
		}, 500);

		return () => {
			clearTimeout(handler);
		};
	}, [query]);

	useEffect(() => {
		if (debouncedQuery) {
			searchCustomersByPhone(debouncedQuery);
		} else {
			fetchCustomers();
		}
	}, [debouncedQuery]);

	const searchCustomersByPhone = async (query) => {
		setLoading(true);
		try {
			const response = await client.graphql({
				query: customerByPhone,
				variables: {
					phone: query.trim(),
					limit: 1000,
				},
			});
			const data = response.data.customerByPhone;
			setCustomers(data.items);
			setNextToken(data.nextToken || null);
			setPrevTokens([]); // Reset pagination when searching
		} catch (error) {
			console.error('Error fetching customers:', error);
		} finally {
			setLoading(false);
		}
	};

	const fetchCustomers = async (token = null) => {
		setLoading(true);
		try {
			const response = await client.graphql({
				query: listCustomers,
				variables: {
					nextToken: token,
					limit: 10,
				},
			});
			const data = response.data.listCustomers;
			setCustomers(data.items);
			setNextToken(data.nextToken || null);
			if (token && !prevTokens.includes(token)) {
				setPrevTokens((prev) => {
					return [...prev, token];
				});
			}
		} catch (error) {
			console.error('Error fetching customers:', error);
		} finally {
			setLoading(false);
		}
	};

	const handlePrev = () => {
		if (prevTokens.length >= 1) {
			const newPrevTokens = [...prevTokens];
			newPrevTokens.pop();
			const prevToken = newPrevTokens[newPrevTokens.length - 1];
			setPrevTokens(newPrevTokens);
			fetchCustomers(prevToken);
		}
	};

	const handleNext = () => {
		fetchCustomers(nextToken);
	};

	const handleDeleteClick = (customer) => {
		setItemToDelete({ id: customer.id, name: customer.name });
	};

	const handleConfirmDelete = async () => {
		setIsDeleting(true);
		try {
			await client.graphql({
				query: deleteCustomer,
				variables: {
					input: {
						id: itemToDelete.id,
					},
				},
			});
			toast.success('Customer deleted successfully!');
			setItemToDelete(null);
			setCustomers((prevCustomers) => {
				return prevCustomers.filter((customer) => customer.id !== itemToDelete.id);
			});
		} catch (error) {
			if (error?.errors?.length > 0) {
				const errorMessage = error.errors[0]?.message || 'An unknown error occurred.';
				toast.error(`Failed to delete customer: ${errorMessage}`);
			} else if (error?.message) {
				toast.error(`Failed to delete customer: ${error.message}`);
			} else {
				toast.error('Failed to delete customer. Please try again later.');
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
						<div className='flex justify-end items-center mb-[16px]'>
							<div className='w-[400px]'>
								<label
									htmlFor='search'
									className='block text-[14px] font-medium text-[#344054] mb-[6px] leading-[20px]'>
									Search Customer By Phone Number
								</label>
								<div className='relative'>
									<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
										<Search className='h-5 w-5 text-[#667085]' />
									</div>
									<input
										type='text'
										id='search'
										value={query}
										onChange={(e) => setQuery(e.target.value)}
										className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm'
										placeholder='Enter phone number'
									/>
								</div>
							</div>
						</div>
						<div className='flex justify-between items-center mb-[16px]'>
							<h2>All Clients</h2>
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
									Add Customer
								</button>
							</div>
						</div>
						<div className='overflow-hidden rounded-2xl border border-b border-gray-200 bg-white  pb-1 dark:border-gray-800 dark:bg-white/[0.03]'>
							<Table>
								<TableHeader className='border-gray-100 dark:border-gray-800 border-b'>
									<TableRow className='w-full mx-3 col-span-12'>
										<TableCell className='font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Name
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Email
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Phone Number
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											CNIC
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											City
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Action
										</TableCell>
									</TableRow>
								</TableHeader>
								<TableBody className='divide-y divide-gray-100 dark:divide-gray-800 '>
									{customers.length === 0 ? (
										<TableRow>
											<TableCell
												colSpan={6}
												className='flex justify-center items-center text-center py-4 text-gray-500'>
												No Data Found
											</TableCell>
										</TableRow>
									) : (
										customers.map((customer) => (
											<TableRow key={customer.id}>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal col-span-12'>
													{customer.name}
												</TableCell>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{customer.email}</TableCell>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{customer.phone}</TableCell>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{customer.cnic}</TableCell>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{customer.city}</TableCell>
												<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
													<div className='flex items-center gap-3'>
														{/* <button>
															<Eye className='w-6 h-6 text-slate-600' />
														</button> */}
														<button onClick={() => setCustomerToEdit(customer)}>
															<Pencil className='w-6 h-6 text-slate-600' />
														</button>
														<button onClick={() => handleDeleteClick(customer)}>
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
			<AddCustomerModal isOpen={modalOpen} setCustomers={setCustomers} onClose={() => setModalOpen(false)} />
			<EditCustomerModal
				customerToEdit={customerToEdit}
				setCustomers={setCustomers}
				onClose={() => setCustomerToEdit(null)}
			/>
			<ConfirmDeleteModal
				isDeleting={isDeleting}
				itemToDelete={itemToDelete?.name}
				isOpen={itemToDelete}
				onConfirm={handleConfirmDelete}
				onClose={() => setItemToDelete(null)}
			/>
		</div>
	);
}
