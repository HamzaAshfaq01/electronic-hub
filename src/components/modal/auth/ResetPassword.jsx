import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Label from '../../form/Label';
import * as Yup from 'yup';
import OtpInput from 'react-otp-input';
import { resetPassword, confirmResetPassword } from 'aws-amplify/auth';
import { toast } from 'react-toastify';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';

const passwordValidationSchema = Yup.object({
	email: Yup.string().email('Invalid email address').required('Email is required'),
	newPassword: Yup.string().min(8, 'Password must be at least 8 characters').required('New password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
		.required('Confirm password is required'),
	otp: Yup.string().min(6, 'OTP must be 6 digits').required('OTP is required'),
});

const ResetPasswordModal = ({ isOpen, onClose, forgortEmail }) => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	if (!isOpen) return null;

	const handleResendOtp = async (email) => {
		try {
			await resetPassword({ username: email });
			toast.success('OTP sent to your email');
		} catch (err) {
			toast.error(err.message || 'Failed to send OTP');
		}
	};

	const handleVerifyOtp = async (values) => {
		try {
			await confirmResetPassword({
				username: values.email,
				confirmationCode: values.otp,
				newPassword: values.newPassword,
			});
			toast.success('Password reset successful');
			onClose();
		} catch (err) {
			toast.error(err.message || 'Failed to verify OTP or reset password');
		}
	};

	return (
		<div className='fixed inset-0 right-0 backdrop-bg bg-opacity-50 flex justify-center items-center z-50'>
			<div className='bg-white p-6 rounded-lg w-full max-w-[546px] shadow-lg relative'>
				<Formik
					initialValues={{ email: forgortEmail || '', otp: '', newPassword: '', confirmPassword: '' }}
					enableReinitialize
					validationSchema={passwordValidationSchema}
					onSubmit={handleVerifyOtp}>
					{({ isSubmitting, values, setFieldValue, errors }) => {
						console.log(errors);
						return (
							<Form>
								<div className='flex justify-between items-center mb-[15px]'>
									<h4 className='text-[20px] font-medium text-[#344054]'>Reset Password</h4>
									<button type='button' onClick={onClose} className='text-gray-500 text-[30px]'>
										&times;
									</button>
								</div>
								<div className='flex flex-col gap-[24px]'>
									<div>
										<div>
											<Label>Email</Label>
											<Field
												name='email'
												type='email'
												placeholder='Enter your email'
												className='h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-[#667085] focus:outline-hidden  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30'
											/>
											<button
												type='button'
												onClick={() => handleResendOtp(values.email)}
												className='flex justify-self-end mt-[10px] text-end font-normal underline text-[#0BA5EC] text-theme-sm cursor-pointer'>
												Resend OTP
											</button>
										</div>
										<ErrorMessage name='email' component='div' className='text-red-500 text-sm' />
									</div>
									<div>
										<Label>OTP</Label>
										<div className='flex gap-[30px]'>
											<OtpInput
												value={values.otp}
												onChange={(value) => setFieldValue('otp', value)}
												numInputs={6}
												renderSeparator={<span>-</span>}
												inputStyle={{
													width: '100%',
													maxWidth: '58px',
													height: '57px',
													textAlign: 'center',
													border: '1px solid #e4e7ec',
													borderRadius: '8px',
												}}
												renderInput={(props) => <input {...props} />}
											/>
										</div>
										<ErrorMessage name='otp' component='div' className='text-red-500 text-sm' />
									</div>
									<div className='space-y-4'>
										<div className='relative'>
											<Label htmlFor='newPassword'>New Password</Label>
											<div className='relative'>
												<Field
													id='newPassword'
													name='newPassword'
													type={showPassword ? 'text' : 'password'}
													placeholder='Enter new password'
													className='h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-[#667085] focus:outline-hidden  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30'
												/>
												<button
													type='button'
													onClick={() => setShowPassword(!showPassword)}
													className='absolute inset-y-0 right-3 flex items-center text-gray-500'>
													{showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
												</button>
											</div>
											<ErrorMessage name='newPassword' component='div' className='text-red-500 text-sm' />
										</div>
										<div className='relative'>
											<Label htmlFor='confirmPassword'>Retype Password</Label>
											<div className='relative'>
												<Field
													id='confirmPassword'
													name='confirmPassword'
													type={showConfirmPassword ? 'text' : 'password'}
													placeholder='Retype new password'
													className='h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-[#667085] focus:outline-hidden  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30'
												/>
												<button
													type='button'
													onClick={() => setShowConfirmPassword(!showConfirmPassword)}
													className='absolute inset-y-0 right-3 flex items-center text-gray-500'>
													{showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
												</button>
											</div>
											<ErrorMessage name='confirmPassword' component='div' className='text-red-500 text-sm' />
										</div>
									</div>
									<div className='flex justify-end mt-4 border-t border-[#EAECF0] py-[16px]'>
										<div className='flex gap-2'>
											<button
												type='button'
												onClick={onClose}
												className='w-[67px] bg-transparent p-2 rounded-[8px] border border-gray-300 text-[#344054]'>
												Cancel
											</button>
											<button
												type='submit'
												className={`w-[99px] bg-[#0BA5EC] text-white p-2 rounded-[8px] ${
													isSubmitting ? 'opacity-50' : ''
												}`}
												disabled={isSubmitting}>
												{isSubmitting ? 'Submitting...' : 'Submit'}
											</button>
										</div>
									</div>
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
		</div>
	);
};

export default ResetPasswordModal;
