import { twMerge } from 'tailwind-merge'

const Label = ({ htmlFor, children, className }) => {
	return (
		<label htmlFor={htmlFor} className={twMerge('mb-1.5 block text-sm font-medium text-[#212121]', className)}>
			{children}
		</label>
	)
}

export default Label
