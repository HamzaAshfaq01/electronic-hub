interface AddInvoiceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddInvoiceModal = ({ isOpen, onClose }: AddInvoiceModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 right-0 bg-opacity-50 flex justify-end items-center h-full">
            <div className="bg-white p-6 rounded-lg w-full max-w-[588px] shadow-lg h-full relative">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h2 className="text-[20px] font-medium text-[#1B1F29]">Create Invoice</h2>
                    <button onClick={onClose} className="text-gray-500 text-[30px]">&times;</button>
                </div>

                <div className="space-y-4 overflow-y-auto max-h-[80vh]">
                    {['CNIC Number', 'Name', 'Reminder Mail', 'Mobile Number'].map((label, index) => (
                        <div key={index}>
                            <label className="block text-[14px] font-medium text-[#4F5B67]">{label}</label>
                            <input type="text" placeholder={label} className="w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1" />
                        </div>
                    ))}

                    <div>
                        <label className="block text-[14px] font-medium text-[#4F5B67]">Product</label>
                        <input type="text" placeholder="Type product Name, Model number" className="w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {['Model', 'Quantity'].map((label, index) => (
                            <div key={index}>
                                <label className="block text-[14px] font-medium text-[#4F5B67]">{label}</label>
                                <input type="text" placeholder={label} className="w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1" />
                            </div>
                        ))}
                    </div>

                    <div>
                        <label className="block text-[14px] font-medium text-[#4F5B67]">Payment Type</label>
                        <select className="w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1">
                            <option>Bank MCB</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {['Price', 'Paid'].map((label, index) => (
                            <div key={index}>
                                <label className="block text-[14px] font-medium text-[#4F5B67]">{label}</label>
                                <input type="text" placeholder={label} className="w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1" />
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <label className="text-sm font-medium text-gray-700">Enable User</label>
                        <input type="checkbox" className="toggle-checkbox" />
                    </div>
                </div>

                <div className="flex justify-end shadow absolute bottom-0 w-full right-0 p-5 bg-white gap-4">
                    <button className="flex items-center border p-2 rounded text-gray-700 hover:bg-gray-100">
                        🖨️ Print Invoice
                    </button>
                    <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddInvoiceModal;
