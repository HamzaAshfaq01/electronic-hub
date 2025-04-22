import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createProduct } from '../../graphql/mutations';
import { listWarehouses } from '../../graphql/queries';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Label from '../form/Label';
import Input from '../form/input/InputField';
import Select from '../form/Select';

const client = generateClient();
const validationSchema = Yup.object({
	name: Yup.string().required('Product name is required'),
	description: Yup.string().required('Description is required'),
	price: Yup.number().required('Price is required').min(0.01, 'Price must be greater than 0'),
	stock: Yup.number().required('Stock is required').min(1, 'Stock must be at least 1'),
	brand: Yup.string().required('Brand is required'),
	model: Yup.string().required('Model is required'),
	warehouse: Yup.string().required('Warehouse is required'),
});

const AddProductModal = ({ isOpen, onClose, warehouseId, setProducts }) => {
	if (!isOpen) return null;

	const [warehouses, setWarehouses] = useState([]);
	const [loading, setLoading] = useState(false);

	// Fetch warehouses
	useEffect(() => {
		const fetchWarehouses = async () => {
			try {
				const response = await client.graphql({ query: listWarehouses });
				setWarehouses(
					response.data.listWarehouses.items.map((warehouse) => ({
						label: warehouse.name,
						value: warehouse.id,
					}))
				);
			} catch (error) {
				toast.error('Failed to fetch warehouses. Please try again later.');
			}
		};
		fetchWarehouses();
	}, []);

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		setLoading(true);
		try {
			console.log(values, 'values');
			const response = await generateClient().graphql({
				query: createProduct,
				variables: {
					input: {
						name: values.name,
						description: values.description,
						price: parseFloat(values.price),
						stock: parseInt(values.stock, 10),
						brand: values.brand,
						model: values.model,
						warehouseID: values.warehouse,
					},
				},
			});
			toast.success('Product added successfully!');
			setProducts((prevProducts) => [...prevProducts, response.data.createProduct]);
			resetForm();
			onClose();
		} catch (error) {
			toast.error('Failed to add product. Please try again later.');
		} finally {
			setLoading(false);
			setSubmitting(false);
		}
	};

	return (
		<div className='fixed inset-0 bg-[#10182885] flex justify-end items-center h-full z-50'>
			<div className='bg-white px-6 pt-[16px] pb-[40px] w-full max-w-[588px] shadow-lg h-full relative'>
				<div className='flex justify-between items-center pb-[16px] border-b border-gray-200'>
					<h2 className='text-[20px] font-[500] text-[#1B1F29]'>Add Product</h2>
					<button onClick={onClose} className='text-gray-500 text-[30px]'>
						&times;
					</button>
				</div>
				<Formik
					initialValues={{
						name: '',
						description: '',
						price: '',
						stock: '',
						brand: '',
						model: '',
						warehouse: warehouseId || '',
					}}
					enableReinitialize
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{({ values, setFieldValue, isSubmitting }) => (
						<Form className='flex flex-col gap-[24px] mt-[40px] overflow-y-auto max-h-[80vh]'>
							<h3 className='text-[18px] font-[800] leading-[18px]'>Product Information</h3>
							<div>
								<Label className='block text-[14px] font-medium text-[#4F5B67]'>Name</Label>
								<Field
									name='name'
									type='text'
									placeholder='Enter product name'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='name' component='div' className='text-red-500 text-sm mt-1' />
							</div>

							<div>
								<Label className='block text-[14px] font-medium text-[#4F5B67]'>Description</Label>
								<Field
									name='description'
									as='textarea'
									placeholder='Enter product description'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='description' component='div' className='text-red-500 text-sm mt-1' />
							</div>

							<div className='grid grid-cols-2 gap-4'>
								<div>
									<Label className='block text-[14px] font-medium text-[#4F5B67]'>Price</Label>
									<Field
										name='price'
										type='number'
										placeholder='Enter price'
										className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
									/>
									<ErrorMessage name='price' component='div' className='text-red-500 text-sm mt-1' />
								</div>
								<div>
									<Label className='block text-[14px] font-medium text-[#4F5B67]'>Stock</Label>
									<Field
										name='stock'
										type='number'
										placeholder='Enter stock quantity'
										className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
									/>
									<ErrorMessage name='stock' component='div' className='text-red-500 text-sm mt-1' />
								</div>
							</div>

							<div className='grid grid-cols-2 gap-4'>
								<div>
									<Label className='block text-[14px] font-medium text-[#4F5B67]'>Brand</Label>
									<Field
										name='brand'
										type='text'
										placeholder='Enter brand'
										className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
									/>
									<ErrorMessage name='brand' component='div' className='text-red-500 text-sm mt-1' />
								</div>
								<div>
									<Label className='block text-[14px] font-medium text-[#4F5B67]'>Model</Label>
									<Field
										name='model'
										type='text'
										placeholder='Enter model'
										className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
									/>
									<ErrorMessage name='model' component='div' className='text-red-500 text-sm mt-1' />
								</div>
							</div>

							<h3 className='text-[18px] font-[800] leading-[18px]'>Warehouse</h3>
							<div>
								<Label className='block text-[14px] font-medium text-[#4F5B67]'>Warehouse</Label>
								<Select
									options={warehouses}
									value={values.warehouse}
									defaultValue={values.warehouse}
									onChange={(option) => {
										setFieldValue('warehouse', option);
									}}
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

export default AddProductModal;
