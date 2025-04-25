// components/PrintInvoice.js
import React, { useRef, useEffect } from 'react';

const PrintInvoice = ({ quotation, onClose }) => {
	const printRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			window.print();
			onClose();
		}, 500);
	}, [onClose]);

	if (!quotation) return null;

	return (
		<div ref={printRef} className='print-container p-10 text-black'>
			<h1 className='text-2xl font-bold mb-4'>Invoice</h1>

			<div className='mb-4'>
				<p>
					<strong>Invoice ID:</strong> {quotation.id}
				</p>
				<p>
					<strong>Customer:</strong> {quotation.customer?.name}
				</p>
				<p>
					<strong>Date:</strong> {quotation.createdAt}
				</p>
			</div>

			<table className='w-full border border-gray-300 mb-4'>
				<thead>
					<tr className='bg-gray-100'>
						<th className='border px-4 py-2 text-left'>Product</th>
						<th className='border px-4 py-2 text-right'>Quantity</th>
						<th className='border px-4 py-2 text-right'>Unit Price</th>
						<th className='border px-4 py-2 text-right'>Total</th>
					</tr>
				</thead>
				<tbody>
					{quotation.items?.items?.map((item) => (
						<tr key={item.id}>
							<td className='border px-4 py-2'>{item.product?.name}</td>
							<td className='border px-4 py-2 text-right'>{item.quantity}</td>
							<td className='border px-4 py-2 text-right'>{item.pricePerUnit}</td>
							<td className='border px-4 py-2 text-right'>{item.totalPrice}</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr className='font-bold'>
						<td className='border px-4 py-2 text-right' colSpan={3}>
							Total Amount
						</td>
						<td className='border px-4 py-2 text-right'>{quotation.totalAmount}</td>
					</tr>
				</tfoot>
			</table>

			<p className='text-sm text-gray-500'>Thank you for your business!</p>
		</div>
	);
};

export default PrintInvoice;
