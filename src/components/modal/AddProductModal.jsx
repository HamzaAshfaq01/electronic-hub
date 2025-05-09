import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createProduct } from '../../graphql/mutations';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Label from '../form/Label';
import { listSuppliers } from '../../graphql/queries';
import AddCustomerModal from './AddSupplierModal';

const client = generateClient();
const validationSchema = Yup.object({
	name: Yup.string().required('Product name is required'),
	description: Yup.string().required('Description is required'),
	unitPrice: Yup.number().required('Price is required').min(0.01, 'Price must be greater than 0'),
	sku: Yup.string().required('SKU is required'),
	brand: Yup.string().required('Brand is required'),
	model: Yup.string().required('Model is required'),
	revisedIP: Yup.string().required('Revised IP is required'),
	straightDiscount: Yup.number().min(0, 'Discount must be non-negative'),
	specialDiscount: Yup.number().min(0, 'Discount must be non-negative'),
	semiAnnual: Yup.number().min(0, 'Value must be non-negative'),
	collectionDiscount: Yup.number().min(0, 'Discount must be non-negative'),
	smIncentive: Yup.number().min(0, 'Value must be non-negative'),
});

const AddProductModal = ({ isOpen, onClose, setProducts }) => {
	if (!isOpen) return null;

	const [customers, setCustomers] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);

	// Fetch customers and products
	useEffect(() => {
		const fetchData = async () => {
			try {
				const customerResponse = await client.graphql({
					query: listSuppliers,
					variables: { limit: 1000 },
				});
				setCustomers(customerResponse.data.listSuppliers.items);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);

	const [loading, setLoading] = useState(false);

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		setLoading(true);
		try {
			const response = await client.graphql({
				query: createProduct,
				variables: {
					input: {
						name: values.name,
						description: values.description,
						unitPrice: parseFloat(values.unitPrice),
						sku: values.sku,
						brand: values.brand,
						model: values.model,
						revisedIP: values.revisedIP,
						straightDiscount: parseFloat(values.straightDiscount),
						specialDiscount: parseFloat(values.specialDiscount),
						semiAnnual: parseFloat(values.semiAnnual),
						collectionDiscount: parseFloat(values.collectionDiscount),
						smIncentive: parseFloat(values.smIncentive),
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
						unitPrice: '',
						sku: '',
						brand: '',
						model: '',
						revisedIP: '',
						straightDiscount: '',
						specialDiscount: '',
						semiAnnual: '',
						collectionDiscount: '',
						smIncentive: '',
					}}
					enableReinitialize
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{({ isSubmitting }) => (
						<Form className='flex flex-col gap-[24px] pb-[10px] mt-[40px] overflow-y-auto max-h-[70vh]'>
							{/* Customer Selection */}
							<div>
								<label className='block text-[14px] font-medium text-[#4F5B67]' htmlFor='customerID'>
									Supplier
								</label>
								<Field
									as='select'
									id='customerID'
									name='customerID'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'>
									<option value=''>Select a supplier</option>
									{customers.map((customer) => (
										<option key={customer.id} value={customer.id}>
											{customer.name}
										</option>
									))}
								</Field>
								<ErrorMessage name='customerID' component='div' className='text-red-500 text-sm mt-1' />
								<button
									onClick={() => setModalOpen(true)}
									className='inline-flex mt-[10px] w-[160px] items-center gap-2 bg-[#0BA5EC] rounded-lg border border-gray-300  px-4 py-2.5 text-theme-sm font-medium text-[#fff] shadow-theme-xs hover:bg-[#0BA5EC] hover:text-[#fff]  dark:bg-gray-800 dark:text-[#667085] dark:hover:bg-white/[0.03] dark:hover:text-gray-200'>
									<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M10.0001 4.16669V15.8334M4.16675 10H15.8334'
											stroke='white'
											strokeWidth='1.66667'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
									Add Supplier
								</button>
							</div>

							{/* Existing Fields */}
							<div>
								<Label>Name</Label>
								<Field
									name='name'
									type='text'
									placeholder='Enter product name'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='name' component='div' className='text-red-500 text-sm mt-1' />
							</div>
							<div>
								<Label>Description</Label>
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
									<Label>Price</Label>
									<Field
										name='unitPrice'
										type='number'
										placeholder='Enter price'
										className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
									/>
									<ErrorMessage name='unitPrice' component='div' className='text-red-500 text-sm mt-1' />
								</div>
								<div>
									<Label>SKU</Label>
									<Field
										name='sku'
										type='text'
										placeholder='Enter SKU'
										className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
									/>
									<ErrorMessage name='sku' component='div' className='text-red-500 text-sm mt-1' />
								</div>
							</div>
							<div className='grid grid-cols-2 gap-4'>
								<div>
									<Label>Brand</Label>
									<Field
										name='brand'
										type='text'
										placeholder='Enter brand'
										className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
									/>
									<ErrorMessage name='brand' component='div' className='text-red-500 text-sm mt-1' />
								</div>
								<div>
									<Label>Model</Label>
									<Field
										name='model'
										type='text'
										placeholder='Enter model'
										className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
									/>
									<ErrorMessage name='model' component='div' className='text-red-500 text-sm mt-1' />
								</div>
							</div>

							{/* New Fields */}
							<div>
								<Label>Revised IP</Label>
								<Field
									name='revisedIP'
									type='text'
									placeholder='Enter revised IP'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='revisedIP' component='div' className='text-red-500 text-sm mt-1' />
							</div>
							<div>
								<Label>Straight Discount</Label>
								<Field
									name='straightDiscount'
									type='number'
									placeholder='Enter straight discount'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='straightDiscount' component='div' className='text-red-500 text-sm mt-1' />
							</div>
							<div>
								<Label>Special Discount</Label>
								<Field
									name='specialDiscount'
									type='number'
									placeholder='Enter special discount'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='specialDiscount' component='div' className='text-red-500 text-sm mt-1' />
							</div>
							<div>
								<Label>Semi-Annual</Label>
								<Field
									name='semiAnnual'
									type='number'
									placeholder='Enter semi-annual value'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='semiAnnual' component='div' className='text-red-500 text-sm mt-1' />
							</div>
							<div>
								<Label>Collection Discount</Label>
								<Field
									name='collectionDiscount'
									type='number'
									placeholder='Enter collection discount'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='collectionDiscount' component='div' className='text-red-500 text-sm mt-1' />
							</div>
							<div>
								<Label>SM Incentive</Label>
								<Field
									name='smIncentive'
									type='number'
									placeholder='Enter SM incentive'
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								/>
								<ErrorMessage name='smIncentive' component='div' className='text-red-500 text-sm mt-1' />
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
			{modalOpen && (
				<AddCustomerModal isOpen={modalOpen} setCustomers={setCustomers} onClose={() => setModalOpen(false)} />
			)}
		</div>
	);
};

export default AddProductModal;
