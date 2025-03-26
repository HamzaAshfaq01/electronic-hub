'use client'
import { useState } from 'react'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../../components/ui/table'
import AddSupplierModal from '../../components/modal/AddSupplierModal'
import { Search, ChevronDown } from 'lucide-react'

// Define different table data for each tab
const allSupplier = [
	{
		id: 1,
		sku: 'Dawlance SBS 600 INV GD Black',
		revised_ip: '338,400',
		mon_per_qtr: '400',
		straight_discount: '5000',
		special_discount: '338,400',
		semi_annual: '338,400',
		collection_discount: '13,532',
		sm_inactive: '700',
		ctd: '319,600',
	},
]

export default function ManageSuppliers() {
	const [modalOpen, setModalOpen] = useState(false)
	return (
		<div>
			<div className='mb-6'>
				<div className='flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between pt-5'>
					<div className='w-full'>
						<div className='flex justify-between items-center mb-[16px]'>
							<h2>Dawlance</h2>
							<div>
								<button
									onClick={() => setModalOpen(true)}
									className='inline-flex items-center gap-2 bg-[#0BA5EC] rounded-lg border border-gray-300  px-4 py-2.5 text-theme-sm font-medium text-[#fff] shadow-theme-xs hover:bg-[#0BA5EC] hover:text-[#fff]  dark:bg-gray-800 dark:text-[#667085] dark:hover:bg-white/[0.03] dark:hover:text-gray-200'>
									Update Price
								</button>
							</div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 bg-[#FFFFFF] p-[20px] rounded-[8px]   border-white border-2'>
							<div>
								<label
									htmlFor='search'
									className='block text-[14px] font-medium text-[#344054] mb-[6px] leading-[20px]'>
									Search for order
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
							</div>

							<div>
								<label
									htmlFor='category'
									className='block text-[14px] font-medium text-[#344054] mb-[6px] leading-[20px]'>
									Category
								</label>
								<div className='relative'>
									<div className='flex items-center'>
										<div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
											<div className='h-2 w-2 rounded-full bg-green-500'></div>
										</div>
										<select
											id='category'
											className='appearance-none block w-full pl-8 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm'
											defaultValue='dawlance'>
											<option value='dawlance'>Dawlance</option>
											<option value='TCL'>TCL</option>
											<option value='dell'>Dell</option>
											<option value='neumunchen'>Neumunchen</option>
										</select>
										<div className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
											<ChevronDown className='h-4 w-4 text-[#667085]' />
										</div>
									</div>
								</div>
							</div>

							<div>
								<label
									htmlFor='dealer'
									className='block text-[14px] font-medium text-[#344054] mb-[6px] leading-[20px]'>
									Dealer
								</label>
								<div className='relative'>
									<select
										id='dealer'
										className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm'
										defaultValue='all'>
										<option value='all'>All</option>
										<option value='dealer1'>Dealer 1</option>
										<option value='dealer2'>Dealer 2</option>
										<option value='dealer3'>Dealer 3</option>
									</select>
									<div className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
										<ChevronDown className='h-4 w-4 text-[#667085]' />
									</div>
								</div>
							</div>

							<div>
								<label
									htmlFor='subaccount'
									className='block text-[14px] font-medium text-[#344054] mb-[6px] leading-[20px]'>
									Sub account
								</label>
								<div className='relative'>
									<select
										id='subaccount'
										className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm'
										defaultValue='all'>
										<option value='all'>All</option>
										<option value='sub1'>Sub Account 1</option>
										<option value='sub2'>Sub Account 2</option>
										<option value='sub3'>Sub Account 3</option>
									</select>
									<div className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
										<ChevronDown className='h-4 w-4 text-[#667085]' />
									</div>
								</div>
							</div>
						</div>

						<div className='overflow-hidden rounded-2xl border border-b border-gray-200 bg-white  pb-1 dark:border-gray-800 dark:bg-white/[0.03]'>
							<Table>
								<TableHeader className='border-gray-100 dark:border-gray-800 border-b'>
									<TableRow className='w-full mx-3'>
										<TableCell className='font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3'>
											SKU
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3'>
											Revised IP
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3'>
											Mon/Qtr
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3'>
											Straight Discount
										</TableCell>

										<TableCell className='font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3'>
											Special Discount
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3'>
											Semi Annual
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3'>
											Collection Discount
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3'>
											SM Incentive
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3'>
											CTD
										</TableCell>
									</TableRow>
								</TableHeader>
								<TableBody className='divide-y divide-gray-100 dark:divide-gray-800 '>
									{allSupplier.map((supplier) => (
										<TableRow key={supplier.id}>
											<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>{supplier.sku}</TableCell>
											<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>{supplier.revised_ip}</TableCell>
											<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
												{supplier.mon_per_qtr}
											</TableCell>
											<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
												{supplier.straight_discount}
											</TableCell>
											<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
												{supplier.special_discount}
											</TableCell>
											<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
												{supplier.semi_annual}
											</TableCell>
											<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
												{supplier.collection_discount}
											</TableCell>
											<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
												{supplier.sm_inactive}
											</TableCell>
											<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>{supplier.ctd}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
						<div className='flex justify-end items-center p-4 border-t border-[#EAECF0] mx-5  '>
							<button className='p-3 py-2 border hover:bg-gray-100 bg-white'>←</button>
							<button className='p-3 py-2 border  bg-gray-200 font-semibold'>1</button>
							<button className='p-3 py-2 border hover:bg-gray-100 bg-white'>2</button>
							<span className='p-3 py-2 border hover:bg-gray-100 bg-white'>...</span>
							<button className='p-3 py-2 border hover:bg-gray-100 bg-white'>9</button>
							<button className='p-3 py-2 border hover:bg-gray-100 bg-white'>10</button>
							<button className='p-3 py-2 border hover:bg-gray-100 bg-white'>→</button>
						</div>
					</div>
				</div>
			</div>
			<AddSupplierModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
		</div>
	)
}
