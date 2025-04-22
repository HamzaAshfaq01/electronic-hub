'use client';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../../components/ui/table';
import ConfirmDeleteModal from '../../components/modal/DeleteConfirmationModal';
import { generateClient } from 'aws-amplify/api';
import { getWarehouse, productsByWarehouseID } from '../../graphql/queries';
import { deleteProduct } from '../../graphql/mutations';
import AddProductModal from '../../components/modal/AddProductModal';
import { toast } from 'react-toastify';
import EditProductModal from '../../components/modal/EditProductModal';

const client = generateClient();

export default function WareHouse() {
	const { warehouseId } = useParams(); // Get warehouse ID from the URL
	const [warehouse, setWarehouse] = useState(null);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [modalOpen, setModalOpen] = useState(false);
	const [nextToken, setNextToken] = useState(null);
	const [prevTokens, setPrevTokens] = useState([]);
	const [productToEdit, setProductToEdit] = useState(null);
	const [itemToDelete, setItemToDelete] = useState(null);
	const [isDeleting, setIsDeleting] = useState(false);

	const fetchWarehouseDetails = async () => {
		setLoading(true);
		try {
			const response = await client.graphql({
				query: getWarehouse,
				variables: { id: warehouseId },
			});
			setWarehouse(response.data.getWarehouse);
		} catch (error) {
			toast.error('Failed to fetch warehouse details. Please try again later.');
		} finally {
			setLoading(false);
		}
	};
	const fetchWarehouseProducts = async (token) => {
		setLoading(true);
		try {
			const response = await client.graphql({
				query: productsByWarehouseID,
				variables: { warehouseID: warehouseId, nextToken: token, limit: 10 },
			});
			setProducts(response.data.productsByWarehouseID.items || []);
			setNextToken(response.data.productsByWarehouseID.nextToken || null);
			if (token && !prevTokens.includes(token)) {
				setPrevTokens((prev) => {
					return [...prev, token];
				});
			}
		} catch (error) {
			toast.error('Failed to fetch warehouse products. Please try again later.');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchWarehouseDetails();
		fetchWarehouseProducts();
	}, [warehouseId]);

	const handlePrev = () => {
		if (prevTokens.length >= 1) {
			const newPrevTokens = [...prevTokens];
			newPrevTokens.pop();
			const prevToken = newPrevTokens[newPrevTokens.length - 1];
			setPrevTokens(newPrevTokens);
			fetchWarehouseProducts(prevToken);
		}
	};

	const handleNext = () => {
		fetchWarehouseProducts(nextToken);
	};

	const handleDeleteClick = (product) => {
		setItemToDelete({ id: product.id, name: product.name });
	};

	const handleConfirmDelete = async () => {
		setIsDeleting(true);
		try {
			await client.graphql({
				query: deleteProduct,
				variables: {
					input: {
						id: itemToDelete.id,
					},
				},
			});
			toast.success('Product deleted successfully!');
			setItemToDelete(null);
			setProducts((prevProducts) => prevProducts.filter((product) => product.id !== itemToDelete.id));
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
				<div className='flex justify-between items-center mb-[16px]'>
					<h2>{warehouse?.name}</h2>
					<div>
						<button
							onClick={() => setModalOpen(true)}
							className='inline-flex items-center gap-2 bg-[#0BA5EC] rounded-lg border border-gray-300 px-4 py-2.5 text-theme-sm font-medium text-[#fff] shadow-theme-xs hover:bg-[#0BA5EC] hover:text-[#fff]'>
							Add Product
						</button>
					</div>
				</div>

				<div className='overflow-x-auto rounded-2xl border border-b border-gray-200 bg-white  pb-1 dark:border-gray-800 dark:bg-white/[0.03]'>
					<Table className='table-fixed w-full'>
						<TableHeader className='border-gray-100 dark:border-gray-800 border-b'>
							<TableRow className='w-full mx-3 col-span-12'>
								<TableCell className='w-[350px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
									ID
								</TableCell>
								<TableCell className='w-[200px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
									Name
								</TableCell>
								<TableCell className='w-[150px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
									Price
								</TableCell>
								<TableCell className='w-[150px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
									Stock
								</TableCell>
								<TableCell className='w-[150px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
									Brand
								</TableCell>
								<TableCell className='w-[150px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
									Model
								</TableCell>
								<TableCell className='w-[400px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
									description
								</TableCell>
								<TableCell className='w-[150px] font-medium text-[#494949] text-start text-[14px] dark:text-[#667085] p-3'>
									Action
								</TableCell>
							</TableRow>
						</TableHeader>
						<TableBody className='divide-y divide-gray-100 dark:divide-gray-800 '>
							{products.length === 0 ? (
								<TableRow>
									<TableCell colSpan={6} className='flex justify-center items-center text-center py-4 text-gray-500'>
										No Data Found
									</TableCell>
								</TableRow>
							) : (
								products.map((product) => (
									<TableRow key={product.id}>
										<TableCell className='py-[26px] p-3 text-[#475467] font-normal col-span-12'>{product.id}</TableCell>
										<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{product.name}</TableCell>
										<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{product.price}</TableCell>
										<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{product.stock}</TableCell>
										<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{product.brand}</TableCell>
										<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>{product.model}</TableCell>
										<TableCell className='py-[26px] p-3 text-[#475467] font-normal text-wrap'>
											{product.description}
										</TableCell>
										<TableCell className='py-[26px] p-3 text-[#475467] font-normal'>
											<div className='flex items-center gap-3'>
												{/* <Link to={`/warehouse/${product.id}`}>
													<Eye className='w-6 h-6 text-slate-600' />
												</Link> */}
												<button onClick={() => setProductToEdit(product)}>
													<Pencil className='w-6 h-6 text-slate-600' />
												</button>
												<button onClick={() => handleDeleteClick(product)}>
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

			{/* Add Product Modal */}
			<AddProductModal
				setProducts={setProducts}
				warehouseId={warehouseId}
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
			/>
			<EditProductModal
				setProducts={setProducts}
				productToEdit={productToEdit}
				onClose={() => setProductToEdit(null)}
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
