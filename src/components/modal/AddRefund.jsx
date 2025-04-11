import { useState } from 'react';
import Label from '../form/Label';
import Input from '../form/input/InputField';

const AddRefundModal = ({ isOpen, onClose }) => {
	if (!isOpen) return null;
	const [enabled, setEnabled] = useState(false);
	return (
		<div className='fixed inset-0  right-0 bg-[#10182885]  flex justify-end items-center h-full z-50'>
			<div className='bg-white p-6  w-full max-w-[588px] shadow-lg h-full relative'>
				<div className='flex justify-between items-center pb-[16px] border-b border-[]'>
					<h2 className='text-[20px] font-medium text-[#1B1F29]'>Add Refunds</h2>
					<button onClick={onClose} className='text-gray-500 text-[30px]'>
						&times;
					</button>
				</div>

				<h2 className='font-medium text-[18px] mt-[15px]'>Personal information</h2>

				<div className='flex flex-col gap-[24px] mt-[24px]'>
					{['Name', 'Reminder Mail', 'Mobile Number', 'CNIC Number', 'Address', 'City'].map((label, index) => (
						<div key={index}>
							<Label className='block text-[14px] font-medium text-[#4F5B67]'>{label}</Label>
							<Input
								type='text'
								placeholder={`Enter ${label}`}
								className='w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1'
							/>
						</div>
					))}

					<div className='flex items-center gap-[24px]'>
						<Label className='text-sm font-medium text-[#494949]'>Enable User</Label>
						<div
							className={`relative w-[36px] h-6 rounded-full transition-colors cursor-pointer 
          ${enabled ? 'bg-[#75E0A7]' : 'bg-gray-300'}`}
							onClick={() => setEnabled(!enabled)}>
							<div
								className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all  cursor-pointer 
            ${enabled ? 'translate-x-3 border-purple-500' : 'border-gray-400'}`}
							/>
						</div>
					</div>

					<div className='flex justify-end border-t border-[] absolute bottom-0 w-full right-0 p-5'>
						<button className='w-[67px] bg-[#0BA5EC] text-white p-2 rounded-[8px] hover:bg-[#0BA5EC]'>Save</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddRefundModal;
