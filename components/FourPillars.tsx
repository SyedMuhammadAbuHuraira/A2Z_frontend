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
    <section ref={ref} className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/30 overflow-hidden">

      {/* LIQUID GLASS BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 rounded-full blur-3xl opacity-15" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">

        {/* HEADER WITH GLASS EFFECT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="
            inline-block 
            bg-white/20 
            backdrop-blur-sm 
            px-8 py-4 
            rounded-2xl 
            border border-white/30
            shadow-[0_8px_32px_rgba(31,38,135,0.1)]
            mb-6
          ">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              The <span className="text-blue-700">Four Pillars</span>
              <br />
              <span className="text-gray-700 text-2xl sm:text-3xl md:text-5xl">
                Of A2Z Excellence
              </span>
            </h2>
          </div>

          <p className="
            text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-5
            bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20
            inline-block
          ">
            Our core divisions work together to deliver a powerful, tech-driven real estate ecosystem.
          </p>
        </motion.div>

        {/* MAIN GRID WITH LIQUID GLASS CARDS */}
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
              {/* LIQUID GLASS CARD */}
              <div
                className="
                  relative p-6 sm:p-8 md:p-10 
                  bg-white/70 backdrop-blur-xl 
                  rounded-3xl 
                  border border-white/40
                  shadow-[0_8px_32px_rgba(31,38,135,0.1)]
                  transition-all duration-500
                  hover:shadow-[0_20px_50px_rgba(31,38,135,0.2)]
                  hover:border-white/60
                  overflow-hidden
                  before:absolute before:inset-0 
                  before:bg-gradient-to-br 
                  before:from-white/40 before:via-transparent before:to-white/20 
                  before:rounded-3xl before:-z-10
                  after:absolute after:inset-0 
                  after:bg-gradient-to-tl 
                  after:from-white/30 after:via-transparent after:to-white/10 
                  after:rounded-3xl after:-z-10
                "
              >
                {/* COLORED GLOW ON HOVER */}
                {hovered === p.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 rounded-3xl blur-2xl -z-5"
                    style={{ background: p.glow }}
                  />
                )}

                <div className="relative flex flex-col sm:flex-row items-start gap-6 z-10">

                  {/* ICON WITH GLASS EFFECT */}
                  <motion.div
                    animate={hovered === p.id ? { scale: 1.12, rotate: 6 } : { scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="
                      w-14 h-14 sm:w-16 sm:h-16 
                      text-white text-3xl 
                      rounded-2xl 
                      flex items-center justify-center 
                      shadow-lg
                      backdrop-blur-sm
                      border border-white/30
                      relative
                      overflow-hidden
                      before:absolute before:inset-0
                      before:bg-gradient-to-br
                      before:from-white/20
                      before:to-transparent
                    "
                    style={{ background: p.color }}
                  >
                    {p.icon}
                  </motion.div>

                  {/* TEXT CONTENT */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {p.title}
                    </h3>

                    <span
                      className="
                        text-xs sm:text-sm font-medium px-3 py-1 rounded-full mt-2 inline-block
                        backdrop-blur-sm border border-white/30
                      "
                      style={{ background: p.glow, color: p.color }}
                    >
                      {p.subtitle}
                    </span>

                    <p className="
                      mt-4 text-gray-600 text-sm sm:text-[15px] leading-relaxed
                      bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg
                      border border-white/20
                    ">
                      {p.description}
                    </p>

                    {/* FEATURES WITH GLASS EFFECT */}
                    <div className="mt-6 space-y-2">
                      {["Smarter Decisions", "AI Power Tools", "Investor-Grade Precision"].map((f, idx) => (
                        <div 
                          key={idx} 
                          className="
                            flex items-center gap-3 text-gray-700 text-sm
                            bg-white/30 backdrop-blur-sm 
                            px-4 py-2.5 rounded-lg
                            border border-white/30
                            hover:border-white/50
                            transition-all duration-300
                          "
                        >
                          <FaCheckCircle className="text-green-600 text-lg" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA WITH GLASS EFFECT */}
                    <Link href={p.link}>
                      <div className="
                        mt-6 sm:mt-8 
                        inline-flex items-center gap-2 
                        font-semibold 
                        px-6 py-3 
                        rounded-xl
                        bg-white/30 backdrop-blur-sm
                        border border-white/40
                        text-blue-700 
                        hover:text-blue-800
                        hover:bg-white/40
                        hover:border-white/60
                        transition-all duration-300
                        group/cta
                      ">
                        Explore {p.title}
                        <FaArrowRight className="
                          group-hover/cta:translate-x-1 
                          transition-transform duration-300
                        " />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA WITH LIQUID GLASS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 md:mt-24"
        >
          <div className="
            inline-block 
            bg-white/50 backdrop-blur-xl 
            px-10 py-8 
            rounded-3xl 
            border border-white/40
            shadow-[0_20px_60px_rgba(31,38,135,0.15)]
            max-w-3xl mx-auto
            relative
            overflow-hidden
            before:absolute before:inset-0 
            before:bg-gradient-to-br 
            before:from-white/40 before:via-transparent before:to-white/20 
            before:rounded-3xl before:-z-10
          ">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Experience Real Estate the Smart Way?
            </h3>

            <p className="
              text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto
              bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl
              border border-white/30
            ">
              Let our technology + expertise guide your next big move.
            </p>

            <Link href="/contact" className="inline-block">
              <div className="
                px-12 py-4 rounded-2xl 
                text-lg font-semibold text-white 
                bg-gradient-to-r from-blue-600/90 to-blue-700/90 
                backdrop-blur-sm
                border border-white/30
                shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]
                hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.35)]
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
              ">
                Start Your Consultation
              </div>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FourPillars;