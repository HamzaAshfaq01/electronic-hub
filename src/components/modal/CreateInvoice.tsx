import { useState } from 'react'

interface AddInvoiceModalProps {
	isOpen: boolean
	onClose: () => void
}

const AddInvoiceModal = ({ isOpen, onClose }: AddInvoiceModalProps) => {
	if (!isOpen) return null
	const [enabled, setEnabled] = useState(false)

	return (
		<div className='fixed inset-0 bg-[#10182885] flex justify-end items-center h-full z-50'>
			<div className='bg-white px-6 pt-[16px] pb-[40px] w-full max-w-[588px] shadow-lg h-full relative'>
				<div className='flex justify-between items-center mb-[40px] border-b pb-2'>
					<h2 className='text-[20px] font-medium text-[#1B1F29]'>Create Invoice</h2>
					<button onClick={onClose} className='text-gray-500 text-[30px]'>
						&times;
					</button>
				</div>

				<div className='space-y-4 overflow-y-auto max-h-[80vh]'>
					{['CNIC Number', 'Name', 'Mobile Number'].map((label, index) => (
						<div key={index}>
							<label className='block text-[14px] font-medium text-[#4F5B67]'>{label}</label>
							<input
								type='text'
								placeholder={label}
								className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
								disabled={label === 'CNIC Number' || label === 'Mobile Number'}
							/>
						</div>
					))}
					<div>
						<h3>Product information</h3>
					</div>
					<div>
						<label className='block text-[14px] font-medium text-[#4F5B67]'>Product</label>
						<input
							type='text'
							placeholder='Type product Name, Model number'
							className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
						/>
					</div>

					<div className='grid grid-cols-2 gap-4'>
						{['Model', 'Quantity'].map((label, index) => (
							<div key={index}>
								<label className='block text-[14px] font-medium text-[#4F5B67]'>{label}</label>
								<input
									type='text'
									placeholder={label}
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
									disabled
								/>
							</div>
						))}
					</div>
					<div>
						<h3>Payment information</h3>
					</div>
					<div className='flex justify-between items-center'>
						<label className='block text-[14px] font-medium text-[#4F5B67]'>Payment Type</label>
						<a href='#' className='text-[#0BA5EC] text-[14px]'>
							Change default bank
						</a>
					</div>
					<select className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'>
						<option>Bank MCB</option>
					</select>

					<div className='grid grid-cols-1 gap-4'>
						{['Price', 'Paid'].map((label, index) => (
							<div key={index}>
								<label className='block text-[14px] font-medium text-[#4F5B67]'>{label}</label>
								<input
									type='text'
									placeholder={label}
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
									disabled
								/>
							</div>
						))}
					</div>

					<div className='flex items-center gap-4 mt-4 pb-10'>
						<label className='text-sm font-medium text-[#494949]'>Enable User</label>
						<div
							className={`relative w-[36px] h-6 rounded-full transition-colors cursor-pointer ${
								enabled ? 'bg-[#75E0A7]' : 'bg-gray-300'
							}`}
							onClick={() => setEnabled(!enabled)}>
							<div
								className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all cursor-pointer ${
									enabled ? 'translate-x-5' : 'translate-x-0'
								}`}
							/>
						</div>
					</div>
				</div>

				<div className='flex justify-end shadow absolute bottom-0 w-full right-0 p-5 bg-white gap-4'>
					<button className='flex items-center border px-4 py-2 rounded-[8px] text-[#494949] hover:bg-gray-100'>
						🖨️ Print Invoice
					</button>
					<button className='bg-[#0BA5EC] text-white px-4 py-2 rounded-[8px] hover:bg-[#0BA5EC]'>Save</button>
				</div>
			</div>
		</div>
	)
}

export default AddInvoiceModal
