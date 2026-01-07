"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHome, FaDollarSign, FaChartLine, 
  FaChevronDown, FaStar, FaGem, FaCrown,
  FaRocket, FaShieldAlt, FaTrophy, FaHeart,
  FaUsers, FaAward, FaClock, FaCheckCircle
} from "react-icons/fa";
import { colorThemes } from "@/lib/colors";
import { ThemeType } from "./types";
import dynamic from "next/dynamic";
import AdvancedTyping from "./effects/AdvancedTyping";
import InteractiveFlipBook from "./effects/InteractiveFlipBook";

// Dynamically import effect components
const ParticlesBackground = dynamic(() => import("./effects/ParticlesBackground"), { 
  ssr: false,
  loading: () => <div className="absolute inset-0" />
});

const ParallaxStars = dynamic(() => import("./effects/ParallaxStars"), { 
  ssr: false,
  loading: () => <div className="absolute inset-0" />
});

const FloatingElements = dynamic(() => import("./effects/FloatingElements"), { 
  ssr: false,
  loading: () => <div className="absolute inset-0" />
});

const UltimateHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<keyof typeof colorThemes>("cosmic");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showNotification, setShowNotification] = useState(true);

  const theme: ThemeType = colorThemes[currentTheme];

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setScrollProgress(Math.min(scrollY / windowHeight, 1));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Auto-rotate theme every 15 seconds
    const themeInterval = setInterval(() => {
      const themeKeys = Object.keys(colorThemes) as Array<keyof typeof colorThemes>;
      const currentIndex = themeKeys.indexOf(currentTheme);
      const nextIndex = (currentIndex + 1) % themeKeys.length;
      setCurrentTheme(themeKeys[nextIndex]);
    }, 15000);

    // Auto-hide notification after 5 seconds
    const notificationTimer = setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(themeInterval);
      clearTimeout(notificationTimer);
    };
  }, [currentTheme]);

  const ctaButtons = [
    {
      title: "Find Dream Home",
      icon: <FaHome />,
      href: "/buy-sell",
      description: "150+ Properties",
      stats: "🏡 98% Satisfaction",
      gradient: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      delay: 0.1
    },
    {
      title: "Cash Offers",
      icon: <FaDollarSign />,
      href: "/cash-offers",
      description: "24hr Response",
      stats: "💰 $50M+ Closed",
      gradient: `linear-gradient(135deg, ${theme.secondary}, ${theme.accent})`,
      delay: 0.2
    },
    {
      title: "Smart Investments",
      icon: <FaChartLine />,
      href: "/invest",
      description: "Expert Guidance",
      stats: "📈 25% Avg ROI",
      gradient: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})`,
      delay: 0.3
    },
    {
      title: "Partner Network",
      icon: <FaUsers />,
      href: "/partners",
      description: "50+ Deals",
      stats: "🤝 Elite Network",
      gradient: `linear-gradient(135deg, ${theme.secondary}dd, ${theme.primary}dd)`,
      delay: 0.4
    }
  ];

  const stats = [
    { value: "150+", label: "Happy Families", icon: <FaHeart />, color: theme.accent },
    { value: "$50M+", label: "Volume Closed", icon: <FaDollarSign />, color: theme.primary },
    { value: "24h", label: "Avg Response", icon: <FaClock />, color: theme.secondary },
    { value: "98%", label: "Satisfaction", icon: <FaAward />, color: "#10B981" },
    { value: "50+", label: "Expert Partners", icon: <FaUsers />, color: "#8B5CF6" },
    { value: "A+", label: "BBB Rating", icon: <FaShieldAlt />, color: "#F59E0B" }
  ];

  const features = [
    { icon: "⚡", title: "Lightning Fast", desc: "24hr cash offers" },
    { icon: "🎯", title: "Precision Pricing", desc: "AI-powered valuation" },
    { icon: "🛡️", title: "Full Protection", desc: "Insured transactions" },
    { icon: "📊", title: "Market Insights", desc: "Real-time analytics" },
    { icon: "🤝", title: "Personal Service", desc: "Dedicated agent" },
    { icon: "🏆", title: "Award Winning", desc: "Industry recognition" }
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: theme.bg }}
    >
      {/* Background Effects */}
      <ParticlesBackground theme={theme} />
      <ParallaxStars theme={theme} scrollProgress={scrollProgress} />
      <FloatingElements theme={theme} />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-80 h-80 rounded-full"
          style={{
            background: `radial-gradient(circle, ${theme.primary} 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${theme.secondary} 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Interactive Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, ${theme.primary}22 1px, transparent 1px),
              linear-gradient(0deg, ${theme.primary}22 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            transition: "transform 0.3s ease-out"
          }}
        />
      </div>

      {/* Live Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="absolute top-8 left-8 z-50"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl blur opacity-30" />
              <div className="relative bg-gray-900/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Live Now!</p>
                    <p className="text-gray-300 text-xs">New property listed in NJ</p>
                  </div>
                  <button 
                    onClick={() => setShowNotification(false)}
                    className="ml-4 text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Selector */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-8 right-8 z-50"
      >
        <div className="flex flex-col items-end gap-2">
          <span className="text-xs text-gray-400 mb-1">Theme:</span>
          <div className="flex gap-2">
            {(Object.keys(colorThemes) as Array<keyof typeof colorThemes>).map((themeKey) => (
              <button
                key={themeKey}
                onClick={() => setCurrentTheme(themeKey)}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-300 relative group ${
                  currentTheme === themeKey 
                    ? "border-white scale-110 shadow-lg" 
                    : "border-white/30 hover:border-white/60"
                }`}
                style={{ 
                  background: colorThemes[themeKey].gradient 
                }}
                title={`Switch to ${themeKey} theme`}
              >
                {currentTheme === themeKey && (
                  <motion.div
                    className="absolute -inset-1 rounded-full border-2 border-white/50"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-12 backdrop-blur-md border border-white/20 group cursor-pointer hover:scale-105 transition-transform"
            style={{
              background: `linear-gradient(135deg, ${theme.primary}15, ${theme.secondary}15)`,
              boxShadow: `0 10px 40px ${theme.glow}, inset 0 1px 0 rgba(255,255,255,0.1)`
            }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity" />
              <FaGem className="text-xl relative" style={{ color: theme.accent }} />
            </div>
            <span className="font-semibold text-white text-sm md:text-base tracking-wide">
              ELITE REAL ESTATE PARTNERS • SINCE 2010
            </span>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity" />
              <FaCrown className="text-xl relative" style={{ color: theme.accent }} />
            </div>
          </motion.div>

          {/* Advanced Typing Effect */}
          <div className="text-center mb-12">
            <AdvancedTyping theme={theme} />
          </div>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="relative">
              {/* Animated underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: theme.gradient }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
              
              <p className="text-lg md:text-2xl lg:text-3xl text-gray-200 text-center leading-relaxed">
                From <span className="font-bold" style={{ color: theme.accent }}>Search</span> to{" "}
                <span className="font-bold" style={{ color: theme.primary }}>Success</span> — 
                Your Complete <span className="relative inline-block">
                  <span className="relative z-10 font-bold" style={{ color: theme.secondary }}>
                    Real Estate Solution
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-2 w-full opacity-30 rounded-full"
                    style={{ background: theme.secondary }}
                    animate={{ 
                      width: ["0%", "100%", "0%"],
                      left: ["0%", "0%", "100%"]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </p>
            </div>
          </motion.div>

          {/* Interactive CTA Buttons Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {ctaButtons.map((button, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: button.delay }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <Link href={button.href}>
                  <div
                    className="relative p-6 rounded-2xl backdrop-blur-md border border-white/10 overflow-hidden h-full"
                    style={{
                      background: `linear-gradient(135deg, ${theme.card}, transparent)`,
                      boxShadow: `0 20px 40px ${theme.glow}20`
                    }}
                  >
                    {/* Hover Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}10, ${theme.secondary}10)`
                      }}
                    />

                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        border: `2px solid ${theme.primary}`,
                        opacity: 0
                      }}
                      animate={{ opacity: [0, 0.3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />

                    {/* Button Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                          style={{
                            background: button.gradient,
                            color: "white"
                          }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {button.icon}
                        </motion.div>
                        <div className="flex-1 text-left">
                          <h3 className="font-bold text-lg text-white mb-1">
                            {button.title}
                          </h3>
                          <p className="text-sm text-gray-300 mb-2">
                            {button.description}
                          </p>
                          <div className="text-xs font-medium px-2 py-1 rounded-full inline-block"
                               style={{ background: `${theme.accent}20`, color: theme.accent }}>
                            {button.stats}
                          </div>
                        </div>
                      </div>
                      
                      {/* Animated Arrow */}
                      <div className="mt-auto flex justify-end">
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                          className="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors"
                          style={{ background: `${theme.accent}20` }}
                        >
                          <FaChevronDown className="rotate-[-45deg]" style={{ color: theme.accent }} />
                        </motion.div>
                      </div>
                    </div>

                    {/* Floating particles on hover */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full"
                          style={{ background: theme.accent }}
                          initial={{ y: 0, opacity: 0 }}
                          animate={{
                            y: -20,
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Trusted by Thousands
              </h3>
              <p className="text-gray-400">Real results from real clients</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative p-5 rounded-2xl text-center group"
                  style={{
                    background: `linear-gradient(135deg, ${theme.card}, transparent)`,
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${theme.primary}20`
                  }}
                >
                  {/* Background icon */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-5"
                    style={{ color: stat.color }}
                  >
                    {stat.icon}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${stat.color}, ${theme.secondary})` }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 1.6 + index * 0.2 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mb-20"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Why Choose A2Z?
              </h3>
              <p className="text-gray-400">Experience the difference</p>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                {[...features, ...features].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 mx-2 p-5 rounded-2xl backdrop-blur-sm border border-white/10"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary}08, ${theme.secondary}08)`,
                      minWidth: "200px"
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      background: `linear-gradient(135deg, ${theme.primary}15, ${theme.secondary}15)`
                    }}
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent" />
            </div>
          </motion.div>

          {/* Interactive Flip Book in Corner */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
            className="absolute bottom-8 right-8 z-30 hidden lg:block"
          >
            <InteractiveFlipBook theme={theme} />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center group cursor-pointer">
              <motion.span
                className="text-sm opacity-70 mb-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Discover More
              </motion.span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-12 rounded-full border-2 flex items-center justify-center group-hover:border-white/60 transition-colors relative overflow-hidden"
                style={{ borderColor: `${theme.primary}50` }}
              >
                {/* Animated fill */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0"
                  style={{ background: theme.gradient }}
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <div className="relative w-1 h-3 rounded-full bg-white z-10" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Mouse Trail */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <motion.div
          className="absolute w-4 h-4 rounded-full"
          style={{
            background: `radial-gradient(circle, ${theme.accent}, transparent 70%)`,
            filter: 'blur(2px)'
          }}
          animate={{
            x: mousePosition.x * window.innerWidth - 8,
            y: mousePosition.y * window.innerHeight - 8,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      </div>
    </section>
  );
};

export default UltimateHero;