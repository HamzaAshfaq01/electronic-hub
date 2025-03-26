import React, { useState } from 'react'
import { EyeCloseIcon, EyeIcon } from '../../../icons'

const Input = ({
	type = 'text',
	id,
	name,
	placeholder,
	value,
	onChange,
	className = '',
	min,
	max,
	step,
	disabled = false,
	success = false,
	error = false,
	hint,
}) => {
	const [showPassword, setShowPassword] = useState(false)
	let inputClasses = ` h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-[#667085] focus:outline-hidden  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${className}`

	if (disabled) {
		inputClasses += ` text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-[#667085]  opacity-40`
	} else if (error) {
		inputClasses += `  border-error-500 focus:border-error-300 focus:ring-error-500/20 dark:text-error-400 dark:border-error-500 dark:focus:border-error-800`
	} else if (success) {
		inputClasses += `  border-success-500 focus:border-success-300 focus:ring-success-500/20 dark:text-success-400 dark:border-success-500 dark:focus:border-success-800`
	} else {
		inputClasses += ` bg-transparent text-[#212121] border-gray-300  dark:text-white/90  `
	}

	return (
		<React.Fragment>
			<div className='relative'>
				<input
					type={setShowPassword ? 'text' : type}
					id={id}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					min={min}
					max={max}
					step={step}
					disabled={disabled}
					className={inputClasses}
				/>
				{type == 'password' && (
					<span
						onClick={() => setShowPassword(!showPassword)}
						className='absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2'>
						{showPassword ? (
							<EyeIcon className='fill-gray-500 dark:fill-gray-400 size-5' />
						) : (
							<EyeCloseIcon className='fill-gray-500 dark:fill-gray-400 size-5' />
						)}
					</span>
				)}
			</div>

			{error && (
				<p className={`mt-1.5 text-xs ${error ? 'text-error-500' : success ? 'text-success-500' : 'text-gray-500'}`}>
					{error}
				</p>
			)}
		</React.Fragment>
	)
}

export default Input
