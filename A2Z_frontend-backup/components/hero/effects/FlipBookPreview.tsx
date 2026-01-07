"use client";

import { useState, useRef, useEffect } from "react";
import { EffectProps } from "../types";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowRight, FaBookOpen, FaStar, FaHome, FaDollarSign, FaChartLine, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FlipBookPreview = ({ theme }: EffectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const pages = [
    {
      title: "Welcome",
      content: (
        <div className="h-full flex flex-col items-center justify-center p-6 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" 
            style={{ background: theme.gradient }}>
            <FaBookOpen className="text-3xl text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2" style={{ color: theme.primary }}>
            A2Z Real Estate
          </h3>
          <p className="text-gray-600 mb-4">Your Complete Property Solution</p>
          <div className="flex gap-2 mt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gray-300" />
            ))}
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-white to-gray-50"
    },
    {
      title: "Our Services",
      content: (
        <div className="h-full p-6">
          <h4 className="font-bold text-lg mb-4" style={{ color: theme.secondary }}>
            Services
          </h4>
          <div className="space-y-3">
            {[
              { icon: <FaHome />, text: "Buy/Sell Homes", color: theme.primary },
              { icon: <FaDollarSign />, text: "Cash Offers", color: theme.secondary },
              { icon: <FaChartLine />, text: "Investments", color: theme.accent },
            ].map((service, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" 
                  style={{ background: service.color }}>
                  {service.icon}
                </div>
                <span className="text-gray-700">{service.text}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      bgColor: "bg-white"
    },
    {
      title: "Success Stories",
      content: (
        <div className="h-full p-6">
          <h4 className="font-bold text-lg mb-4" style={{ color: theme.accent }}>
            Achievements
          </h4>
          <div className="space-y-4">
            <div className="p-3 rounded-lg border-l-4" style={{ borderLeftColor: theme.primary, background: `${theme.primary}08` }}>
              <div className="text-2xl font-bold" style={{ color: theme.primary }}>150+</div>
              <div className="text-sm text-gray-600">Happy Families</div>
            </div>
            <div className="p-3 rounded-lg border-l-4" style={{ borderLeftColor: theme.secondary, background: `${theme.secondary}08` }}>
              <div className="text-2xl font-bold" style={{ color: theme.secondary }}>$50M+</div>
              <div className="text-sm text-gray-600">Volume Closed</div>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <span className="text-sm text-gray-600 ml-2">4.9/5 Rating</span>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-gray-50 to-white"
    },
    {
      title: "Get Started",
      content: (
        <div className="h-full p-6 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-pulse"
            style={{ background: theme.gradient }}>
            <FaArrowRight className="text-2xl text-white" />
          </div>
          <h4 className="font-bold text-xl mb-2" style={{ color: theme.primary }}>
            Ready to Begin?
          </h4>
          <p className="text-gray-600 mb-6">Start your real estate journey with us</p>
          <button 
            className="px-6 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
            style={{ background: theme.gradient }}
            onClick={() => window.location.href = "/contact"}
          >
            Contact Us
          </button>
        </div>
      ),
      bgColor: "bg-white"
    }
  ];

  const flipPage = (direction: 'next' | 'prev') => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    
    if (direction === 'next' && currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1);
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
    
    setTimeout(() => setIsFlipping(false), 600);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Floating Book Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -5, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {/* Outer Glow */}
        <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: theme.gradient, filter: 'blur(8px)' }}
        />
        
        {/* Main Button */}
        <div className="relative w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
            color: theme.text,
            boxShadow: `0 10px 30px ${theme.glow}, inset 0 1px 0 rgba(255,255,255,0.3)`
          }}
        >
          📖
          {/* Page Corner Effect */}
          <div className="absolute top-2 right-2 w-4 h-4 rounded-tr-full"
            style={{ background: 'rgba(255,255,255,0.3)' }}
          />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: theme.accent }} />
            <span>Explore Our Book</span>
          </div>
          <div className="absolute -bottom-1 right-4 w-2 h-2 bg-black/90 rotate-45" />
        </div>
      </motion.button>

      {/* Flip Book Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center text-white bg-black/30 hover:bg-black/50 transition-colors z-10"
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                <FaTimes />
              </motion.button>

              {/* Book Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-6 md:p-8">
                {/* Book Spine Effect */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-3/4 rounded-r-lg"
                  style={{ background: `linear-gradient(to right, ${theme.primary}dd, ${theme.secondary}dd)` }}
                />

                {/* Book Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      A2Z Real Estate Portfolio
                    </h2>
                    <p className="text-gray-300">Flip through our interactive catalog</p>
                  </div>

                  {/* CSS Flip Book */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="relative w-[350px] h-[450px] perspective-1000">
                        {/* Book Pages Container */}
                        <div className="relative w-full h-full">
                          {pages.map((page, index) => (
                            <motion.div
                              key={index}
                              className={`absolute inset-0 ${page.bgColor} border border-gray-200 rounded-lg overflow-hidden ${
                                index === currentPage ? 'z-10' : 'z-0'
                              }`}
                              initial={false}
                              animate={{
                                rotateY: index === currentPage ? 0 : index < currentPage ? -180 : 0,
                                x: index === currentPage ? 0 : index < currentPage ? -20 : 20,
                                opacity: Math.abs(index - currentPage) > 1 ? 0 : 1,
                                scale: index === currentPage ? 1 : 0.95
                              }}
                              transition={{
                                duration: 0.6,
                                ease: "easeInOut"
                              }}
                              style={{
                                transformStyle: "preserve-3d",
                                backfaceVisibility: "hidden"
                              }}
                            >
                              <div className="h-full p-6 relative">
                                {page.content}
                                {/* Page Number */}
                                <div className="absolute bottom-4 right-4 text-sm text-gray-400">
                                  {index + 1} / {pages.length}
                                </div>
                                {/* Page Corner */}
                                <div className="absolute top-4 right-4 w-8 h-8">
                                  <div className="w-full h-full border-t-2 border-r-2 border-gray-300 rounded-tr-lg" />
                                </div>
                                {/* Page Shadow */}
                                {index === currentPage && (
                                  <div className="absolute -right-4 top-0 bottom-0 w-8"
                                    style={{
                                      background: 'linear-gradient(to right, rgba(0,0,0,0.1), transparent)'
                                    }}
                                  />
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Page Turning Corner */}
                        <div className="absolute top-4 right-4 z-20">
                          <div className="relative w-16 h-16">
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-tr-lg"
                              animate={{
                                rotateY: isFlipping ? -30 : 0,
                                x: isFlipping ? -10 : 0
                              }}
                              transition={{ duration: 0.6 }}
                              style={{
                                transformOrigin: "left center",
                                boxShadow: 'inset 2px 0 3px rgba(0,0,0,0.1)'
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Page Controls */}
                      <div className="flex justify-center items-center gap-4 mt-6">
                        <button
                          onClick={() => flipPage('prev')}
                          className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
                          disabled={currentPage === 0 || isFlipping}
                        >
                          <FaChevronLeft />
                          Previous
                        </button>
                        <div className="flex gap-2">
                          {pages.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                if (!isFlipping) {
                                  setIsFlipping(true);
                                  setCurrentPage(i);
                                  setTimeout(() => setIsFlipping(false), 600);
                                }
                              }}
                              className={`w-2 h-2 rounded-full transition-all ${currentPage === i ? 'scale-125' : ''}`}
                              style={{
                                background: currentPage === i ? theme.primary : theme.text + '40'
                              }}
                            />
                          ))}
                        </div>
                        <button
                          onClick={() => flipPage('next')}
                          className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
                          disabled={currentPage === pages.length - 1 || isFlipping}
                        >
                          Next
                          <FaChevronRight />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Elements */}
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <button
                      className="px-6 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg flex items-center gap-2"
                      style={{ background: theme.gradient }}
                      onClick={() => window.location.href = "/services"}
                    >
                      <FaBookOpen />
                      View All Services
                    </button>
                    <button
                      className="px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:bg-white/10 flex items-center gap-2"
                      style={{ borderColor: theme.primary, color: theme.primary }}
                      onClick={() => window.location.href = "/contact"}
                    >
                      Get Free Consultation
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full animate-pulse"
                  style={{ background: theme.primary, filter: 'blur(4px)' }}
                />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full animate-pulse"
                  style={{ background: theme.secondary, filter: 'blur(6px)' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlipBookPreview;