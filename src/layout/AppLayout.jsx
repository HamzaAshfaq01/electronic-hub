import { useState, useEffect } from 'react';
import { SidebarProvider, useSidebar } from '../context/SidebarContext';
import { Outlet, Navigate } from 'react-router';
import AppHeader from './AppHeader';
import Backdrop from './Backdrop';
import AppSidebar from './AppSidebar';

const LayoutContent = () => {
	const { isExpanded, isHovered, isMobileOpen, user } = useSidebar();
	const [isLoading, setIsLoading] = useState(true);

	// Simulate a 5-second loading effect
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer); // Cleanup the timer
	}, []);

	if (isLoading) {
		return (
			<div className='w-full h-dvh flex items-center justify-center bg-white'>
				<div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500'></div>
			</div>
		);
	}

	if (user === undefined) {
		return <div className='w-full h-dvh bg-white'>Loading...</div>;
	}

	if (!user) {
		return <Navigate to='/signin' />;
	}

	return (
		<div className='min-h-screen xl:flex'>
			<div
				className={`flex-1 transition-all duration-300 ease-in-out ${
					isExpanded || isHovered ? 'lg:ml-[311px]' : 'lg:ml-[90px]'
				} ${isMobileOpen ? 'ml-0' : ''}`}>
				<AppSidebar />
				<Backdrop />
				<div className='p-4 mx-auto max-w-(--breakpoint-xl) md:p-6 md:py-[50px]'>
					<AppHeader />
					<Outlet />
				</div>
			</div>
		</div>
	);
};

const AppLayout = () => {
	return <LayoutContent />;
};

export default AppLayout;
