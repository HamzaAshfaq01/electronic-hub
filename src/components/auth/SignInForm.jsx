import { useState } from 'react'
import Label from '../form/Label'
import Input from '../form/input/InputField'
import Checkbox from '../form/input/Checkbox'
import Button from '../ui/button/Button'
import ForgotModal from '../modal/auth/ForgotPassword'
import { signIn } from 'aws-amplify/auth'
import { toast } from 'react-toastify'

export default function SignInForm() {
	const [isChecked, setIsChecked] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [generalError, setGeneralError] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setEmailError('')
		setPasswordError('')
		setGeneralError('')
		if (!email) {
			setEmailError('Email is required')
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			setEmailError('Please enter a valid email')
		}
		if (!password) {
			setPasswordError('Password is required')
		}
		if (emailError || passwordError) return
		try {
			setLoading(true)
			const user = await signIn(email, password)
			toast.success('Loggedin Successfully')
		} catch (error) {
			toast.error('Incorrect email or password')
			console.error('Error signing in', error)
		} finally {
			setLoading(false)
		}
	}

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
						<form onSubmit={handleSubmit}>
							<div className='space-y-6'>
								<div>
									<Label>Email</Label>
									<Input
										type='email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder='Enter your email'
										error={emailError}
									/>
								</div>
								<div>
									<Label>Password</Label>
									<div className='relative'>
										<Input
											type='password'
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											placeholder='Enter your password'
											error={passwordError}
										/>
									</div>
								</div>
								<div className='flex items-center justify-between'>
									<div className='flex items-center gap-3'>
										<Checkbox checked={isChecked} onChange={setIsChecked} />
										<span className='block font-normal text-[#494949] text-theme-sm dark:text-[#667085]'>
											Remember me
										</span>
									</div>
									<div
										onClick={() => setModalOpen(true)}
										className='text-sm text-[#0BA5EC] hover:text-[#0BA5EC] dark:text-brand-400 cursor-pointer'>
										Forgot password?
									</div>
								</div>
								<div>
									<Button className='w-full !bg-[#0BA5EC]' size='sm' disabled={loading}>
										{loading ? 'Signing in...' : 'Sign in'}
									</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<ForgotModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
		</div>
	)
}
