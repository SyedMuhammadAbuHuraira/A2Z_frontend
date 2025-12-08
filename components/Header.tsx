'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu, X, ChevronDown, Phone, Home, DollarSign,
  TrendingUp, Shield, MessageCircle, User
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
  onClick?: () => void
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()

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
    { 
      name: "Contact", 
      href: "/contact", 
      icon: <MessageCircle className="w-4 h-4" />,
      onClick: () => {
        console.log("Contact link clicked!")
        console.log("Navigating to /contact")
        router.push("/contact")
      }
    },
  ]

  // Function to handle link clicks
  const handleLinkClick = (href: string, name: string) => {
    console.log(`${name} link clicked - Navigating to: ${href}`)
    console.log(`Current path: ${pathname}`)
    
    if (href === "/contact") {
      console.log("Contact page navigation triggered")
      // Test if page exists
      fetch(href)
        .then(response => {
          console.log(`Contact page status: ${response.status}`)
          if (response.status === 404) {
            console.error("Contact page not found! Check app/contact/page.jsx")
          }
        })
        .catch(error => {
          console.error("Error checking contact page:", error)
        })
    }
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      {/* LIQUID GLASS PREMIUM HEADER */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/15 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]"
            : "bg-white/10 backdrop-blur-md"
        } border-b border-white/20 relative`}
      >
        {/* LIQUID GLASS BACKGROUND EFFECTS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between relative z-10">

          {/* LOGO – A2Z MINIMAL LUXURY WITH GLASS EFFECT */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            onClick={() => console.log("Logo clicked - Going home")}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <div className="
                w-12 h-12 rounded-xl 
                bg-gradient-to-br from-gray-900/90 to-gray-700/90 
                backdrop-blur-sm
                border border-white/20
                shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]
                flex items-center justify-center 
                group-hover:scale-105
                transition-all duration-300
              ">
                <span className="text-white text-2xl font-bold">A</span>
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-gray-900 tracking-wide drop-shadow-sm">A2Z Group</span>
                <span className="text-xs text-gray-600 tracking-wider">REAL ESTATE</span>
              </div>
            </motion.div>
          </Link>

          {/* DESKTOP NAVIGATION WITH LIQUID GLASS EFFECT */}
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
                  onClick={() => handleLinkClick(link.href, link.name)}
                  className={`
                    px-4 py-2.5 rounded-xl 
                    flex items-center gap-2 
                    text-sm font-medium 
                    transition-all duration-300
                    relative
                    overflow-hidden
                    cursor-pointer
                    ${pathname === link.href
                      ? "text-blue-600 bg-white/20 backdrop-blur-sm border border-white/30 shadow-inner"
                      : "text-gray-800 hover:text-gray-900 hover:bg-white/15 backdrop-blur-sm"
                    }
                  `}
                >
                  {/* GLASS BACKGROUND OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl opacity-50" />
                  
                  {link.icon}
                  {link.name}

                  {link.dropdown && (
                    <ChevronDown className="w-3 h-3 opacity-60 group-hover:opacity-100 transition" />
                  )}
                </Link>

                {/* LIQUID GLASS BORDER ANIMATION */}
                <span className="
                  absolute left-1/2 bottom-0 
                  w-0 h-0.5 rounded-full 
                  bg-gradient-to-r from-blue-400 to-cyan-400 
                  transition-all duration-300 
                  group-hover:w-full group-hover:left-0
                " />

                {/* LIQUID GLASS DROPDOWN */}
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="
                      absolute top-full left-0 w-64 
                      bg-white/70 backdrop-blur-xl 
                      rounded-2xl shadow-2xl 
                      border border-white/40
                      mt-3 p-4 z-50
                      before:absolute before:inset-0 
                      before:bg-gradient-to-br 
                      before:from-white/30 before:via-transparent before:to-white/10 
                      before:rounded-2xl before:-z-10
                    "
                  >
                    {link.dropdown.map((section, idx) => (
                      <div key={idx} className="mb-3 last:mb-0">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 px-2">
                          {section.title}
                        </h4>

                        <div className="space-y-1">
                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => handleLinkClick(item.href, item.name)}
                              className="
                                block px-3 py-2.5 rounded-lg 
                                text-gray-700 
                                hover:text-blue-600 
                                hover:bg-white/40
                                backdrop-blur-sm
                                transition-all duration-200
                                border border-transparent
                                hover:border-white/30
                              "
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

            {/* LIQUID GLASS FREE CONSULT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                console.log("Free Consultation button clicked")
                router.push("/contact")
              }}
              className="
                ml-4 px-6 py-3 rounded-xl 
                text-white font-semibold 
                bg-gradient-to-r from-blue-600/90 to-blue-700/90 
                backdrop-blur-sm
                border border-white/30
                shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]
                hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.35)]
                hover:from-blue-600 hover:to-blue-700
                transition-all duration-300
                relative
                overflow-hidden
                before:absolute before:inset-0
                before:bg-gradient-to-r
                before:from-white/20
                before:to-transparent
                before:translate-x-[-100%]
                hover:before:translate-x-[100%]
                before:transition-transform before:duration-700
              "
            >
              Free Consultation
            </motion.button>
          </nav>

          {/* MOBILE MENU BUTTON WITH GLASS EFFECT */}
          <button
            className="
              lg:hidden 
              text-gray-800 
              w-12 h-12 
              rounded-xl 
              flex items-center justify-center
              bg-white/20 backdrop-blur-sm
              border border-white/30
              hover:bg-white/30
              transition-all duration-300
            "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU WITH LIQUID GLASS EFFECT */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="
              lg:hidden fixed inset-0 
              bg-gradient-to-br from-white/85 via-white/70 to-white/60
              backdrop-blur-xl
              p-6 z-50 overflow-y-auto
              border-l border-white/30
            "
          >
            {/* CLOSE BUTTON */}
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="
                  w-12 h-12 rounded-xl 
                  flex items-center justify-center
                  bg-white/30 backdrop-blur-sm
                  border border-white/40
                  hover:bg-white/40
                  transition-all duration-300
                "
              >
                <X size={28} className="text-gray-800" />
              </button>
            </div>

            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href, link.name)}
                  className="
                    block py-4 px-4 text-lg font-medium
                    bg-white/30 backdrop-blur-sm
                    rounded-xl border border-white/40
                    text-gray-800
                    hover:bg-white/50
                    hover:text-blue-600
                    transition-all duration-300
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="text-blue-600">{link.icon}</div>
                    {link.name}
                  </div>
                </Link>
              ))}

              {/* MOBILE FREE CONSULTATION BUTTON WITH GLASS EFFECT */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  console.log("Mobile Free Consultation clicked")
                  setIsMenuOpen(false)
                  router.push("/contact")
                }}
                className="
                  w-full mt-6 py-4 rounded-xl 
                  text-white text-lg font-semibold 
                  bg-gradient-to-r from-blue-600/90 to-blue-700/90 
                  backdrop-blur-sm
                  border border-white/30
                  shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]
                  hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.35)]
                  transition-all duration-300
                  relative
                  overflow-hidden
                  before:absolute before:inset-0
                  before:bg-gradient-to-r
                  before:from-white/20
                  before:to-transparent
                  before:translate-x-[-100%]
                  hover:before:translate-x-[100%]
                  before:transition-transform before:duration-700
                "
              >
                Free Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header