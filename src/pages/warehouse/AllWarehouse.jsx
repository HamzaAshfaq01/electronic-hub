'use client';
import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../../components/ui/table';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { generateClient } from 'aws-amplify/api';
import AddWarehouseModal from '../../components/modal/AddWarehouseModal';
import EditWarehouseModal from '../../components/modal/EditWarehouseModal';
import ConfirmDeleteModal from '../../components/modal/DeleteConfirmationModal';
import { toast } from 'react-toastify';
import { listWarehouses } from '../../graphql/queries';
import { deleteWarehouse } from '../../graphql/mutations';
import { getCurrentFormattedDate, getCurrentMonthRange } from '../../utils/dateUtils';
import { Link } from 'react-router';

const client = generateClient();

export default function Managewarehouses() {
	const [warehouses, setWarehouses] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [nextToken, setNextToken] = useState(null);
	const [prevTokens, setPrevTokens] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [warehouseToEdit, setWarehouseToEdit] = useState(null);
	const [itemToDelete, setItemToDelete] = useState(null);
	const [isDeleting, setIsDeleting] = useState(false);

	// Fetch warehouses from the API
	const fetchWarehouses = async (token = null) => {
		setLoading(true);
		try {
			const response = await client.graphql({
				query: listWarehouses,
				variables: {
					nextToken: token,
					limit: 10,
				},
			});
			setWarehouses(response.data.listWarehouses.items);
			setNextToken(response.data.listWarehouses.nextToken || null);
			if (token && !prevTokens.includes(token)) {
				setPrevTokens((prev) => {
					return [...prev, token];
				});
			}
		} catch (error) {
			console.error('Error fetching warehouses:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchWarehouses();
	}, []);

	const handlePrev = () => {
		if (prevTokens.length >= 1) {
			const newPrevTokens = [...prevTokens];
			newPrevTokens.pop();
			const prevToken = newPrevTokens[newPrevTokens.length - 1];
			setPrevTokens(newPrevTokens);
			fetchWarehouses(prevToken);
		}
	};

	const handleNext = () => {
		fetchWarehouses(nextToken);
	};

	const handleDeleteClick = (warehouse) => {
		setItemToDelete({ id: warehouse.id, name: warehouse.name });
	};

	const handleConfirmDelete = async () => {
		setIsDeleting(true);
		try {
			await client.graphql({
				query: deleteWarehouse,
				variables: {
					input: {
						id: itemToDelete.id,
					},
				},
			});
			toast.success('Warehouse deleted successfully!');
			setItemToDelete(null);
			setWarehouses((prevWarehouses) => prevWarehouses.filter((warehouse) => warehouse.id !== itemToDelete.id));
		} catch (error) {
			if (error?.errors?.length > 0) {
				const errorMessage = error.errors[0]?.message || 'An unknown error occurred.';
				toast.error(`Failed to delete warehouse: ${errorMessage}`);
			} else if (error?.message) {
				toast.error(`Failed to delete warehouse: ${error.message}`);
			} else {
				toast.error('Failed to delete warehouse. Please try again later.');
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
							<h2>All Warehouses</h2>
							<div>
								<button
									onClick={() => setModalOpen(true)}
									className='inline-flex items-center gap-2 bg-[#0BA5EC] rounded-lg border border-gray-300 px-4 py-2.5 text-theme-sm font-medium text-[#fff] shadow-theme-xs hover:bg-[#0BA5EC] hover:text-[#fff]'>
									Add Warehouse
								</button>
							</div>
						</div>

						{/* Table */}
						<div className='overflow-x-auto rounded-2xl border border-b border-gray-200 bg-white  pb-1 dark:border-gray-800 dark:bg-white/[0.03]'>
							<Table className='table-fixed w-full'>
								<TableHeader className='border-gray-100 dark:border-gray-800 border-b'>
									<TableRow className='w-full mx-3 col-span-12'>
										<TableCell className='w-[350px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											ID
										</TableCell>
										<TableCell className='w-[250px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Name
										</TableCell>
										<TableCell className='w-[450px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Location
										</TableCell>
										<TableCell className='w-[100px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
											Action
										</TableCell>
									</TableRow>
								</TableHeader>
								<TableBody className='divide-y divide-gray-100 dark:divide-gray-800 '>
									{warehouses.length === 0 ? (
										<TableRow>
											<TableCell
												colSpan={6}
												className='flex justify-center items-center text-center py-4 text-gray-500'>
												No Data Found
											</TableCell>
										</TableRow>
									) : (
										warehouses.map((warehouse) => (
											<TableRow key={warehouse.id}>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal col-span-12'>
													{warehouse.id}
												</TableCell>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{warehouse.name}</TableCell>
												<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{warehouse.location}</TableCell>
												<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
													<div className='flex items-center gap-3'>
														<Link to={`/warehouse/${warehouse.id}`}>
															<Eye className='w-6 h-6 text-slate-600' />
														</Link>
														<button onClick={() => setWarehouseToEdit(warehouse)}>
															<Pencil className='w-6 h-6 text-slate-600' />
														</button>
														<button onClick={() => handleDeleteClick(warehouse)}>
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

						{/* Pagination */}
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
								className={`p-3 py-2 cursor-pointer border ${
									!nextToken ? 'bg-gray-200' : 'hover:bg-gray-100 bg-white'
								}`}>
								Next →
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Modals */}
			<AddWarehouseModal isOpen={modalOpen} setWarehouses={setWarehouses} onClose={() => setModalOpen(false)} />
			<EditWarehouseModal
				warehouseToEdit={warehouseToEdit}
				setWarehouses={setWarehouses}
				onClose={() => setWarehouseToEdit(null)}
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
