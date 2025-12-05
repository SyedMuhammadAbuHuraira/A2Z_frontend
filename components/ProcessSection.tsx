"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaHome,
  FaHandshake,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { motion, useInView, circOut } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: circOut },
  }),
};

const cardAnim = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (i: number = 1) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: circOut },
  }),
};

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      title: "Discovery Call",
      desc: "We start with a short call to understand your goals, budget, and timeline.",
      icon: <FaSearch />,
      color: "#3B82F6",
    },
    {
      title: "Smart Property Matching",
      desc: "AI-backed listing search, curated options, and private market access.",
      icon: <FaHome />,
      color: "#10B981",
    },
    {
      title: "Tours, Offers & Closing",
      desc: "From showings to negotiations — we guide you smoothly the entire way.",
      icon: <FaHandshake />,
      color: "#8B5CF6",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Soft Luxury Background Orbs */}
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-blue-200 opacity-20 blur-[160px]" />
      <div className="absolute bottom-0 -right-32 w-[450px] h-[450px] bg-purple-300 opacity-20 blur-[160px]" />

      <div className="relative container mx-auto px-6 z-20">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              A2Z Journey
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Smooth, guided, and stress-free real estate experience from start to finish.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 via-gray-300 to-purple-300 rounded-full" />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                custom={i + 1}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                className={`relative flex flex-col md:flex-row items-center gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Center Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: i * 0.15, type: "spring", stiffness: 160 },
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-xl border-4 border-white"
                  style={{ backgroundColor: step.color }}
                >
                  {step.icon}
                </motion.div>

                {/* Card */}
                <motion.div
                  custom={i + 1}
                  variants={cardAnim}
                  whileHover={{
                    scale: 1.04,
                    y: -6,
                    transition: { duration: 0.25 },
                  }}
                  className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 max-w-md hover:shadow-2xl transition-all"
                >
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-32 text-center"
        >
          <h3 className="text-4xl font-bold text-gray-900">Why Choose A2Z</h3>
          <p className="text-gray-600 max-w-xl mx-auto mt-3">
            Modern tech + expert service = the perfect real estate partner.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "AI-Powered Search",
                desc: "We find what others miss.",
                color: "#3B82F6",
              },
              {
                title: "Exclusive Deals",
                desc: "Private & off-market access.",
                color: "#10B981",
              },
              {
                title: "Expert Negotiation",
                desc: "We secure the best price.",
                color: "#8B5CF6",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardAnim}
                className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div
                  className="w-14 h-14 rounded-2xl text-white flex items-center justify-center text-2xl mb-5"
                  style={{ backgroundColor: item.color }}
                >
                  <FaCheckCircle />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA CARD */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-28 text-center"
        >
          <div className="bg-white p-12 rounded-3xl max-w-3xl mx-auto shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-gray-600 mt-3 mb-8 text-lg">
              Let's create your winning real estate strategy.
            </p>

            <Link href="/contact">
              <div className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl text-lg font-semibold hover:opacity-90 shadow-xl transition">
                Schedule a Call <FaArrowRight />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
