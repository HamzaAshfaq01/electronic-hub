'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../ui/table'
import Badge from '../ui/badge/Badge'
import AddCustomerModal from '../modal/AddCustomerModal'
import CreateInvoiceModal from '../modal/CreateInvoice'

const tableData = [
	{
		id: 1,
		Invoice_number: '#12345678',
		customer_name: 'Omar Rizwan',
		sku: 'Dawlance SBS 600 INV GD Black',
		date: '2023-08-01',
		price: '$2399.00',
		payment_status: 'Cash',
		// Replace with actual image URL
	},
	{
		id: 2,
		Invoice_number: '#12345678',
		customer_name: 'Omar Rizwan',
		sku: 'Dawlance SBS 600 INV GD Black',
		date: '2023-08-01',
		price: '$879.00',
		payment_status: 'Credit',
		// Replace with actual image URL
	},
	{
		id: 3,
		Invoice_number: '#12345678',
		customer_name: 'Omar Rizwan',
		sku: 'Dawlance SBS 600 INV GD Black',
		date: '2023-08-01',
		price: '$1869.00',
		payment_status: 'Credit',
		// Replace with actual image URL
	},
	{
		id: 4,
		Invoice_number: '#12345678',
		customer_name: 'Omar Rizwan',
		sku: 'Dawlance SBS 600 INV GD Black',
		date: '2023-08-01',
		price: '$1699.00',
		payment_status: 'Mix Cash/Credit',
		// Replace with actual image URL
	},
	{
		id: 5,
		Invoice_number: '#12345678',
		customer_name: 'Omar Rizwan',
		sku: 'Dawlance SBS 600 INV GD Black',
		date: '2023-08-01',
		price: '$240.00',
		payment_status: 'Cash',
		// Replace with actual image URL
	},
]

export default function RecentSale() {
	// Added useState hook to manage modal state
	const [modalOpen, setModalOpen] = useState(false)
	const [invoiceModalOpen, setInvoiceModalOpen] = useState(false)

	return (
		<div>
			<div className='flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between'>
				<div>
					<h3 className='text-lg font-semibold text-[#212121] dark:text-white/90'>Recent Sales</h3>
				</div>

				<div className='flex items-center gap-3'>
					<button
						onClick={() => setInvoiceModalOpen(true)}
						className='inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-[#494949] shadow-theme-xs hover:bg-gray-50 hover:text-[#212121]  dark:bg-gray-800 dark:text-[#667085] dark:hover:bg-white/[0.03] dark:hover:text-gray-200'>
						<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M16.6666 17.5C16.6666 16.337 16.6666 15.7555 16.5231 15.2824C16.1999 14.217 15.3662 13.3834 14.3009 13.0602C13.8277 12.9167 13.2462 12.9167 12.0832 12.9167H7.91659C6.75362 12.9167 6.17213 12.9167 5.69897 13.0602C4.63363 13.3834 3.79995 14.217 3.47678 15.2824C3.33325 15.7555 3.33325 16.337 3.33325 17.5M13.7499 6.25C13.7499 8.32107 12.071 10 9.99992 10C7.92885 10 6.24992 8.32107 6.24992 6.25C6.24992 4.17893 7.92885 2.5 9.99992 2.5C12.071 2.5 13.7499 4.17893 13.7499 6.25Z'
								stroke='#344054'
								strokeWidth='1.66667'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						Create Invoice
					</button>
					<button className='inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-[#494949] shadow-theme-xs hover:bg-gray-50 hover:text-[#212121]  dark:bg-gray-800 dark:text-[#667085] dark:hover:bg-white/[0.03] dark:hover:text-gray-200'>
						<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<g clipPath='url(#clip0_296_2186)'>
								<path
									d='M15 5.83335V4.33335C15 3.39993 15 2.93322 14.8184 2.5767C14.6586 2.2631 14.4036 2.00813 14.09 1.84834C13.7335 1.66669 13.2668 1.66669 12.3334 1.66669H7.66669C6.73327 1.66669 6.26656 1.66669 5.91004 1.84834C5.59643 2.00813 5.34147 2.2631 5.18168 2.5767C5.00002 2.93322 5.00002 3.39993 5.00002 4.33335V5.83335M5.00002 15C4.22504 15 3.83756 15 3.51964 14.9148C2.65691 14.6837 1.98304 14.0098 1.75187 13.1471C1.66669 12.8292 1.66669 12.4417 1.66669 11.6667V9.83335C1.66669 8.43322 1.66669 7.73316 1.93917 7.19838C2.17885 6.72797 2.56131 6.34552 3.03171 6.10584C3.56649 5.83335 4.26656 5.83335 5.66669 5.83335H14.3334C15.7335 5.83335 16.4336 5.83335 16.9683 6.10584C17.4387 6.34552 17.8212 6.72797 18.0609 7.19838C18.3334 7.73316 18.3334 8.43322 18.3334 9.83335V11.6667C18.3334 12.4417 18.3334 12.8292 18.2482 13.1471C18.017 14.0098 17.3431 14.6837 16.4804 14.9148C16.1625 15 15.775 15 15 15M12.5 8.75002H15M7.66669 18.3334H12.3334C13.2668 18.3334 13.7335 18.3334 14.09 18.1517C14.4036 17.9919 14.6586 17.7369 14.8184 17.4233C15 17.0668 15 16.6001 15 15.6667V14.3334C15 13.3999 15 12.9332 14.8184 12.5767C14.6586 12.2631 14.4036 12.0081 14.09 11.8483C13.7335 11.6667 13.2668 11.6667 12.3334 11.6667H7.66669C6.73327 11.6667 6.26656 11.6667 5.91004 11.8483C5.59643 12.0081 5.34147 12.2631 5.18168 12.5767C5.00002 12.9332 5.00002 13.3999 5.00002 14.3334V15.6667C5.00002 16.6001 5.00002 17.0668 5.18168 17.4233C5.34147 17.7369 5.59643 17.9919 5.91004 18.1517C6.26656 18.3334 6.73327 18.3334 7.66669 18.3334Z'
									stroke='#344054'
									strokeWidth='1.66667'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</g>
							<defs>
								<clipPath id='clip0_296_2186'>
									<rect width='20' height='20' fill='white' />
								</clipPath>
							</defs>
						</svg>
						Print Last Invoice
					</button>
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
			<div className='overflow-hidden rounded-2xl border border-b border-gray-200 bg-white  pb-1  dark:border-gray-800 dark:bg-white/[0.03] '>
				<div className='max-w-full overflow-x-auto'>
					<Table>
						{/* Table Header */}
						<TableHeader className='border-gray-100 dark:border-gray-800 border-b'>
							<TableRow className='w-full'>
								<TableCell
									isHeader
									className='font-medium text-gray-500 text-start text-theme-xs dark:text-[#667085] p-3'>
									Customer Name
								</TableCell>
								<TableCell
									isHeader
									className='font-medium text-gray-500 text-start text-theme-xs dark:text-[#667085] p-3'>
									SKU
								</TableCell>
								<TableCell
									isHeader
									className='py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-[#667085] p-3'>
									Payment
								</TableCell>
								<TableCell
									isHeader
									className='py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-[#667085] p-3'>
									Price
								</TableCell>
							</TableRow>
						</TableHeader>

						{/* Table Body */}

						<TableBody className='divide-y divide-gray-100 dark:divide-gray-800 '>
							{tableData.map((product) => (
								<TableRow key={product.id} className=''>
									<TableCell className='py-[26px] px-[10px]'>
										<div className='flex items-center gap-3'>
											<div>
												<p className='font-medium text-[#212121] text-theme-sm dark:text-white/90'>
													{product.customer_name}
												</p>
											</div>
										</div>
									</TableCell>
									<TableCell className='py-[26px] px-[10px]'>
										<div className='flex items-center gap-3'>
											<div>
												<p className='font-medium text-[#212121] text-theme-sm dark:text-white/90'>{product.sku}</p>
											</div>
										</div>
									</TableCell>
									<TableCell className='py-3 text-gray-500 text-theme-sm dark:text-[#667085]'>
										<Badge
											size='sm'
											color={
												product.payment_status === 'Cash'
													? 'success'
													: product.payment_status === 'Credit'
													? 'warning'
													: product.payment_status === 'Mix Cash/Credit'
													? 'warning'
													: 'error'
											}
											startIcon={true}>
											{product.payment_status}
										</Badge>
									</TableCell>
									<TableCell className='py-3 text-gray-500 text-theme-sm dark:text-[#667085]'>
										{product.price}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>

			<AddCustomerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
			<CreateInvoiceModal isOpen={invoiceModalOpen} onClose={() => setInvoiceModalOpen(false)} />
		</div>
	)
}
