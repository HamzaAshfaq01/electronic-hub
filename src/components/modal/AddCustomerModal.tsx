


interface AddCustomerModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  const AddCustomerModal = ({ isOpen, onClose }: AddCustomerModalProps) =>{
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  right-0 bg-opacity-50 flex justify-end items-center h-full">
      <div className="bg-white p-6 rounded-lg w-full max-w-[588px] shadow-lg h-full relative">
        <div className="flex justify-between items-center mb-4 border-b border-[]">
          <h2 className="text-[20px] font-medium text-[#1B1F29]">Add Customer</h2>
          <button onClick={onClose} className="text-gray-500 text-[30px]">&times;</button>
        </div>
        
        <div className="space-y-4">
          {['Name', 'Reminder Mail', 'Mobile Number', 'CNIC Number', 'Address', 'City'].map((label, index) => (
            <div key={index}>
              <label className="block text-[14px] font-medium text-[#4F5B67]">{label}</label>
              <input type="text" placeholder={`Enter ${label}`} className="w-full p-2 border border-[#E5E4EA] bg-[#F7F7F9] rounded-[5px] mt-1" />
            </div>
          ))}
          
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Enable User</label>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
          
        <div className="flex justify-end shadow absolute bottom-0 w-full right-0 p-5">
        <button className="w-[67px] bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Save</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerModal;
