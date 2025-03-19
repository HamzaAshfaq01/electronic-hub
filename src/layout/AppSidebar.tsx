"use client"

import type React from "react"

import { useCallback, useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router"
import {
  BarChart3,
  Calendar,
  ChevronDown,
  CircleUser,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  LifeBuoy,
  Package,
  Search,
  Settings,
  ShoppingCart,
  Users,
  CirclePercent,
  ChartPie,
  UsersRound,
  Landmark,
  SquareUser
} from "lucide-react"
import { useSidebar } from "../context/SidebarContext"

type NavItem = {
  name: string
  icon: React.ReactNode
  path?: string
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[]
  isActive?: boolean
  hasIndicator?: boolean
}

const navItems: NavItem[] = [
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    name: "Dashboard",
    path: "/",

  },
  {
    name: "Sales",
    icon: <CirclePercent className="w-5 h-5" />,

    subItems: [
      { name: "Overview", path: "/overview", pro: false },
      { name: "Manage Invoices", path: "/manage-invoices", pro: false },
      { name: "Refunds", path: "/refunds", pro: false },
      { name: "Sales Summary", path: "/sales-summary", pro: false },
      { name: "Product Sale Quotation", path: "/product-sale-quotation", pro: false },
    ],
  },
  {
    name: "Purchases",
    icon: <ShoppingCart className="w-5 h-5" />,
    subItems: [
      { name: "Purchase Orders", path: "/purchase-orders", pro: false },
      { name: "Manage Suppliers", path: "/manage-suppliers", pro: false },
    ],
  },
  {
    name: "Warehouse",
    icon: <ChartPie className="w-5 h-5" />,
    subItems: [
      { name: "All Ware house", path: "/all-warehouse", pro: false },
      { name: "Ware house 1", path: "/warehouse", pro: false },
    ],
  },
  {
    icon: <UsersRound className="w-5 h-5" />,
    name: "Clients",
    subItems: [
      { name: "All Client", path: "/all-client", pro: false },
    ],
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    name: "Installments",
    subItems: [
      { name: "All Installments", path: "/all-installments", pro: false },
      // { name: "Installment Schedule", path: "/installment-schedule", pro: false },
    ],
  },
  
  {
    icon: <Landmark className="w-5 h-5" />,
    name: "Accounting",
    subItems: [
      { name: "Expenses", path: "/expenses", pro: false },
      { name: "Income", path: "/income", pro: false },
      { name: "Reports", path: "/reports", pro: false },
    ],
  },
  {
    icon: <SquareUser className="w-5 h-5" />,
    name: "Employee",
    subItems: [
      { name: "Employee List", path: "/employee-list", pro: false },
      { name: "Add Employee", path: "/add-employee", pro: false },
    ],
  },
]

const othersItems: NavItem[] = [
  
  {
    icon: <Settings className="w-5 h-5" />,
    name: "Settings",
    path: "/profile",
    isActive: false,
  },
]

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar()
  const location = useLocation()

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others"
    index: number
  } | null>(null)
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({})
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname])

  useEffect(() => {
    let submenuMatched = false
    ;["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index,
              })
              submenuMatched = true
            }
          })
        }
      })
    })

    if (!submenuMatched) {
      setOpenSubmenu(null)
    }
  }, [location, isActive])

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }))
      }
    }
  }, [openSubmenu])

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (prevOpenSubmenu && prevOpenSubmenu.type === menuType && prevOpenSubmenu.index === index) {
        return null
      }
      return { type: menuType, index }
    })
  }

  const renderMenuItems = (items: NavItem[], menuType: "main" | "others") => (
    <div className="space-y-1 ">
      {items.map((nav, index) => (
        <div key={nav.name}>
          {nav.subItems ? (
            <div
              className={`flex items-center flex-row px-3 py-2 rounded-[6px] ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "text-gray-900 bg-gray-100 dark:text-white dark:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-[#667085] dark:hover:text-white dark:hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center w-full">
                <button onClick={() => handleSubmenuToggle(index, menuType)} className="flex items-center w-full">
                  {(nav.hasIndicator || (openSubmenu?.type === menuType && openSubmenu?.index === index)) && (
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  )}
                  <span className="mr-3 text-gray-500">{nav.icon}</span>
                  <span className="font-medium">{nav.name}</span>
                </button>
                <div
                  className={`p-2 ml-auto text-sm rounded-r-[6px] group transition-colors  ${
                    openSubmenu?.type === menuType && openSubmenu?.index === index
                      ? "text-gray-900 bg-gray-100 dark:text-white dark:bg-gray-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-[#667085] dark:hover:text-white dark:hover:bg-gray-800"
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openSubmenu?.type === menuType && openSubmenu?.index === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            </div>
          ) : (
            nav.path && (
              <Link
                to={nav.path}
                className={`flex items-center px-3 py-2 text-sm rounded-md group transition-colors ${
                  nav.isActive || isActive(nav.path)
                    ? "text-gray-900 bg-gray-100 dark:text-white dark:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-[#667085] dark:hover:text-white dark:hover:bg-gray-800"
                }`}
              >
                {(nav.hasIndicator || nav.isActive || isActive(nav.path)) && (
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                )}
                <span className={`mr-3 ${nav.isActive ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
                  {nav.icon}
                </span>
                <span className="font-medium">{nav.name}</span>
              </Link>
            )
          )}
          {nav.subItems && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <div className="pl-5 mt-1 space-y-1">
                {nav.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.path}
                    className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(subItem.path)
                        ? "text-gray-900 bg-gray-100 dark:text-white dark:bg-gray-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-[#667085] dark:hover:text-white dark:hover:bg-gray-800"
                    }`}
                  >
                    <span className="font-medium">{subItem.name}</span>
                    <span className="flex items-center gap-1 ml-auto">
                      {subItem.new && (
                        <span className="px-1.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-600 rounded-[8px] dark:bg-blue-900 dark:text-blue-300">
                          new
                        </span>
                      )}
                      {subItem.pro && (
                        <span className="px-1.5 py-0.5 text-xs font-medium bg-amber-100 text-amber-600 rounded-[8px] dark:bg-amber-900 dark:text-amber-300">
                          pro
                        </span>
                      )}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-800 transition-all duration-300 ease-in-out ${
        isExpanded || isMobileOpen ? "w-[312px]" : isHovered ? "w-78" : "w-78"
      }
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        <div className="px-4 py-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src="/images/logo/logo.svg" alt="Electronic Hub Logo" className="h-8" />
            </div>
          </div>
        </div>

        <div className="px-4 mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-[#667085]" />
            </div>
            <input
              ref={inputRef}
              type="text"
              className="w-full py-2 pl-10 pr-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex-1 px-3 overflow-y-auto flex flex-col justify-between">
          {renderMenuItems(navItems, "main")}

          {renderMenuItems(othersItems, "others")}
        </div>
        <div className="mt-2 border-t border-gray-200 "></div>
        <div className="p-4 mt-auto ">
          <Link to="/signin" className="flex items-center">
            <img src="/images/user/user-03.jpg" alt="Olivia Rhye" className="w-10 h-10 rounded-full" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Olivia Rhye</p>
              <p className="text-xs text-gray-500 dark:text-[#667085]">olivia@untitledui.com</p>
            </div>
            <button className="p-1 ml-auto text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 17.5L15 10L7.5 2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default AppSidebar

