import GridShape from '../../components/common/GridShape'
import { Link } from 'react-router'
import PageMeta from '../../components/common/PageMeta'

export default function NotFound() {
	return (
		<>
			<PageMeta title='Electronic Hub' description='' />
			<div className='relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1'>
				<GridShape />
				<div className='mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]'>
					<h1 className='mb-8 font-bold text-[#212121] text-title-md dark:text-white/90 xl:text-title-2xl'>ERROR</h1>

					<img src='/images/error/404.svg' alt='404' className='dark:hidden' />
					<img src='/images/error/404-dark.svg' alt='404' className='hidden dark:block' />

					<p className='mt-10 mb-6 text-base text-[#494949] dark:text-[#667085] sm:text-lg'>
						We can’t seem to find the page you are looking for!
					</p>

					<Link
						to='/'
						className='inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-[#494949] shadow-theme-xs hover:bg-gray-50 hover:text-[#212121]  dark:bg-gray-800 dark:text-[#667085] dark:hover:bg-white/[0.03] dark:hover:text-gray-200'>
						Back to Home Page
					</Link>
				</div>
				{/* <!-- Footer --> */}
				<p className='absolute text-sm text-center text-[#494949] -translate-x-1/2 bottom-6 left-1/2 dark:text-[#667085]'>
					&copy; {new Date().getFullYear()} - TailAdmin
				</p>
			</div>
		</>
	)
}
