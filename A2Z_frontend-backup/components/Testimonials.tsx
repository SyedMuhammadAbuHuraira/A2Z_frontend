"use client";

import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaDollarSign,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      name: "Sarah & Michael",
      role: "First-Time Buyers",
      quote:
        "A2Z made our first home purchase unbelievably smooth. Their guidance and negotiation expertise saved us thousands!",
      type: "buyer",
    },
    {
      name: "Robert Chen",
      role: "Investor",
      quote:
        "A2Z provides exclusive off-market deals — I closed 3 investment properties in one year thanks to their network.",
      type: "investor",
    },
    {
      name: "Linda Rodriguez",
      role: "Seller",
      quote:
        "I sold my inherited property stress-free and above asking price. A2Z handled everything with unmatched professionalism.",
      type: "seller",
    },
  ];

  const typeIcons: Record<string, React.ReactNode> = {
    buyer: <FaHome />,
    seller: <FaDollarSign />,
    investor: <FaChartLine />,
  };

  const typeColors: Record<string, string> = {
    buyer: "text-blue-600 bg-blue-100",
    seller: "text-emerald-600 bg-emerald-100",
    investor: "text-purple-600 bg-purple-100",
  };

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  /* -----------------------------------------
     3D Tilt Effect Logic
  ----------------------------------------- */
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [12, -12]);
  const rotateY = useTransform(x, [-50, 50], [-12, 12]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  /* -----------------------------------------
     AUTO-PLAY
  ----------------------------------------- */
  useEffect(() => {
    const timer = setInterval(() => next(), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-28 overflow-hidden bg-gray-50">
      {/* FLOATING GRADIENT ORBS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 blur-[120px] opacity-30 rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-300 blur-[140px] opacity-30 rounded-full"></div>

      {/* SPOTLIGHT EFFECT */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            What Our Clients
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Say About A2Z Group
            </span>
          </h2>

          <p className="text-gray-600 text-xl max-w-2xl mx-auto mt-4">
            A2Z Group transforms real estate with trust, innovation, and exceptional service.
          </p>
        </motion.div>

        {/* TESTIMONIAL CARD SECTION */}
        <div className="relative max-w-4xl mx-auto">
          
          <motion.div
            style={{ rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 backdrop-blur-xl
                       transition-all duration-300 cursor-pointer"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45 }}
              >
                {/* STARS */}
                <div className="flex gap-1 mb-6">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                </div>

                {/* QUOTE */}
                <p className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-10">
                  "{testimonials[active].quote}"
                </p>

                {/* CLIENT INFO */}
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 flex items-center justify-center rounded-full shadow-md text-2xl ${typeColors[testimonials[active].type]}`}
                    >
                      {typeIcons[testimonials[active].type]}
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{testimonials[active].name}</h4>
                      <p className="text-gray-600 text-sm">{testimonials[active].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* NAV BUTTONS */}
          <div className="flex justify-center mt-10 gap-6">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-300 
                         hover:border-blue-500 hover:text-blue-600 shadow-md transition"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-300 
                         hover:border-blue-500 hover:text-blue-600 shadow-md transition"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-5 gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  active === i ? "w-8 bg-blue-600" : "w-3 bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
