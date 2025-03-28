import React from 'react'
import GridShape from '../../components/common/GridShape'

export default function AuthLayout({ children }) {
	return (
		<div className='relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0'>
			<div className='relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0'>
				{children}
				<div className='items-center hidden w-full h-full lg:w-1/2 bg-[#b9e6fe] dark:bg-white/5 lg:grid'>
					<div className='relative flex items-center justify-center z-1 h-full'>
						{/* <!-- ===== Common Grid Shape Start ===== --> */}
						<GridShape />
					</div>
				</div>
			</div>
		</div>
	)
}
