"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  FaHome, FaChartLine, FaBuilding, FaUsers,
  FaArrowRight, FaCheckCircle
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const FourPillars = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const pillars = [
    {
      id: 1,
      title: "A2Z Homes",
      subtitle: "Residential Excellence",
      description: "AI-driven home matches with seamless buying & selling.",
      icon: <FaHome />,
      link: "/buy-sell",
      color: "#1E3A8A",
      glow: "rgba(30,58,138,0.15)"
    },
    {
      id: 2,
      title: "A2Z Investments",
      subtitle: "Capital Intelligence",
      description: "Instant valuations & fast investor-grade opportunities.",
      icon: <FaChartLine />,
      link: "/cash-offers",
      color: "#0F766E",
      glow: "rgba(15,118,110,0.15)"
    },
    {
      id: 3,
      title: "A2Z Commercial",
      subtitle: "Enterprise Strategy",
      description: "Business-ready insights for commercial excellence.",
      icon: <FaBuilding />,
      link: "/commercial",
      color: "#B45309",
      glow: "rgba(180,83,9,0.18)"
    },
    {
      id: 4,
      title: "A2Z Network",
      subtitle: "Elite Investor Ecosystem",
      description: "Exclusive partnerships, off-market deals & network access.",
      icon: <FaUsers />,
      link: "/investors",
      color: "#6D28D9",
      glow: "rgba(109,40,217,0.15)"
    }
  ];

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-white overflow-hidden">

      {/* LIGHT BG EFFECT */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top,_#dbeafe,_transparent_60%)]" />

      <div className="container mx-auto px-4 md:px-6 relative">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            The <span className="text-blue-700">Four Pillars</span>
            <br />
            <span className="text-gray-700 text-2xl sm:text-3xl md:text-5xl">
              Of A2Z Excellence
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-5">
            Our core divisions work together to deliver a powerful, tech-driven real estate ecosystem.
          </p>
        </motion.div>

        {/* MAIN GRID → SINGLE COLUMN ON MOBILE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Card */}
              <div
                className={`relative p-6 sm:p-8 md:p-10 bg-white rounded-3xl border transition-all duration-500
                shadow-[0_4px_25px_rgba(0,0,0,0.06)]
                ${hovered === p.id ? "scale-[1.03] shadow-[0_8px_40px_rgba(0,0,0,0.12)] border-blue-200" : ""}
                `}
              >
                {/* Glow */}
                {hovered === p.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-3xl blur-2xl"
                    style={{ background: p.glow }}
                  />
                )}

                <div className="relative flex flex-col sm:flex-row items-start gap-6">

                  {/* Icon */}
                  <motion.div
                    animate={hovered === p.id ? { scale: 1.12, rotate: 6 } : { scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 text-white text-3xl rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ background: p.color }}
                  >
                    {p.icon}
                  </motion.div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {p.title}
                    </h3>

                    <span
                      className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full mt-2 inline-block"
                      style={{ background: p.glow, color: p.color }}
                    >
                      {p.subtitle}
                    </span>

                    <p className="mt-4 text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                      {p.description}
                    </p>

                    {/* Features */}
                    <div className="mt-6 space-y-2">
                      {["Smarter Decisions", "AI Power Tools", "Investor-Grade Precision"].map((f, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-700 text-sm">
                          <FaCheckCircle className="text-green-600 text-lg" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link href={p.link}>
                      <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 hover:underline text-sm sm:text-base">
                        Explore {p.title}
                        <FaArrowRight className="group-hover:translate-x-1 transition" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 md:mt-24"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Experience Real Estate the Smart Way?
          </h3>

          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Let our technology + expertise guide your next big move.
          </p>

          <Link href="/contact" className="inline-block">
            <div className="px-10 py-4 rounded-2xl text-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 shadow-lg transition">
              Start Your Consultation
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default FourPillars;

