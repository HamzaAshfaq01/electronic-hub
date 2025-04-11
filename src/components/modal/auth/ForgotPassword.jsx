import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Label from '../../form/Label';
import * as Yup from 'yup';
import { resetPassword } from 'aws-amplify/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const emailValidationSchema = Yup.object({
	email: Yup.string().email('Invalid email address').required('Email is required'),
});

const ForgotPasswordModal = ({ isOpen, resetPasswordOpen, onClose, setForgotEmail }) => {
	if (!isOpen) return null;

	const handleSendOtp = async (values) => {
		try {
			await resetPassword({ username: values.email });
			setForgotEmail(values.email);
			resetPasswordOpen();
			toast.success('OTP sent to your email');
		} catch (err) {
			toast.error(err.message || 'Failed to send OTP');
		}
	};

	return (
		<div className='fixed inset-0 right-0 backdrop-bg bg-opacity-50 flex justify-center items-center z-50'>
			<div className='bg-white p-6 rounded-lg w-full max-w-[546px] shadow-lg relative'>
				<Formik initialValues={{ email: '' }} validationSchema={emailValidationSchema} onSubmit={handleSendOtp}>
					{({ isSubmitting }) => (
						<Form>
							<div className='flex justify-between items-center mb-[15px]'>
								<h4 className='text-[20px] font-medium text-[#344054]'>Forgot Password</h4>
								<button type='button' onClick={onClose} className='text-gray-500 text-[30px]'>
									&times;
								</button>
							</div>
							<div className='space-y-4'>
								<div>
									<Label htmlFor='email'>Email</Label>
									<Field id='email' name='email' placeholder='Enter your email' className='w-full border rounded p-2' />
									<ErrorMessage name='email' component='div' className='text-red-500 text-sm' />
								</div>
								<div className='flex justify-end gap-2'>
									<button
										type='button'
										onClick={onClose}
										className='w-[67px] bg-transparent p-2 rounded-[8px] border border-gray-300 text-[#344054]'>
										Cancel
									</button>
									<button
										type='submit'
										className={`w-[99px] bg-[#0BA5EC] text-white p-2 rounded-[8px] ${isSubmitting ? 'opacity-50' : ''}`}
										disabled={isSubmitting}>
										{isSubmitting ? 'Sending...' : 'Send OTP'}
									</button>
								</div>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default ForgotPasswordModal;
