'use client'
import { useState } from 'react'
import { Search, ChevronDown, ArrowDown } from 'lucide-react'

export default function PurchaseOrders() {
	const [orders] = useState([
		{
			id: 'INV-3066',
			sku: 'Dawlance SBS 600 INV GD BLack',
			date: 'Jan 6, 2022',
			quantity: 1,
			warehouse: 'W1',
			status: 'Arrived',
		},
		{
			id: 'INV-3065',
			sku: 'Dawlance SBS 600 INV GD BLack',
			date: 'Jan 6, 2022',
			quantity: 4,
			warehouse: 'W2',
			status: 'Arrived',
		},
		{
			id: 'INV-3064',
			sku: 'Dawlance SBS 600 INV GD BLack',
			date: 'Jan 6, 2022',
			quantity: 5,
			warehouse: 'W3',
			status: 'Arrived',
		},
		{
			id: 'INV-3063',
			sku: 'Dawlance SBS 600 INV GD BLack',
			date: 'Jan 5, 2022',
			quantity: 7,
			warehouse: 'W4',
			status: 'Arrived',
		},
		{
			id: 'INV-3062',
			sku: 'Dawlance SBS 600 INV GD BLack',
			date: 'Jan 5, 2022',
			quantity: 12,
			warehouse: 'W5',
			status: 'Not arrived',
		},
		{
			id: 'INV-3061',
			sku: 'Dawlance SBS 600 INV GD BLack',
			date: 'Jan 5, 2022',
			quantity: 12,
			warehouse: 'W5',
			status: 'Not arrived',
		},
		{
			id: 'INV-3060',
			sku: 'Dawlance SBS 600 INV GD BLack',
			date: 'Jan 4, 2022',
			quantity: 13,
			warehouse: 'W5',
			status: 'Not arrived',
		},
	])
	return (
		<div>
			<div>
				<div className=''>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 bg-[#FFFFFF] p-[20px] rounded-[8px]   border-white border-2'>
						<div>
							<label htmlFor='search' className='block text-[14px] font-medium text-[#344054] mb-[6px] leading-[20px]'>
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
							<label htmlFor='status' className='block text-[14px] font-medium text-[#344054] mb-[6px] leading-[20px]'>
								Status
							</label>
							<div className='relative'>
								<div className='flex items-center'>
									<div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
										<div className='h-2 w-2 rounded-full bg-green-500'></div>
									</div>
									<select
										id='status'
										className='appearance-none block w-full pl-8 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm'
										defaultValue='paid'>
										<option value='paid'>Paid</option>
										<option value='pending'>Pending</option>
										<option value='failed'>Failed</option>
									</select>
									<div className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
										<ChevronDown className='h-4 w-4 text-[#667085]' />
									</div>
								</div>
							</div>
						</div>

						<div>
							<label htmlFor='dealer' className='block text-[14px] font-medium text-[#344054] mb-[6px] leading-[20px]'>
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

					<div className='overflow-x-auto'>
						<table className='min-w-full divide-y divide-gray-200 rounded-[8px]  bg-white border-white border-2 '>
							<thead className='bg-white rounded-[8px]'>
								<tr>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										<div className='flex items-center space-x-1'>
											<input
												type='checkbox'
												id='select-all'
												className='h-4 w-4 text-[#09a5ec] border-[#D0D5DD] rounded-[8px] focus:ring-[#09a5ec]'
											/>
											<label htmlFor='select-all' className='ml-2'>
												Invoice
											</label>
											<ArrowDown className='h-4 w-4 text-gray-500' />
										</div>
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										SKU
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										Date
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										Quantity
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										Ware house
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										Status
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'></th>
								</tr>
							</thead>
							<tbody className='bg-white divide-y divide-gray-200'>
								{orders.map((order) => (
									<tr key={order.id} className='hover:bg-gray-50'>
										<td className='px-6 py-4 whitespace-nowrap'>
											<div className='flex items-center'>
												<input
													type='checkbox'
													id={`order-${order.id}`}
													className='h-4 w-4 text-[#09a5ec] border-[#D0D5DD] rounded-[8px] focus:ring-[#09a5ec]'
												/>
												<label htmlFor={`order-${order.id}`} className='ml-2 text-sm text-gray-900'>
													{order.id}
												</label>
											</div>
										</td>
										<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{order.sku}</td>
										<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{order.date}</td>
										<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{order.quantity}</td>
										<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{order.warehouse}</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											<span
												className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${
													order.status === 'Arrived'
														? 'bg-green-100 text-[#067647] border border-green-500'
														: 'bg-orange-100 text-[#B54708] border border-orange-500'
												}`}>
												<div
													className={`h-2 w-2 rounded-full mr-1 ${
														order.status === 'Arrived' ? 'bg-green-500' : 'bg-orange-500'
													}`}></div>
												{order.status}
											</span>
										</td>
										<td className='px-6 py-4 whitespace-nowrap text-sm'>
											<button
												onClick={(e) => {
													e.stopPropagation()
												}}
												className='text-[#0BA5EC] hover:text-blue-700'>
												Download
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
