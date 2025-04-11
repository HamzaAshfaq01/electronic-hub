import { SidebarProvider, useSidebar } from '../context/SidebarContext'
import { Outlet, Navigate } from 'react-router'
import AppHeader from './AppHeader'
import Backdrop from './Backdrop'
import AppSidebar from './AppSidebar'

const LayoutContent = () => {
	const { isExpanded, isHovered, isMobileOpen, user } = useSidebar()

	if (!user) {
		return <Navigate to="/signin" />
	}

	return (
		<div className='min-h-screen xl:flex'>
			<div
				className={`flex-1 transition-all duration-300 ease-in-out ${
					isExpanded || isHovered ? 'lg:ml-[311px]' : 'lg:ml-[90px]'
				} ${isMobileOpen ? 'ml-0' : ''}`}>
				<AppSidebar />
				<Backdrop />
				<div className='p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6 md:py-[50px]'>
					<AppHeader />
					<Outlet />
				</div>
			</div>
		</div>
	)
}

const AppLayout = () => {
	return (
		<SidebarProvider>
			<LayoutContent />
		</SidebarProvider>
	)
}

export default AppLayout
