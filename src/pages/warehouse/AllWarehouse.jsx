'use client'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../../components/ui/table'

// Define different table data for each tab
const AllWareHouse = [
	{
		id: 1,
		name: 'Ware house',
		total_stock: '338,400',
		total_value: '400',
	},
	{
		id: 2,
		name: 'Ware house',
		total_stock: '338,400',
		total_value: '400',
	},
	{
		id: 3,
		name: 'Ware house',
		total_stock: '338,400',
		total_value: '400',
	},
	{
		id: 4,
		name: 'Ware house',
		total_stock: '338,400',
		total_value: '338,400',
	},
	{
		id: 5,
		name: 'Ware house',
		total_stock: '338,400',
		total_value: '338,400',
	},
]

export default function Managewarehouses() {
	return (
		<div>
			<div className='mb-6'>
				<div className='flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between pt-5'>
					<div className='w-full'>
						<div className='flex justify-between items-center mb-[16px]'>
							<h2>All Ware house</h2>
							<div>
								<button className='inline-flex items-center gap-2 bg-[#0BA5EC] rounded-lg border border-gray-300  px-4 py-2.5 text-theme-sm font-medium text-[#fff] shadow-theme-xs hover:bg-[#0BA5EC] hover:text-[#fff]  dark:bg-gray-800 dark:text-[#667085] dark:hover:bg-white/[0.03] dark:hover:text-gray-200'>
									Add Ware houses
								</button>
							</div>
						</div>
						<div className='overflow-hidden rounded-2xl border border-b border-gray-200 bg-white  pb-1 dark:border-gray-800 dark:bg-white/[0.03]'>
							<Table>
								<TableHeader className='border-gray-100 dark:border-gray-800 border-b'>
									<TableRow className='w-full mx-3 col-span-12'>
										<TableCell className='font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3'>
											Name
										</TableCell>

										<TableCell className='font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3'>
											Total stock
										</TableCell>

										<TableCell className='font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3'>
											Total value
										</TableCell>
										<TableCell className='font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3'>
											Action
										</TableCell>
									</TableRow>
								</TableHeader>
								<TableBody className='divide-y divide-gray-100 dark:divide-gray-800 '>
									{AllWareHouse.map((warehouse) => (
										<TableRow key={warehouse.id}>
											<TableCell className=' py-[26px] p-3 text-[#475467] font-normal col-span-12'>
												{warehouse.name}
											</TableCell>

											<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
												{warehouse.total_stock}
											</TableCell>
											<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
												{warehouse.total_value}
											</TableCell>

											<TableCell className=' py-[26px] p-3 text-[#475467] font-normal'>
												<div className='flex items-center gap-3'>
													<div>
														<svg
															width='20'
															height='20'
															viewBox='0 0 20 20'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'>
															<path
																d='M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91794 1.81477 9.81384C1.84654 9.67525 1.90328 9.5854 2.01677 9.40571C2.95461 7.92072 5.74617 4.16669 10.0003 4.16669C14.2545 4.16669 17.0461 7.92072 17.9839 9.4057C18.0974 9.5854 18.1541 9.67525 18.1859 9.81384C18.2098 9.91794 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8334 10.0003 15.8334C5.74617 15.8334 2.95461 12.0793 2.01677 10.5943Z'
																stroke='#475467'
																strokeWidth='1.66667'
																strokeLinecap='round'
																strokeLinejoin='round'
															/>
															<path
																d='M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61931 11.381 7.50002 10.0003 7.50002C8.61962 7.50002 7.50034 8.61931 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z'
																stroke='#475467'
																strokeWidth='1.66667'
																strokeLinecap='round'
																strokeLinejoin='round'
															/>
														</svg>
													</div>
													<div>
														<svg
															width='20'
															height='20'
															viewBox='0 0 20 20'
															fill='none'
															xmlns='http://www.w3.org/2000/svg'>
															<path
																d='M2.39662 15.0964C2.43491 14.7518 2.45405 14.5795 2.50618 14.4185C2.55243 14.2756 2.61778 14.1396 2.70045 14.0142C2.79363 13.8729 2.91621 13.7504 3.16136 13.5052L14.1666 2.49999C15.0871 1.57951 16.5795 1.57951 17.4999 2.49999C18.4204 3.42046 18.4204 4.91285 17.4999 5.83332L6.49469 16.8386C6.24954 17.0837 6.12696 17.2063 5.98566 17.2995C5.86029 17.3821 5.72433 17.4475 5.58146 17.4937C5.42042 17.5459 5.24813 17.565 4.90356 17.6033L2.08325 17.9167L2.39662 15.0964Z'
																stroke='#475467'
																strokeWidth='1.66667'
																strokeLinecap='round'
																strokeLinejoin='round'
															/>
														</svg>
													</div>
												</div>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
