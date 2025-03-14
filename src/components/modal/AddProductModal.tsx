import { useState } from "react";
interface AddCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddProductModal = ({ isOpen, onClose }: AddCustomerModalProps) => {
  if (!isOpen) return null;
  const [inStock, setInStock] = useState(false);

  return (
    <div className="fixed inset-0 bg-[#10182885] flex justify-end items-center h-full z-50">
      <div className="bg-white p-6 w-full max-w-[600px] shadow-lg h-full relative ">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-semibold text-gray-900">Add Product</h2>
          <button onClick={onClose} className="text-gray-500 text-2xl">
            &times;
          </button>
        </div>

        {/* Product Information */}
        <div className="space-y-4 mt-4">
          <h3 className="font-semibold text-gray-800">Product Information</h3>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Product
            </label>
            <select className="w-full p-2 border bg-gray-100 rounded mt-1">
              <option>Type product Name, Model number</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Price
              </label>
              <input
                type="text"
                value="50,000"
                className="w-full p-2 border bg-gray-100 rounded mt-1"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Quantity
              </label>
              <input
                type="text"
                value="50,000"
                className="w-full p-2 border bg-gray-100 rounded mt-1"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Product Location */}
        <div className="mt-6 space-y-4">
          <h3 className="font-semibold text-gray-800">Product Location</h3>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Warehouse
            </label>
            <select className="w-full p-2 border bg-gray-100 rounded mt-1">
              <option>Warehouse 1</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Raw
              </label>
              <input
                type="text"
                value="abc@gamil.com"
                className="w-full p-2 border bg-gray-100 rounded mt-1"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Column
              </label>
              <input
                type="text"
                value="abc@gamil.com"
                className="w-full p-2 border bg-gray-100 rounded mt-1"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="mt-6 space-y-4">
          <h3 className="font-semibold text-gray-800">Transportation</h3>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Expenses
            </label>
            <input
              type="text"
              value="24500"
              className="w-full p-2 border bg-gray-100 rounded mt-1"
              readOnly
            />
          </div>

          {/* In Stock Toggle */}
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">
              In Stock
            </label>
            <div
              className={`relative w-[40px] h-6 rounded-full transition cursor-pointer 
                ${inStock ? "bg-green-400" : "bg-gray-300"}`}
              onClick={() => setInStock(!inStock)}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all 
                  ${inStock ? "translate-x-5" : ""}`}
              />
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end shadow absolute bottom-0 w-full right-0 p-5">
          <button className="px-4 py-2 border rounded text-gray-600 mr-4">
            Print
          </button>
          <button className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
