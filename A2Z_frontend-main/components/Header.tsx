'use client'

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu, X, ChevronDown, Phone, Home, DollarSign,
  TrendingUp, Shield, MessageCircle, User, Search
} from "lucide-react"

interface DropdownItem {
  name: string
  href: string
}

interface DropdownSection {
  title: string
  items: DropdownItem[]
}

interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
  dropdown?: DropdownSection[]
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navLinks: NavItem[] = [
    {
      name: "Buy",
      href: "/buy",
      icon: <Search className="w-4 h-4" />,
      dropdown: [
        {
          title: "Buying Services",
          items: [
            { name: "Search All Homes", href: "/buy/search" },
            { name: "First-Time Buyers", href: "/buy/first-time" },
            { name: "Luxury Homes", href: "/buy/luxury" },
            { name: "Investment Homes", href: "/buy/investment" },
          ],
        },
      ],
    },
    {
      name: "Sell",
      href: "/sell",
      icon: <DollarSign className="w-4 h-4" />,
      dropdown: [
        {
          title: "Selling Services",
          items: [
            { name: "Free Home Valuation", href: "/sell/valuation" },
            { name: "Selling Strategies", href: "/sell/strategies" },
            { name: "Staging & Marketing", href: "/sell/staging" },
          ],
        },
      ],
    },
    {
      name: "Solutions",
      href: "/solutions",
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        {
          title: "Private Sale Solutions",
          items: [
            { name: "Sell On-Market", href: "/sell/on-market" },
            { name: "Sell Off-Market", href: "/sell/off-market" },
            { name: "Sell Cash-as-is", href: "/sell/cash-as-is" },
          ],
        },
      ],
    },
    {
      name: "Invest",
      href: "/invest",
      icon: <TrendingUp className="w-4 h-4" />,
      dropdown: [
        {
          title: "Investment Tools",
          items: [
            { name: "Rental Properties", href: "/invest/rental" },
            { name: "Fix & Flip", href: "/invest/fix-flip" },
            { name: "Commercial Real Estate", href: "/invest/commercial" },
          ],
        },
      ],
    },
    { name: "About", href: "/about", icon: <User className="w-4 h-4" /> },
    { name: "Contact", href: "/contact", icon: <MessageCircle className="w-4 h-4" /> },
  ]

  // Handle mouse enter with delay
  const handleMouseEnter = (name: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setActiveDropdown(name)
  }

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms delay before closing
    setDropdownTimeout(timeout)
  }

  // Handle dropdown mouse enter (prevent close when hovering dropdown)
  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
  }

  // Handle dropdown mouse leave
  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
    setDropdownTimeout(timeout)
  }

  // Handle link click
  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
  }

  return (
    <>
      {/* Clean Attractive Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-white/95 backdrop-blur-sm"
        } border-b border-gray-100`}
      >
        <div className="container mx-auto px-4 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="
                w-12 h-12 rounded-xl 
                bg-gradient-to-br from-gray-900 to-gray-800
                flex items-center justify-center 
                group-hover:scale-105
                transition-all duration-300
                shadow-md
              ">
                <span className="text-white text-xl font-bold">A</span>
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-gray-900">A2Z Group</span>
                <span className="text-xs text-gray-500">REAL ESTATE</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav 
              className="hidden lg:flex items-center gap-1"
              ref={dropdownRef}
            >
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`
                      px-5 py-2.5 rounded-lg
                      flex items-center gap-2
                      text-sm font-medium
                      transition-all duration-200
                      relative
                      ${pathname === link.href
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      }
                    `}
                  >
                    {link.icon}
                    {link.name}
                    
                    {link.dropdown && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`} />
                    )}
                  </Link>

                  {/* Smooth Dropdown */}
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="
                        absolute top-full left-0 w-72
                        bg-white rounded-xl shadow-lg
                        border border-gray-200
                        mt-2 z-50
                        overflow-hidden
                      "
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      {/* Dropdown Header */}
                      <div className="px-5 py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {link.dropdown[0].title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          Professional real estate solutions
                        </p>
                      </div>

                      {/* Dropdown Items */}
                      <div className="p-2">
                        {link.dropdown[0].items.map((item, idx) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="
                              flex items-center gap-3
                              px-4 py-3 rounded-lg
                              text-sm text-gray-700
                              hover:bg-gray-50
                              hover:text-gray-900
                              transition-all duration-150
                              group/item
                            "
                          >
                            <div className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center group-hover/item:bg-blue-100 transition-colors">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/item:scale-125 transition-transform" />
                            </div>
                            <span className="group-hover/item:text-blue-600 transition-colors">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>

                      {/* Dropdown Footer */}
                      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
                        <Link
                          href={link.href}
                          onClick={handleLinkClick}
                          className="
                            text-sm text-blue-600 font-medium
                            hover:text-blue-700
                            flex items-center gap-1
                            transition-colors duration-200
                            group/footer
                          "
                        >
                          View all services
                          <ChevronDown className="w-3 h-3 rotate-[-90deg] group-hover/footer:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <div className="ml-3">
                <Link
                  href="/home-value"
                  onClick={handleLinkClick}
                  className="
                    px-6 py-2.5 rounded-lg
                    bg-gradient-to-r from-blue-600 to-blue-700
                    text-white text-sm font-semibold
                    hover:from-blue-700 hover:to-blue-800
                    transition-all duration-200
                    shadow-md hover:shadow-lg
                    flex items-center gap-2
                    group/cta
                  "
                >
                  <Home className="w-4 h-4 group-hover/cta:scale-110 transition-transform" />
                  Get Home Value
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="
                lg:hidden
                w-12 h-12 rounded-lg
                flex items-center justify-center
                bg-gray-50 hover:bg-gray-100
                transition-colors duration-200
                group
              "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={24} className="group-hover:scale-110 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="
              lg:hidden fixed inset-x-0 top-16
              bg-white border-b border-gray-100
              shadow-lg z-40
            "
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-1">
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="
                      flex items-center justify-between
                      py-3 px-4 rounded-lg
                      text-gray-700 font-medium
                      hover:bg-gray-50
                      transition-colors duration-150
                      group/mobile
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-gray-500 group-hover/mobile:text-blue-600 transition-colors">
                        {link.icon}
                      </div>
                      <span className="group-hover/mobile:text-gray-900 transition-colors">
                        {link.name}
                      </span>
                    </div>
                    {link.dropdown && (
                      <ChevronDown className="w-4 h-4 text-gray-400 group-hover/mobile:text-gray-600 transition-colors" />
                    )}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {link.dropdown && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-4 pl-6 border-l-2 border-gray-200 overflow-hidden"
                    >
                      <div className="px-4 py-2">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">
                          {link.dropdown[0].title}
                        </h4>
                        {link.dropdown[0].items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="
                              block py-2.5 px-3 rounded
                              text-sm text-gray-600
                              hover:bg-gray-50 hover:text-gray-900
                              transition-colors duration-150
                              group/item-mobile
                            "
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/item-mobile:scale-125 transition-transform" />
                              {item.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <Link
                  href="/home-value"
                  onClick={handleLinkClick}
                  className="
                    block w-full py-3 px-4 rounded-lg
                    bg-gradient-to-r from-blue-600 to-blue-700
                    text-white font-semibold text-center
                    hover:from-blue-700 hover:to-blue-800
                    transition-all duration-200
                    shadow-md
                    mb-4
                    group/mobile-cta
                  "
                >
                  <div className="flex items-center justify-center gap-2">
                    <Home className="w-4 h-4 group-hover/mobile-cta:scale-110 transition-transform" />
                    Get Home Value
                  </div>
                </Link>
                
                {/* Contact Info */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 text-gray-600 mb-3">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">Need help?</span>
                  </div>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-900 font-semibold hover:text-blue-600 transition-colors block"
                    onClick={handleLinkClick}
                  >
                    (123) 456-7890
                  </a>
                  <p className="text-xs text-gray-500 mt-2">Available 9AM-6PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header