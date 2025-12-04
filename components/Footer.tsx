"use client";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-black via-[#0a0a0f] to-black text-white pt-24 pb-12 overflow-hidden">

      {/* --- ANIMATED FLOATING PARTICLES --- */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* SOFT GLOW BEHIND FOOTER */}
      <div className="absolute -top-20 left-0 right-0 mx-auto w-[80%] h-40 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-extrabold tracking-wide mb-4 drop-shadow-xl">
              A2Z Group
            </h2>

            <p className="italic text-gray-300 mb-4 text-lg font-semibold">
              Real Estate Made Simple — From A to Z
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner in residential, commercial & investment real estate across New Jersey.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {[FaFacebook, FaInstagram, FaYoutube, FaLinkedin].map(
                (Icon, idx) => (
                  <div
                    key={idx}
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md 
                    hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                  >
                    <Icon size={18} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-white/20 inline-block">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300 text-lg font-medium">
              {[
                { name: "Home", url: "/" },
                { name: "Buy / Sell", url: "/buy-sell" },
                { name: "Cash Offers", url: "/cash-offers" },
                { name: "Commercial", url: "/commercial" },
                { name: "Investors", url: "/investors" },
                { name: "About Us", url: "/about" },
                { name: "Contact", url: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.url}
                    className="relative group hover:text-white transition tracking-wide"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 rounded-full group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-white/20 inline-block">
              Services
            </h3>

            <ul className="space-y-3 text-gray-300 text-lg font-medium">
              {[
                "Home Buying",
                "Home Selling",
                "Cash Offers",
                "Commercial Real Estate",
                "Investment Properties",
                "Joint Ventures",
                "1031 Exchanges",
              ].map((service, i) => (
                <li
                  key={i}
                  className="group hover:text-white transition tracking-wide relative"
                >
                  {service}
                  <span className="absolute left-0 bottom-0 h-[2px] bg-purple-400 w-0 group-hover:w-full transition-all"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-white/20 inline-block">
              Contact Info
            </h3>

            <ul className="space-y-5 text-lg">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-4 text-blue-400" />
                <span>
                  Central New Jersey <br /> Old Bridge • Edison • Piscataway
                </span>
              </li>

              <li className="flex items-center">
                <FaPhone className="mr-4 text-blue-400" />
                <span className="font-semibold">(732) 123-4567</span>
              </li>

              <li className="flex items-center">
                <FaEnvelope className="mr-4 text-blue-400" />
                <span>info@a2zgrouprealestate.com</span>
              </li>

              <li className="flex items-start">
                <FaClock className="mt-1 mr-4 text-blue-400" />
                <span>
                  Mon–Fri: 9am–6pm <br /> Sat: 10am–4pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-300 mb-2 text-lg font-medium">
            Licensed Realtor® — Keller Williams Realty West Monmouth
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 The A2Z Group. All Rights Reserved.
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold 
              shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              Ready to Simplify Real Estate? Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
