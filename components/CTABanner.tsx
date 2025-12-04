"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaPhone,
  FaCalendarAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaUserTie,
  FaMoneyBillWave,
  FaHome,
  FaBuilding,
  FaChartLine
} from "react-icons/fa";

import { motion } from "framer-motion";

const CTABanner = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ctaOptions = [
    {
      title: "Schedule Call",
      description: "Free 30-minute strategy session",
      icon: <FaPhone size={32} />,
      color: "from-blue-600 to-indigo-600",
      link: "/contact",
    },
    {
      title: "Book Consultation",
      description: "Virtual or in-person expert session",
      icon: <FaCalendarAlt size={32} />,
      color: "from-purple-600 to-fuchsia-600",
      link: "/contact",
    },
    {
      title: "WhatsApp Chat",
      description: "Instant 24/7 support",
      icon: <FaWhatsapp size={32} />,
      color: "from-green-500 to-emerald-600",
      link: "https://wa.me/1234567890",
      external: true,
    },
    {
      title: "Email Us",
      description: "Detailed replies within 24 hours",
      icon: <FaEnvelope size={32} />,
      color: "from-gray-700 to-black",
      link: "mailto:info@a2zgroup.com",
      external: true,
    }
  ];

  return (
    <section className="relative overflow-hidden py-28 bg-[#0A0A1A] text-white">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-900/40 to-black/80 animate-gradient-flow"></div>

      {/* Floating Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl animate-float-slower"></div>

      {/* Particle Sparkles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-6 max-w-7xl z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-rose-200 to-white bg-clip-text text-transparent mb-6">
            Transform Your Real Estate Journey
          </h2>

          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Whether you're buying, selling or investing, A2Z Group provides a smooth,
            transparent, and high-impact experience tailored for you.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {ctaOptions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${item.color} blur-2xl transition-all duration-700`}
              ></div>

              <div className="relative z-10">
                <div className={`mb-6 p-4 inline-flex rounded-2xl bg-gradient-to-br ${item.color}`}>
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 mb-6">{item.description}</p>

                {/* Button */}
                {item.external ? (
                  <a
                    href={item.link}
                    className="block w-full py-3 text-center font-semibold rounded-xl bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 transition shadow-lg"
                    target="_blank"
                  >
                    Get Started →
                  </a>
                ) : (
                  <Link
                    href={item.link}
                    className="block w-full py-3 text-center font-semibold rounded-xl bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 transition shadow-lg"
                  >
                    Get Started →
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <FaUserTie className="mx-auto text-5xl text-white/60 mb-6" />

          <p className="text-white/70 mb-4 text-sm tracking-widest uppercase">
            Real Estate Made Easy — From A to Z
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Start Your Journey Today
            <FaArrowRight className="text-white" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
