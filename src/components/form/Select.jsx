import { useState } from 'react'

const Select = ({ options, placeholder = 'Select an option', onChange, className = '', defaultValue = '' }) => {
	const [selectedValue, setSelectedValue] = useState(defaultValue)

	const handleChange = (e) => {
		const value = e.target.value
		setSelectedValue(value)
		onChange(value)
	}

	return (
		<select
			className={`h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-[#667085]  focus:outline-hidden  focus:ring-brand-500/10  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  ${
				selectedValue ? 'text-[#212121] dark:text-white/90' : 'text-[#667085] dark:text-[#667085]'
			} ${className}`}
			value={selectedValue}
			onChange={handleChange}>
			<option value='' disabled className='text-[#494949] dark:bg-gray-900 dark:text-[#667085]'>
				{placeholder}
			</option>
			{options?.map((option) => (
				<option key={option.value} value={option.value} className='text-[#494949] dark:bg-gray-900 dark:text-[#667085]'>
					{option.label}
				</option>
			))}
		</select>
	)
}

export default Select
