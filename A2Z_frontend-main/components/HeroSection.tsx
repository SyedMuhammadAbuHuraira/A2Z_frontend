"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt, FaChevronDown, FaPhone, FaHome, FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  
  // Correct TypeScript type for video ref
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video playback control - Type safe
  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((e: Error) => {
          console.log("Play failed:", e);
        });
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Toggle mute/unmute - Type safe
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Auto-play video on component mount
  useEffect(() => {
    if (videoRef.current) {
      // Set video to muted by default for autoplay
      videoRef.current.muted = true;
      
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
          setIsVideoPlaying(true);
        } catch (error: unknown) {
          console.log("Autoplay failed:", error);
          // Fallback to showing play button if autoplay fails
          setIsVideoPlaying(false);
        }
      };
      
      playVideo();
    }
  }, []);

  // Video error handling
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video failed to load. Check if video1.mp4 exists in public/videos/");
    console.error("Video error details:", e);
  };

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
      {/* BACKGROUND VIDEO - EXTENDED TO COVER HEADER AREA */}
      <div className="absolute inset-0 z-0" style={{ top: '-80px', height: 'calc(100% + 80px)' }}>
        {/* HD Video Element - Extended upwards */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onError={handleVideoError}
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/a4.png"
          preload="auto"
          style={{ 
            objectPosition: 'center 35%', // Video को ऊपर की तरफ focus
          }}
        >
          <source 
            src="/videos/video1.mp4" 
            type="video/mp4" 
            media="(min-width: 768px)"
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Video controls overlay */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={toggleVideoPlayback}
            className="bg-black/60 text-white p-2.5 rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
            aria-label={isVideoPlaying ? "Pause video" : "Play video"}
          >
            {isVideoPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
          </button>
          <button
            onClick={toggleMute}
            className="bg-black/60 text-white p-2.5 rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
          </button>
        </div>

        {/* Enhanced dark overlay - Top portion darker to hide logo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/50" />
        
        {/* Extra dark overlay at top specifically for logo area */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-black/80" />
      </div>

      {/* MAIN CONTENT - Positioned lower to avoid overlapping with extended video */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 text-center mt-12">

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
            lg:text-6xl
            drop-shadow-2xl
            mb-6
            px-4
            pt-8
          "
        >
          <span className="relative inline-block">
            Real Estate Made Simple
            <span className="block text-blue-400 mt-3">
              From A to Z
            </span>
          </span>
        </motion.h1>

        {/* SUBHEADLINE */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="
            text-white/95 
            font-medium
            text-lg 
            sm:text-xl 
            md:text-2xl 
            max-w-3xl 
            mx-auto 
            mb-10
            drop-shadow-xl
            px-4
            py-3
          "
        >
          On-market and off-market options for homeowners and buyers — guided by real negotiation and local insight.
        </motion.p>

        {/* SEARCH BAR - ORIGINAL WHITE COLOR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 mb-8 px-4"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl mx-auto">
            <div className="flex items-center px-5 py-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Enter an address, city, or ZIP code in Central NJ"
                className="flex-1 text-lg py-2 outline-none placeholder-gray-500 bg-white min-w-0"
              />
              <button className="
                bg-blue-600 
                hover:bg-blue-700 
                text-white 
                px-6 py-3 
                rounded-xl 
                ml-3 
                flex items-center gap-2 
                transition-all duration-300
                shadow-lg
                hover:shadow-xl
                flex-shrink-0
                font-semibold
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
                transition-all duration-300
                border-t border-gray-200
              "
            >
              Advanced Filters
              <FaChevronDown
                className={`transition-transform duration-300 ${
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
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 bg-white"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 border-t border-gray-300">
                    <div>
                      <label className="font-semibold text-sm text-gray-700 mb-2 block">Min Price</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <input
                          type="number"
                          className="w-full border border-gray-300 rounded-lg px-10 py-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                          placeholder="200,000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-semibold text-sm text-gray-700 mb-2 block">Max Price</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <input
                          type="number"
                          className="w-full border border-gray-300 rounded-lg px-10 py-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                          placeholder="800,000"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* PRIMARY BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4"
        >
          {/* Primary Button: Book a Consult */}
          <Link 
            href="/consult" 
            className="
              bg-blue-600 
              hover:bg-blue-700 
              text-white 
              px-8 py-4 
              rounded-xl 
              font-semibold 
              text-lg
              flex items-center justify-center gap-2
              transition-all duration-300
              shadow-2xl
              hover:shadow-3xl
              hover:scale-105
            "
          >
            <FaPhone />
            Book a Consult
          </Link>
          
          {/* Secondary Button: Browse Homes */}
          <Link 
            href="/homes" 
            className="
              bg-white/20 
              hover:bg-white/30 
              backdrop-blur-sm
              text-white 
              px-8 py-4 
              rounded-xl 
              font-semibold 
              text-lg
              border border-white/30
              transition-all duration-300
              shadow-xl
              hover:shadow-2xl
              hover:scale-105
              flex items-center justify-center gap-2
            "
          >
            <FaSearch />
            Browse Homes
          </Link>
        </motion.div>

        {/* TRUST CHIPS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-8 px-4"
        >
          {[
            { 
              text: "Central NJ specialist", 
              icon: <FaMapMarkerAlt className="text-blue-300" />
            },
            { 
              text: "On-market + off-market options", 
              icon: <FaHome className="text-green-300" />
            },
            { 
              text: "Fast response / same-day consults", 
              icon: <FaPhone className="text-yellow-300" />
            }
          ].map((item, i) => (
            <div
              key={i}
              className="
                flex items-center gap-2
                bg-white/15 
                backdrop-blur-sm
                px-4 py-2 
                rounded-full 
                border border-white/20 
                text-white 
                text-sm 
                font-medium 
              "
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="animate-bounce text-white/60">
          <FaChevronDown size={24} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;