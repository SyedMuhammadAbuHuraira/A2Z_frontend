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

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: circOut },
  }),
};

const floatCard = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
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
      title: "Discovery Conversation",
      desc: "A quick 10–15 minute call to understand your goals, timeline & property needs.",
      icon: <FaSearch />,
      color: "#3B82F6",
      id: 1,
    },
    {
      title: "Personalized Property Search",
      desc: "We curate listings, off-market deals, and AI-powered matching tailored to YOU.",
      icon: <FaHome />,
      color: "#10B981",
      id: 2,
    },
    {
      title: "Expert Guidance & Closing",
      desc: "From tours to negotiations to closing — we walk you through every step smoothly.",
      icon: <FaHandshake />,
      color: "#8B5CF6",
      id: 3,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Floating Background Orbs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 blur-[150px] opacity-30" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-200 blur-[150px] opacity-25" />

      {/* Content Container */}
      <div className="relative container mx-auto px-6 z-20">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">A2Z Journey</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-xl">
            A smooth, guided, and stress-free real estate experience — from the first call to the final signing.
          </p>
        </motion.div>

        {/* STEP TIMELINE */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 top-0 bottom-0 bg-gradient-to-b from-blue-300 via-gray-300 to-purple-300 rounded-full" />

          <div className="space-y-24 mt-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                custom={i + 1}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                className={`relative flex items-center flex-col md:flex-row gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Center Pulse Icon */}
                <motion.div
                  initial={{ scale: 0.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.2, type: "spring", stiffness: 200 }}
                  className="absolute left-1/2 -translate-x-1/2 z-10 w-16 h-16 rounded-full shadow-xl flex items-center justify-center border-4 border-white"
                  style={{ backgroundColor: step.color }}
                >
                  {step.icon}
                </motion.div>

                {/* Card */}
                <motion.div
                  custom={i + 1}
                  variants={floatCard}
                  whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.3 } }}
                  className="bg-white relative z-20 p-10 rounded-3xl shadow-xl max-w-md border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mt-32 text-center"
        >
          <h3 className="text-4xl font-bold text-gray-900">Why A2Z Is Different</h3>
          <p className="text-gray-600 max-w-xl mx-auto mt-3">
            We combine technology, expertise, and personal service to give you an unmatched experience.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "AI-Driven Search", desc: "Smarter matching for the right property.", color: "#3B82F6" },
              { title: "Exclusive Deals", desc: "Access to off-market & private listings.", color: "#10B981" },
              { title: "Top-Tier Negotiation", desc: "We fight hard to secure the best terms.", color: "#8B5CF6" },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={floatCard}
                className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition"
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

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mt-28 text-center"
        >
          <div className="bg-white p-12 rounded-3xl max-w-3xl mx-auto shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Begin Your A2Z Journey?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Let’s build your perfect real estate strategy together.
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
