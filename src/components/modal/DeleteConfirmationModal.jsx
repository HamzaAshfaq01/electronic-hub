'use client';
import { Trash2, X } from 'lucide-react';

export default function ConfirmDeleteModal({ itemName = 'this item', onConfirm, onClose, isOpen, isDeleting }) {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
			<div className='bg-white rounded-lg shadow-lg w-full max-w-md mx-4 overflow-hidden'>
				<div className='flex justify-between items-center p-4 border-b'>
					<h3 className='text-lg font-medium text-gray-800'>Confirm Delete</h3>
					<button onClick={onClose} className='text-gray-500 hover:text-gray-700 transition-colors'>
						<X className='h-5 w-5' />
					</button>
				</div>

				<div className='p-6'>
					<div className='flex items-center gap-3 mb-4'>
						<div className='bg-red-100 p-2 rounded-full'>
							<Trash2 className='h-6 w-6 text-red-500' />
						</div>
						<p className='text-gray-600'>Are you sure you want to delete {itemName}? This action cannot be undone.</p>
					</div>
				</div>

				<div className='bg-gray-50 px-6 py-4 flex justify-end gap-3'>
					<button
						onClick={onClose}
						className='px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors'>
						Cancel
					</button>
					<button
						onClick={onConfirm}
						disabled={isDeleting}
						className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors'>
						{isDeleting ? 'Deleting...' : 'Delete'}
					</button>
				</div>
			</div>
		</div>
	);
}
