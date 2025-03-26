import { useState } from 'react'
import { Search } from 'lucide-react'
import Label from '../form/Label'
import Input from '../form/Input/InputField'
import Select from '../form/Select'

const AddInvoiceModal = ({ isOpen, onClose }) => {
	if (!isOpen) return null
	const [enabled, setEnabled] = useState(false)

	return (
		<div className='fixed inset-0 bg-[#10182885] flex justify-end items-center h-full z-50'>
			<div className='bg-white px-6 pt-[16px] pb-[40px] w-full max-w-[588px] shadow-lg h-full relative'>
				<div className='flex justify-between items-center pb-[16px] border-b border-[]'>
					<h2 className='text-[20px] font-[500] text-[#1B1F29]'>Create Invoice</h2>
					<button onClick={onClose} className='text-gray-500 text-[30px]'>
						&times;
					</button>
				</div>
				<div className='flex flex-col gap-[24px] mt-[40px] overflow-y-auto max-h-[80vh]'>
					<h3 className='text-[18px] font-[800] leading-[18px]'>Product information</h3>
					<div>
						<Label className='block text-[14px] font-medium text-[#4F5B67]'>Product</Label>
						<div className='relative'>
							<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
								<Search className='w-5 h-5 text-[#667085] pt-[2px]' />
							</div>
							<Select
								options={[
									{ label: 'Product 1', value: 'product-1' },
									{ label: 'Product 2', value: 'product-2' },
									{ label: 'Product 3', value: 'product-3' },
								]}
								placeholder='Type product Name, Model number'
								className='w-full pl-10 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
							/>
						</div>
					</div>

					<div className='grid grid-cols-2 gap-4'>
						{['Price', 'Quantity'].map((label, index) => (
							<div key={index}>
								<Label className='block text-[14px] font-medium text-[#4F5B67]'>{label}</Label>
								<Input
									type='text'
									placeholder={label}
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
									disabled
								/>
							</div>
						))}
					</div>
					<h3 className='text-[18px] font-[800] leading-[18px]'>Product location</h3>
					<div className='flex flex-col gap-[8px]'>
						<Label className='block text-[14px] font-medium text-[#4F5B67]'>Ware house</Label>
						<Select
							options={[
								{ label: 'Ware house 1', value: 'product-1' },
								{ label: 'Ware house 2', value: 'product-2' },
							]}
							placeholder='Ware house 1'
							className='w-full border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
						/>
					</div>

					<div className='grid grid-cols-2 gap-4'>
						{['Raw', 'Column'].map((label, index) => (
							<div key={index}>
								<Label className='block text-[14px] font-medium text-[#4F5B67]'>{label}</Label>
								<Input
									type='text'
									placeholder={label}
									className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
									disabled
								/>
							</div>
						))}
					</div>

					<h3 className='text-[18px] font-[800] leading-[18px]'>Transportation</h3>
					<div>
						<Label className='block text-[14px] font-medium text-[#4F5B67]'>Expenses</Label>
						<Input
							type='text'
							placeholder='24500'
							className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
							disabled
						/>
					</div>

					<div className='flex items-center gap-4 mt-4 pb-10'>
						<Label className='text-sm font-medium text-[#494949]'>In Stock</Label>
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
