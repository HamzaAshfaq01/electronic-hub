import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createStock, updateStock } from '../../graphql/mutations';
import { listWarehouses, listProducts } from '../../graphql/queries';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Label from '../form/Label';
import Select from '../form/Select';
import { getCurrentFormattedDate } from '../../utils/dateUtils';

const validationSchema = Yup.object({
	product: Yup.string().required('Product is required'),
	warehouse: Yup.string().required('Warehouse is required'),
	quantity: Yup.number().required('Quantity is required').min(1, 'Quantity must be at least 1'),
});

const EditProductStockModal = ({ onClose, productToEdit, setProducts }) => {
	if (!productToEdit) return null;

	const [warehouses, setWarehouses] = useState([]);
	const [products, setProductOptions] = useState([]);
	const [loading, setLoading] = useState(false);

	// Fetch warehouses and products
	useEffect(() => {
		const fetchData = async () => {
			try {
				const [warehouseResponse, productResponse] = await Promise.all([
					generateClient().graphql({ query: listWarehouses, variables: { limit: 1000 } }),
					generateClient().graphql({ query: listProducts, variables: { limit: 1000 } }),
				]);
				setWarehouses(
					warehouseResponse.data.listWarehouses.items.map((warehouse) => ({
						label: warehouse.name,
						value: warehouse.id,
					}))
				);
				setProductOptions(
					productResponse.data.listProducts.items.map((product) => ({
						label: product.name,
						value: product.id,
					}))
				);
			} catch (error) {
				toast.error('Failed to fetch data. Please try again later.');
			}
		};
		fetchData();
	}, []);

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		setLoading(true);
		try {
			const response = await generateClient().graphql({
				query: updateStock,
				variables: {
					input: {
						id: productToEdit.id,
						productID: values.product,
						warehouseID: values.warehouse,
						quantity: parseInt(values.quantity, 10),
						createdAt: getCurrentFormattedDate(),
					},
				},
			});
			toast.success('Product stock added successfully!');
			setProducts((prevProducts) => [response.data.createStock, ...prevProducts]);
			resetForm();
			onClose();
		} catch (error) {
			toast.error('Failed to add product stock. Please try again later.');
		} finally {
			setLoading(false);
			setSubmitting(false);
		}
	};

	return (
		<div className='fixed inset-0 bg-[#10182885] flex justify-end items-center h-full z-50'>
			<div className='bg-white px-6 pt-[16px] pb-[40px] w-full max-w-[588px] shadow-lg h-full relative'>
				<div className='flex justify-between items-center pb-[16px] border-b border-gray-200'>
					<h2 className='text-[20px] font-[500] text-[#1B1F29]'>Edit Product Stock</h2>
					<button onClick={onClose} className='text-gray-500 text-[30px]'>
						&times;
					</button>
				</div>
				<Formik
					initialValues={{
						product: productToEdit.productID || '',
						warehouse: productToEdit.warehouseID || '',
						quantity: productToEdit.quantity || '',
					}}
					enableReinitialize
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{({ values, setFieldValue, isSubmitting }) => (
						<Form className='flex flex-col gap-[24px] mt-[40px] overflow-y-auto max-h-[80vh]'>
							<h3 className='text-[18px] font-[800] leading-[18px]'>Product Information</h3>
							<div>
								<Label className='block text-[14px] font-medium text-[#4F5B67]'>Product</Label>
								<Select
									options={products}
									value={values.product}
									defaultValue={productToEdit.productID}
									onChange={(option) => setFieldValue('product', option)}
									placeholder='Select a product'
									className='w-full border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='product' component='div' className='text-red-500 text-sm mt-1' />
							</div>

							<div>
								<Label className='block text-[14px] font-medium text-[#4F5B67]'>Quantity</Label>
								<Field
									name='quantity'
									type='number'
									placeholder='Enter quantity'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='quantity' component='div' className='text-red-500 text-sm mt-1' />
							</div>

							<h3 className='text-[18px] font-[800] leading-[18px]'>Warehouse</h3>
							<div>
								<Label className='block text-[14px] font-medium text-[#4F5B67]'>Warehouse</Label>
								<Select
									options={warehouses}
									value={values.warehouse}
									defaultValue={productToEdit.warehouseID}
									onChange={(option) => setFieldValue('warehouse', option)}
									placeholder='Select a warehouse'
									className='w-full border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='warehouse' component='div' className='text-red-500 text-sm mt-1' />
							</div>

							<div className='flex justify-end shadow absolute bottom-0 w-full right-0 p-5 bg-white gap-4'>
								<button
									type='submit'
									disabled={isSubmitting || loading}
									className='bg-[#0BA5EC] text-white px-4 py-2 rounded-[8px] hover:bg-[#0BA5EC]'>
									{isSubmitting || loading ? 'Saving...' : 'Save'}
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default EditProductStockModal;
