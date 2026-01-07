// app/pillars/homes/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FaHome, 
  FaArrowRight,
  FaChartLine,
  FaMapMarkerAlt,
  FaBuilding,
  FaStar,
  FaCheckCircle,
  FaDollarSign,
  FaCalendarCheck,
  FaHandHoldingUsd,
  FaCity,
  FaChartPie,
  FaTrophy,
  FaAward,
  FaLightbulb,
  FaRocket,
  FaChartBar
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // Premium Stats with Icons
  const premiumStats = [
    { 
      number: "500+", 
      label: "Premium Properties", 
      icon: <FaHome />,
      trend: "↑ 12% YoY",
      description: "Luxury homes successfully transacted"
    },
    { 
      number: "98.7%", 
      label: "Client Satisfaction", 
      icon: <FaStar />,
      trend: "Industry Leading",
      description: "Highest client retention rate"
    },
    { 
      number: "$258M", 
      label: "Portfolio Volume", 
      icon: <FaDollarSign />,
      trend: "↑ $42M Growth",
      description: "Total transaction value managed"
    },
    { 
      number: "4.2 Days", 
      label: "Avg Closing Time", 
      icon: <FaCalendarCheck />,
      trend: "Faster than Market",
      description: "Average days to close deals"
    }
  ];

  // Visual Feature Cards
  const visualFeatures = [
    {
      icon: <FaChartPie className="text-4xl" />,
      title: "Market Intelligence",
      description: "Real-time analytics and predictive market insights",
      gradient: "from-blue-500 to-cyan-500",
      data: [
        { label: "Price Accuracy", value: 97 },
        { label: "Market Trend", value: 85 },
        { label: "ROI Prediction", value: 92 }
      ]
    },
    {
      icon: <FaCity className="text-4xl" />,
      title: "Investment Growth",
      description: "Strategic portfolio development and value maximization",
      gradient: "from-green-500 to-emerald-500",
      data: [
        { label: "Annual Appreciation", value: 15 },
        { label: "Rental Yield", value: 8.5 },
        { label: "Capital Growth", value: 22 }
      ]
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl" />,
      title: "Neighborhood Analysis",
      description: "Comprehensive area intelligence and future projections",
      gradient: "from-purple-500 to-pink-500",
      data: [
        { label: "Growth Potential", value: 88 },
        { label: "Amenity Score", value: 94 },
        { label: "Future Value", value: 76 }
      ]
    }
  ];

  // Process Timeline with Visual Indicators
  const processTimeline = [
    {
      phase: "Phase 1",
      title: "Discovery & Strategy",
      duration: "1-3 Days",
      tasks: ["Needs Assessment", "Market Analysis", "Budget Planning", "Strategy Development"],
      visual: "w-1/4",
      icon: <FaLightbulb />
    },
    {
      phase: "Phase 2",
      title: "Property Search",
      duration: "2-4 Weeks",
      tasks: ["Curated Listings", "Virtual Tours", "Shortlisting", "Comparable Analysis"],
      visual: "w-1/2",
      icon: <FaChartBar />
    },
    {
      phase: "Phase 3",
      title: "Transaction",
      duration: "3-5 Weeks",
      tasks: ["Offer Strategy", "Expert Negotiation", "Due Diligence", "Financing"],
      visual: "w-3/4",
      icon: <FaHandHoldingUsd />
    },
    {
      phase: "Phase 4",
      title: "Closing & Beyond",
      duration: "1-2 Weeks",
      tasks: ["Closing Coordination", "Move-In Support", "Post-Sale Service", "Portfolio Review"],
      visual: "w-full",
      icon: <FaTrophy />
    }
  ];

  // Comparison Table
  const comparisonData = [
    { feature: "Market Analysis", a2z: "✓ Advanced AI", market: "Basic", icon: <FaChartLine /> },
    { feature: "Closing Time", a2z: "4.2 Days", market: "45+ Days", icon: <FaCalendarCheck /> },
    { feature: "Price Accuracy", a2z: "97%", market: "82%", icon: <FaDollarSign /> },
    { feature: "Client Support", a2z: "24/7 Premium", market: "Business Hours", icon: <FaAward /> },
    { feature: "Tech Integration", a2z: "Full Suite", market: "Limited", icon: <FaRocket /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      
      {/* Hero Section - Premium Visual Design */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-600/10 to-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="lg:pr-8"
              >
                {/* Premium Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center">
                        <FaHome className="text-white text-2xl" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center">
                        <FaStar className="text-white text-xs" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-600 tracking-wider uppercase">Premium Division</div>
                      <div className="text-2xl font-bold text-gray-900">A2Z HOMES</div>
                    </div>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                    <span className="block">REDEFINING</span>
                    <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                      RESIDENTIAL
                    </span>
                    <span className="block">EXCELLENCE</span>
                  </h1>

                  <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                    Where data-driven insights meet unparalleled service in Central NJ's premium residential market.
                    Experience the future of luxury real estate with our innovative approach.
                  </p>
                </div>

                {/* Premium Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {premiumStats.slice(0, 2).map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                      className="group"
                    >
                      <div className="bg-white/90 backdrop-blur-lg border border-gray-200/70 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300/50 transition-all duration-500">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                              {stat.number}
                            </div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Primary CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
                  >
                    <span>EXPLORE PREMIUM SERVICES</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Side - HD Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  {/* Main HD Image Container */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    {/* Modern House Illustration */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-80 h-80">
                        {/* Modern House Design */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          {/* House Base */}
                          <div className="w-64 h-40 bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-xl" />
                          
                          {/* Roof */}
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-72 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-lg" />
                          
                          {/* Windows */}
                          <div className="absolute top-8 left-8 w-16 h-20 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-lg" />
                          <div className="absolute top-8 right-8 w-16 h-20 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-lg" />
                          
                          {/* Door */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-24 bg-gradient-to-b from-blue-600 to-blue-700 rounded-t-lg" />
                          
                          {/* Lawn */}
                          <div className="absolute -bottom-8 left-0 right-0 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <FaHome className="text-white text-2xl" />
                    </div>
                    <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <FaChartLine className="text-white text-2xl" />
                    </div>
                    <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <FaDollarSign className="text-white" />
                    </div>
                    <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <FaStar className="text-white" />
                    </div>
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-cyan-500/20" />
                  
                  {/* Animated Glow Effect */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-600/30 blur-3xl animate-pulse" />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200/70 rounded-2xl p-6 shadow-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600 font-medium">Luxury Homes</div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 shadow-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">98.7%</div>
                    <div className="text-sm text-white/90 font-medium">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
              {premiumStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 1.2, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-white/90 backdrop-blur-lg border border-gray-200/70 rounded-3xl p-8 hover:shadow-2xl hover:border-blue-300/50 transition-all duration-500">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    
                    <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {stat.number}
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-gray-700 font-semibold">{stat.label}</div>
                      <div className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {stat.trend}
                      </div>
                    </div>
                    
                    <div className="text-gray-500 text-sm">{stat.description}</div>
                    
                    <div className="mt-6">
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ delay: index * 0.2 + 1.5, duration: 1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Visual Analytics Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-3 rounded-full mb-6">
              <FaChartLine className="text-blue-600" />
              <span className="text-blue-600 font-semibold">DATA-DRIVEN EXCELLENCE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Advanced <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Analytics</span> Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging cutting-edge technology for superior market intelligence and investment insights
            </p>
          </motion.div>

          {/* Enhanced Visual Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {visualFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group perspective-1000"
              >
                <div className="bg-white border border-gray-200/70 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 h-full transform-gpu group-hover:shadow-blue-500/20">
                  {/* Icon with 3D Effect */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-y-12 transition-transform duration-700 transform-gpu`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-8">{feature.description}</p>
                  
                  {/* Enhanced Data Visualization */}
                  <div className="space-y-6">
                    {feature.data.map((item, idx) => (
                      <div key={idx} className="group/item">
                        <div className="flex justify-between text-sm text-gray-700 mb-2">
                          <span className="font-medium">{item.label}</span>
                          <span className="font-bold text-blue-600">{item.value}%</span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden relative">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 1.2, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full group-hover/item:scale-y-125 transition-transform duration-300 origin-left`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Badge */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="inline-flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                      <FaAward />
                      <span>Premium Feature</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Timeline Visualization */}
      <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Streamlined <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proprietary 4-phase methodology ensures efficiency and excellence at every stage
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Enhanced Timeline Progress Bar */}
            <div className="relative mb-16">
              <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-200 to-gray-200 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full relative"
                >
                  {/* Animated dots on progress bar */}
                  {[0, 25, 50, 75, 100].map((pos, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.5, duration: 0.5 }}
                      className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full"
                      style={{ left: `${pos}%` }}
                    />
                  ))}
                </motion.div>
              </div>
              
              {/* Phase Markers with Icons */}
              <div className="flex justify-between mt-8">
                {processTimeline.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center relative"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-3 shadow-lg">
                      {phase.icon}
                    </div>
                    <div className="text-sm font-semibold text-gray-700">{phase.phase}</div>
                    <div className="text-xs text-gray-500 mt-1">{phase.duration}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processTimeline.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white border border-gray-200/70 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-300/50 transition-all duration-500 h-full relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full -translate-y-16 translate-x-16" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-3xl font-bold text-blue-600">{phase.phase}</div>
                        <div className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {phase.duration}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-6">{phase.title}</h3>
                      
                      <div className="space-y-3">
                        {phase.tasks.map((task, idx) => (
                          <div key={idx} className="flex items-center gap-3 group/item">
                            <FaCheckCircle className="text-green-500 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{task}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Progress Indicator */}
                      <div className="mt-8">
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full ${phase.visual} transition-all duration-700`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Comparison Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              The <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">A2Z Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our premium approach to residential real estate
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Enhanced Comparison Table */}
            <div className="bg-white border border-gray-200/70 rounded-3xl overflow-hidden shadow-2xl mb-16">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8">
                <div className="text-xl font-bold flex items-center gap-3">
                  <FaAward />
                  Feature
                </div>
                <div className="text-xl font-bold text-center flex items-center justify-center gap-3">
                  <FaBuilding />
                  A2Z Homes
                </div>
                <div className="text-xl font-bold text-center">Market Average</div>
              </div>
              
              {/* Table Body */}
              <div className="divide-y divide-gray-200/50">
                {comparisonData.map((row, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-3 p-8 hover:bg-gray-50/80 transition-colors group/row"
                  >
                    <div className="font-semibold text-gray-900 flex items-center gap-3">
                      <div className="text-blue-500">
                        {row.icon}
                      </div>
                      {row.feature}
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-3 rounded-full text-blue-700 font-bold group-hover/row:scale-105 transition-transform duration-300">
                        {row.a2z}
                      </span>
                    </div>
                    <div className="text-center text-gray-500 line-through group-hover/row:text-red-500 transition-colors">
                      {row.market}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Final Premium CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 animate-pulse" />
              
              <div className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200/70 rounded-3xl p-12 md:p-16 shadow-2xl">
                <div className="text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-6 py-3 rounded-full mb-8">
                    <FaTrophy className="text-blue-600" />
                    <span className="text-blue-600 font-semibold text-lg">PREMIUM EXPERIENCE</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                    Ready to Experience <br />
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      Premium Service?
                    </span>
                  </h3>
                  
                  <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Join hundreds of satisfied clients who have elevated their residential experience with A2Z Homes.
                    Let's create your success story together.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                      href="/contact"
                      className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-14 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <FaHandHoldingUsd className="text-xl" />
                        REQUEST PREMIUM CONSULTATION
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                    
                    <div className="text-gray-600">
                      <div className="flex items-center gap-2 text-lg">
                        <FaAward className="text-green-500 text-xl" />
                        <span className="font-semibold">Premium Support Included</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}