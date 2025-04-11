import Label from '../../form/Label';
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../ui/button/Button';
import { confirmSignIn } from 'aws-amplify/auth';
import { toast } from 'react-toastify';

const validationSchema = Yup.object({
	password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
	confirm_password: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Confirm Password is required'),
});

const ChangePasswordModal = ({ isOpen, onClose, username }) => {
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (values) => {
		setLoading(true);
		try {
			await confirmSignIn({
				challengeResponse: values.password,
			});
			toast.success('Password changed successfully');
			onClose();
		} catch (error) {
			toast.error(error.message || 'Failed to change password');
			console.error('Error changing password:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='fixed inset-0 right-0 backdrop-bg bg-opacity-50 flex justify-center items-center z-50'>
			<div className='bg-white p-6 rounded-lg w-full max-w-[546px] shadow-lg relative'>
				<div className='flex justify-between items-center mb-[24px]'>
					<h4 className='text-[20px] font-medium text-[#344054]'>Change Password</h4>
					<button type='button' onClick={onClose} className='text-gray-500 text-[30px]'>
						&times;
					</button>
				</div>
				<div className='space-y-4'>
					<Formik
						initialValues={{ password: '', confirm_password: '' }}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}>
						{() => (
							<Form>
								<div className='space-y-6'>
									<div>
										<Label>New Password</Label>
										<Field
											name='password'
											type='password'
											placeholder='Enter your new password'
											className='h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-[#667085] focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30'
										/>
										<ErrorMessage name='password' component='div' className='text-red-500 text-sm' />
									</div>
									<div>
										<Label>Confirm New Password</Label>
										<div className='relative'>
											<Field
												name='confirm_password'
												type='password'
												placeholder='Confirm your new password'
												className='h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-[#667085] focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30'
											/>
											<ErrorMessage name='confirm_password' component='div' className='text-red-500 text-sm' />
										</div>
									</div>
									<div>
										<Button type='submit' className='w-full !bg-[#0BA5EC]' size='sm' disabled={loading}>
											{loading ? 'Changing Password...' : 'Change Password'}
										</Button>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default ChangePasswordModal;
