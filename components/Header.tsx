'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu, X, ChevronDown, Phone, Home, DollarSign,
  TrendingUp, Shield, MessageCircle, User
} from "lucide-react"

interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
  dropdown?: { title: string; items: { name: string; href: string }[] }[]
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks: NavItem[] = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },

    {
      name: "Buy",
      href: "/buy",
      icon: <Home className="w-4 h-4" />,
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

    {
      name: "Solutions",
      href: "/solutions",
      icon: <Shield className="w-4 h-4" />,
      dropdown: [
        {
          title: "Special Solutions",
          items: [
            { name: "Inherited Property", href: "/solutions/inherited" },
            { name: "Tax Issues", href: "/solutions/tax-lien" },
          ],
        },
      ],
    },

    { name: "About", href: "/about", icon: <User className="w-4 h-4" /> },
    { name: "Contact", href: "/contact", icon: <MessageCircle className="w-4 h-4" /> },
  ]

  return (
    <>
      {/* Clean White Premium Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">

          {/* LOGO – A2Z MINIMAL LUXURY */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center shadow-md">
                <span className="text-white text-2xl font-bold">A</span>
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-gray-900 tracking-wide">A2Z Group</span>
                <span className="text-xs text-gray-500 tracking-wider">REAL ESTATE</span>
              </div>
            </motion.div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {link.icon}
                  {link.name}

                  {link.dropdown && (
                    <ChevronDown className="w-3 h-3 opacity-60 group-hover:opacity-100 transition" />
                  )}
                </Link>

                {/* SMOOTH BORDER ANIMATION */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-full" />

                {/* DROPDOWN */}
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-200 mt-3 p-4 z-50"
                  >
                    {link.dropdown.map((section, idx) => (
                      <div key={idx} className="mb-3 last:mb-0">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">{section.title}</h4>

                        <div className="space-y-1">
                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-3 py-2 rounded-md text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            {/* FREE CONSULT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Free Consultation
            </motion.button>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="lg:hidden fixed inset-0 bg-white text-gray-900 p-6 z-50 overflow-y-auto"
          >
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-lg border-b border-gray-200"
                >
                  {link.name}
                </Link>
              ))}

              {/* MOBILE FREE CONSULTATION BUTTON */}
              <button className="w-full mt-4 py-3 rounded-xl text-white text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700">
                Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
