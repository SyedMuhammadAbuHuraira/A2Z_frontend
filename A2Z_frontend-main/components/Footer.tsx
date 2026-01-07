"use client";

import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaShieldAlt,
  FaHome,
  FaLinkedin,
  FaTwitter,
  FaChevronRight,
} from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white pt-20 pb-16">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main grid with generous spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left Column - Brand & Contact */}
          <div className="space-y-12">
            {/* Brand section */}
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-700 via-purple-700 to-pink-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-900/40">
                  <span className="text-white text-4xl font-black tracking-tighter">AZ</span>
                </div>
                <div>
                  <h2 className="text-5xl font-black tracking-tight bg-gradient-to-r from-white via-blue-100 to-gray-300 bg-clip-text text-transparent">
                    A2Z GROUP
                  </h2>
                  <p className="text-blue-400 text-sm font-bold tracking-widest uppercase mt-2">
                    REAL ESTATE SOLUTIONS
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-xl leading-relaxed font-medium max-w-xl">
                Transforming real estate journeys across Central New Jersey with precision, 
                professionalism, and unparalleled market expertise.
              </p>
            </div>

            {/* Contact info - Clean vertical layout */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-white text-2xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Primary Contact</p>
                  <a href="tel:732-640-6456" className="text-3xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
                    732-640-6456
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Email Address</p>
                  <a href="mailto:ahmadzubair@kw.com" className="text-xl font-semibold text-white hover:text-purple-400 transition-colors duration-300">
                    ahmadzubair@kw.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Links & Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold mb-10 pb-4 border-b border-gray-800 text-white">
                Quick Navigation
              </h3>
              <ul className="space-y-5">
                {[
                  "Properties for Sale",
                  "Buyer Services",
                  "Seller Services",
                  "Investment Portfolio",
                  "Market Analysis",
                  "About Our Team",
                  "Testimonials",
                  "Career Opportunities"
                ].map((item, i) => (
                  <li key={i} className="group">
                    <Link
                      href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between text-gray-400 hover:text-white py-3 border-b border-gray-900/50 last:border-0 group-hover:border-blue-900/50 transition-all duration-300"
                    >
                      <span className="font-medium text-lg group-hover:translate-x-2 transition-transform duration-300">
                        {item}
                      </span>
                      <FaChevronRight className="text-blue-500/0 group-hover:text-blue-500 text-sm transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Areas */}
            <div>
              <h3 className="text-2xl font-bold mb-10 pb-4 border-b border-gray-800 text-white">
                Service Areas
              </h3>
              <div className="space-y-4">
                {[
                  { city: "Old Bridge", tag: "Luxury Homes" },
                  { city: "Edison", tag: "Commercial" },
                  { city: "Sayreville", tag: "Residential" },
                  { city: "Marlboro", tag: "Estates" },
                  { city: "Woodbridge", tag: "Investment" },
                  { city: "East Brunswick", tag: "Premium" }
                ].map((area, i) => (
                  <div key={i} className="p-4 bg-gray-900/30 rounded-xl border border-gray-800/50 hover:border-blue-800/50 transition-all duration-300 group">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-lg">{area.city}</span>
                      <span className="text-blue-400 text-sm font-semibold px-3 py-1 bg-blue-900/20 rounded-full">
                        {area.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Icons - Clean and minimal */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-6">Connect With Us</h4>
                <div className="flex gap-4">
                  {[
                    { Icon: FaFacebook, color: "bg-blue-700 hover:bg-blue-800" },
                    { Icon: FaInstagram, color: "bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" },
                    { Icon: FaLinkedin, color: "bg-blue-800 hover:bg-blue-900" },
                    { Icon: FaTwitter, color: "bg-sky-600 hover:bg-sky-700" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center transition-all duration-300 hover:scale-110`}
                    >
                      <social.Icon className="text-white text-xl" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust & Compliance Section */}
        <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Brokerage Info */}
            <div className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <FaHome className="text-blue-400 text-2xl" />
                <div>
                  <h4 className="text-xl font-bold text-white">Brokerage</h4>
                  <p className="text-gray-400">Keller Williams Realty</p>
                </div>
              </div>
              <p className="text-gray-300">
                Licensed real estate brokerage serving Central New Jersey with integrity and excellence.
              </p>
            </div>

            {/* Licensing */}
            <div className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <FaShieldAlt className="text-green-400 text-2xl" />
                <div>
                  <h4 className="text-xl font-bold text-white">Licensed & Certified</h4>
                  <p className="text-gray-400">NJ Real Estate License</p>
                </div>
              </div>
              <p className="text-gray-300">
                Fully licensed and compliant with all New Jersey real estate regulations and standards.
              </p>
            </div>

            {/* Areas */}
            <div className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <FaMapMarkerAlt className="text-purple-400 text-2xl" />
                <div>
                  <h4 className="text-xl font-bold text-white">Serving All of Central NJ</h4>
                  <p className="text-gray-400">Primary Service Region</p>
                </div>
              </div>
              <p className="text-gray-300">
                Comprehensive coverage across Middlesex, Monmouth, and surrounding counties.
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-gray-400 text-sm">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Fair Housing",
              "Accessibility",
              "Disclaimer",
              "DMCA",
              "Sitemap"
            ].map((link, idx) => (
              <Link
                key={idx}
                href="#"
                className="hover:text-white hover:underline transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-800/50">
            <p className="text-gray-500 text-lg">
              © {currentYear} <span className="text-white font-bold">A2Z Group Real Estate</span>. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm mt-4">
              This website is operated by A2Z Group Real Estate under Keller Williams Realty West Monmouth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;