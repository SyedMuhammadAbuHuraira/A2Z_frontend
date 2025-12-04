"use client";

import React, { useState, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const rotatingTexts = [
  "Buy Your Dream Home",
  "Sell for Maximum Profit",
  "Invest with Confidence",
];

const HeroSection = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [index, setIndex] = useState(0);

  // Smooth rotating text
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative 
        min-h-[92vh] 
        flex 
        items-center 
        justify-center 
        overflow-hidden 
        !mt-0 !pt-0
      "
    >
      {/* FULL CLEAN BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/a4.png"
          alt="Real Estate Background"
          fill
          priority
          className="object-cover"
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">

        {/* CLEAN PREMIUM HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-white
            font-extrabold
            leading-tight
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            drop-shadow-2xl
            mb-4
          "
        >
          <span className="relative inline-block">
            Find Your Perfect Home
            {/* Premium glow effect */}
            <span className="
              absolute inset-0 
              bg-gradient-to-r from-white/0 via-white/30 to-white/0 
              blur-xl opacity-60 
              rounded-xl 
              animate-pulse
            " />
          </span>
        </motion.h1>

        {/* ROTATING SUBTEXT */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="
            text-white/90 
            font-light 
            text-lg 
            sm:text-xl 
            md:text-2xl 
            h-10 
            flex 
            items-center 
            justify-center
            drop-shadow-lg
          "
        >
          {rotatingTexts[index]}
        </motion.div>

        {/* SEARCH BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl mx-auto">
            <div className="flex items-center px-5 py-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl mr-3" />
              <input
                type="text"
                placeholder="Enter an address, city, or ZIP code"
                className="flex-1 text-lg py-2 outline-none"
              />
              <button className="
                bg-blue-600 
                hover:bg-blue-700 
                text-white 
                px-5 py-3 
                rounded-xl 
                ml-3 
                flex items-center gap-2 
                transition
              ">
                <FaSearch />
                Search
              </button>
            </div>

            {/* ADVANCED FILTERS BUTTON */}
            <button
              onClick={() => setSearchExpanded(!searchExpanded)}
              className="
                w-full 
                py-3 
                text-blue-600 
                font-medium 
                flex 
                items-center 
                justify-center 
                gap-2 
                hover:bg-gray-100 
                transition
              "
            >
              Advanced Filters
              <FaChevronDown
                className={`transition-transform ${
                  searchExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* ADVANCED FILTER PANEL */}
            <AnimatePresence>
              {searchExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <label className="font-semibold text-sm">Min Price</label>
                      <input
                        type="number"
                        className="w-full mt-1 border rounded-lg px-3 py-2"
                        placeholder="$200,000"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-sm">Max Price</label>
                      <input
                        type="number"
                        className="w-full mt-1 border rounded-lg px-3 py-2"
                        placeholder="$800,000"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* PREMIUM BADGES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            "Top Rated Agents",
            "Real-Time Market Insights",
            "Trusted by 850+ Families",
            "Serving All New Jersey",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="
                bg-white/20 
                backdrop-blur-md 
                px-4 py-2 
                rounded-full 
                border border-white/30 
                text-white 
                text-sm 
                font-medium 
                shadow-lg
              "
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
