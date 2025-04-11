import { createContext, useContext, useState, useEffect } from 'react'
import { getCurrentUser } from 'aws-amplify/auth';
const SidebarContext = createContext(undefined)

export const useSidebar = () => {
	const context = useContext(SidebarContext)
	if (!context) {
		throw new Error('useSidebar must be used within a SidebarProvider')
	}
	return context
}

export const SidebarProvider = ({ children }) => {
	const [isExpanded, setIsExpanded] = useState(true)
	const [isMobileOpen, setIsMobileOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const [isHovered, setIsHovered] = useState(false)
	const [activeItem, setActiveItem] = useState(null)
	const [openSubmenu, setOpenSubmenu] = useState(null)
	const [user, setUser] = useState(null)

	useEffect(() => {
		const handleResize = () => {
			const mobile = window.innerWidth < 768
			setIsMobile(mobile)
			if (!mobile) {
				setIsMobileOpen(false)
			}
		}
		currentAuthenticatedUser()
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	async function currentAuthenticatedUser() {
		try {
			const { username, userId, signInDetails } = await getCurrentUser();
			setUser({ username, userId, signInDetails });
		} catch (err) {
			setUser(null);
		}
	}

	const toggleSidebar = () => {
		setIsExpanded((prev) => !prev)
	}

	const toggleMobileSidebar = () => {
		setIsMobileOpen((prev) => !prev)
	}

	const toggleSubmenu = (item) => {
		setOpenSubmenu((prev) => (prev === item ? null : item))
	}

	return (
		<SidebarContext.Provider
			value={{
				isExpanded: isMobile ? false : isExpanded,
				isMobileOpen,
				isHovered,
				activeItem,
				openSubmenu,
				toggleSidebar,
				toggleMobileSidebar,
				setIsHovered,
				setActiveItem,
				toggleSubmenu,
				user,
			}}>
			{children}
		</SidebarContext.Provider>
	)
}
