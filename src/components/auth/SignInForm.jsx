import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Label from '../form/Label';
import Checkbox from '../form/input/Checkbox';
import Button from '../ui/button/Button';
import ForgotModal from '../modal/auth/ForgotPassword';
import ResetPasswordModal from '../modal/auth/ResetPassword';
import ChangePassword from '../modal/auth/ChangePassword';
import { signIn, getCurrentUser } from 'aws-amplify/auth';
import { toast } from 'react-toastify';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Import eye icons
import { useSidebar } from '../../context/SidebarContext';
import { useNavigate } from 'react-router';

const validationSchema = Yup.object({
	email: Yup.string().email('Invalid email address').required('Email is required'),
	password: Yup.string().required('Password is required'),
});

export default function SignInForm() {
	const navigate = useNavigate();
	const { setUser } = useSidebar();
	const [isChecked, setIsChecked] = useState(false);
	const [forgortEmail, setForgotEmail] = useState('');
	const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [resetModalOpen, setResetModalOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

	const handleSubmit = async (values) => {
		setLoading(true);
		try {
			const response = await signIn({ username: values.email, password: values.password });
			console.log(response, 'response');
			if (!response.isSignedIn && response.nextStep?.signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED') {
				toast.error('Please change your password');
				setChangePasswordModalOpen(true);
				return;
			}
			const { username, userId, signInDetails } = await getCurrentUser();
			setUser({ username, userId, signInDetails });
			navigate('/');
			toast.success('Logged in successfully');
		} catch (error) {
			const errorMessage = error.message || 'Incorrect email or password';
			toast.error(errorMessage);
			console.error('Error signing in', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex flex-col flex-1'>
			<div className='flex flex-col justify-center flex-1 w-full max-w-md mx-auto'>
				<div>
					<div className='mb-5 sm:mb-8'>
						<h1 className='mb-2 font-semibold text-[#212121] text-title-sm dark:text-white/90 sm:text-title-md'>
							Log in
						</h1>
						<p className='text-sm text-gray-500 dark:text-[#667085]'>Welcome back! Please enter your details.</p>
					</div>
					<div>
						<Formik
							initialValues={{ email: '', password: '', rememberMe: isChecked }}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}>
							{() => (
								<Form>
									<div className='space-y-6'>
										<div>
											<Label>Email</Label>
											<Field
												name='email'
												type='email'
												placeholder='Enter your email'
												className='h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-[#667085] focus:outline-hidden  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30'
											/>
											<ErrorMessage name='email' component='div' className='text-red-500 text-sm' />
										</div>
										<div>
											<Label>Password</Label>
											<div className='relative'>
												<Field
													name='password'
													type={showPassword ? 'text' : 'password'}
													placeholder='Enter your password'
													className='h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-[#667085] focus:outline-hidden  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30'
												/>
												<button
													type='button'
													onClick={() => setShowPassword(!showPassword)}
													className='absolute inset-y-0 right-3 flex items-center text-gray-500'>
													{showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
												</button>
											</div>
											<ErrorMessage name='password' component='div' className='text-red-500 text-sm' />
										</div>
										<div className='flex items-center justify-end'>
											<div
												onClick={() => setModalOpen(true)}
												className='text-sm text-[#0BA5EC] hover:text-[#0BA5EC] dark:text-brand-400 cursor-pointer'>
												Forgot password?
											</div>
										</div>
										<div>
											<Button type='submit' className='w-full !bg-[#0BA5EC]' size='sm' disabled={loading}>
												{loading ? 'Loading...' : 'Sign in'}
											</Button>
										</div>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
			{modalOpen && (
				<ForgotModal
					isOpen={modalOpen}
					resetPasswordOpen={() => {
						setResetModalOpen(true);
						setModalOpen(false);
					}}
					setForgotEmail={setForgotEmail}
					onClose={() => setModalOpen(false)}
				/>
			)}
			{resetModalOpen && (
				<ResetPasswordModal
					forgortEmail={forgortEmail}
					isOpen={resetModalOpen}
					onClose={() => setResetModalOpen(false)}
				/>
			)}
			{changePasswordModalOpen && (
				<ChangePassword isOpen={changePasswordModalOpen} onClose={() => setChangePasswordModalOpen(false)} />
			)}
		</div>
	);
}
