// app/pillars/network/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaUsers, 
  FaArrowRight,
  FaHandshake,
  FaTools,
  FaBalanceScale,
  FaUserTie,
  FaBuilding,
  FaChartLine,
  FaCheckCircle,
  FaStar,
  FaAward,
  FaTrophy,
  FaNetworkWired,
  FaHandsHelping,
  FaRocket,
  FaCertificate,
  FaGlobe,
  FaLink
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function NetworkPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // Premium Stats
  const premiumStats = [
    { 
      number: "150+", 
      label: "Vetted Partners", 
      icon: <FaUsers />,
      trend: "↑ 25% Growth",
      description: "Carefully selected industry experts"
    },
    { 
      number: "98.3%", 
      label: "Client Rating", 
      icon: <FaStar />,
      trend: "Industry Leader",
      description: "Average partner satisfaction score"
    },
    { 
      number: "$500M+", 
      label: "Deal Volume", 
      icon: <FaChartLine />,
      trend: "↑ $120M YoY",
      description: "Total transactions through network"
    },
    { 
      number: "12+", 
      label: "Service Categories", 
      icon: <FaBuilding />,
      trend: "Comprehensive",
      description: "Complete real estate ecosystem"
    }
  ];

  // Network Categories with Detailed Info
  const networkCategories = [
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Financing Experts",
      description: "Top-tier lenders and financial advisors",
      gradient: "from-orange-500 to-amber-500",
      partners: ["Mortgage Specialists", "Commercial Lenders", "Private Financing", "Loan Officers"],
      expertise: ["Pre-approval", "Rate Negotiation", "Portfolio Financing", "Investment Loans"],
      value: "Save 0.5-1.5% on rates"
    },
    {
      icon: <FaBalanceScale className="text-4xl" />,
      title: "Legal Professionals",
      description: "Experienced real estate attorneys",
      gradient: "from-blue-500 to-cyan-500",
      partners: ["Closing Attorneys", "Contract Specialists", "Title Experts", "Legal Advisors"],
      expertise: ["Contract Review", "Title Search", "Dispute Resolution", "Legal Compliance"],
      value: "Reduce closing time by 40%"
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: "Construction & Renovation",
      description: "Skilled contractors and builders",
      gradient: "from-green-500 to-emerald-500",
      partners: ["General Contractors", "Architects", "Interior Designers", "Home Inspectors"],
      expertise: ["Project Management", "Quality Control", "Budget Optimization", "Timeline Efficiency"],
      value: "20% faster project completion"
    },
    {
      icon: <FaUserTie className="text-4xl" />,
      title: "Professional Services",
      description: "Complete transaction support team",
      gradient: "from-purple-500 to-pink-500",
      partners: ["Home Stagers", "Photographers", "Insurance Agents", "Tax Consultants"],
      expertise: ["Property Presentation", "Marketing Strategy", "Risk Management", "Tax Optimization"],
      value: "Increase property value by 10-15%"
    }
  ];

  // Success Metrics
  const successMetrics = [
    { metric: "500+", label: "Projects Completed", icon: <FaTrophy /> },
    { metric: "98.3%", label: "Client Satisfaction", icon: <FaAward /> },
    { metric: "45 Days", label: "Avg Time Savings", icon: <FaRocket /> },
    { metric: "20+", label: "Years Experience", icon: <FaCertificate /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/20 to-white">
      
      {/* Hero Section - Premium Network Design */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Network Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-orange-600/10 to-red-500/10 rounded-full blur-3xl" />
          {/* Network Lines */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                style={{
                  top: `${(i + 1) * 10}%`,
                  left: "0",
                  right: "0",
                  transform: `translateX(${i % 2 === 0 ? '0' : '50px'})`
                }}
              />
            ))}
          </div>
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
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-500 rounded-2xl flex items-center justify-center">
                        <FaNetworkWired className="text-white text-2xl" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                        <FaBalanceScale className="text-white text-xs" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-orange-600 tracking-wider uppercase">Premium Network</div>
                      <div className="text-2xl font-bold text-gray-900">A2Z PARTNER NETWORK</div>
                    </div>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                    <span className="block">ELITE REAL ESTATE</span>
                    <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-700 bg-clip-text text-transparent">
                      CONNECTIONS
                    </span>
                  </h1>

                  <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                    Access Central NJ's most trusted network of real estate professionals.
                    Our vetted partners deliver exceptional service at every stage of your property journey.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {premiumStats.slice(0, 2).map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                      className="group"
                    >
                      <div className="bg-white/90 backdrop-blur-lg border border-gray-200/70 rounded-2xl p-6 hover:shadow-xl hover:border-orange-300/50 transition-all duration-500">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
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
                    className="group inline-flex items-center gap-4 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
                  >
                    <span>ACCESS NETWORK PARTNERS</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Side - Network Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  {/* Network Visualization Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10">
                    {/* Central Hub */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-40 h-40 bg-gradient-to-br from-orange-600 to-amber-500 rounded-full flex items-center justify-center shadow-2xl">
                        <FaNetworkWired className="text-white text-4xl" />
                      </div>
                      
                      {/* Network Connections */}
                      {[
                        { angle: 0, icon: <FaHandshake />, label: "Lenders" },
                        { angle: 90, icon: <FaBalanceScale />, label: "Legal" },
                        { angle: 180, icon: <FaTools />, label: "Contractors" },
                        { angle: 270, icon: <FaUserTie />, label: "Services" }
                      ].map((node, idx) => (
                        <div
                          key={idx}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          style={{
                            transform: `translate(-50%, -50%) rotate(${node.angle}deg) translate(180px) rotate(-${node.angle}deg)`
                          }}
                        >
                          <div className="w-20 h-20 bg-white border-2 border-orange-300 rounded-2xl flex items-center justify-center shadow-lg">
                            <div className="text-orange-600 text-2xl">
                              {node.icon}
                            </div>
                          </div>
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-700 whitespace-nowrap">
                            {node.label}
                          </div>
                        </div>
                      ))}
                      
                      {/* Connecting Lines */}
                      <div className="absolute inset-0">
                        {[0, 90, 180, 270].map((angle, idx) => (
                          <div
                            key={idx}
                            className="absolute top-1/2 left-1/2 w-0.5 h-32 bg-gradient-to-b from-orange-400/50 to-amber-400/50 origin-top"
                            style={{ transform: `rotate(${angle}deg) translateY(-50%)` }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Floating Partners */}
                    <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <FaBuilding className="text-orange-600" />
                    </div>
                    <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <FaChartLine className="text-orange-600" />
                    </div>
                    <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <FaNetworkWired className="text-orange-600" />
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <FaStar className="text-orange-600" />
                    </div>
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 via-transparent to-amber-500/10" />
                  
                  {/* Animated Connection Lines */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: idx * 0.2 }}
                        className="absolute inset-0"
                      >
                        <svg className="w-full h-full">
                          <line
                            x1="20%"
                            y1="20%"
                            x2="80%"
                            y2="80%"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            strokeDasharray="10,5"
                            className="animate-pulse"
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
                              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200/70 rounded-2xl p-6 shadow-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">150+</div>
                    <div className="text-sm text-gray-600 font-medium">Vetted Partners</div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-6 shadow-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">98.3%</div>
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
                  <div className="bg-white/90 backdrop-blur-lg border border-gray-200/70 rounded-3xl p-8 hover:shadow-2xl hover:border-orange-300/50 transition-all duration-500">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    
                    <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
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
                          className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
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

      {/* Network Categories Section */}
      <section className="py-24 bg-gradient-to-b from-white to-amber-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-3 rounded-full mb-6">
              <FaGlobe className="text-orange-600" />
              <span className="text-orange-600 font-semibold">COMPREHENSIVE NETWORK</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Expert <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Partnerships</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with top professionals across every aspect of real estate
            </p>
          </motion.div>

          {/* Network Category Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {networkCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="bg-white border border-gray-200/70 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Category Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-500`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  {/* Value Proposition */}
                  <div className="mb-8 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                    <div className="flex items-center gap-2 text-orange-700 font-semibold">
                      <FaTrophy className="text-orange-600" />
                      <span>{category.value}</span>
                    </div>
                  </div>

                  {/* Partners & Expertise */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <FaUsers className="text-orange-500" />
                        Partner Types
                      </h4>
                      <div className="space-y-3">
                        {category.partners.map((partner, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
                            <span className="text-gray-700">{partner}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <FaCheckCircle className="text-orange-500" />
                        Core Expertise
                      </h4>
                      <div className="space-y-3">
                        {category.expertise.map((expertise, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
                            <span className="text-gray-700">{expertise}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors group/link"
                    >
                      Connect with {category.title.toLowerCase()}
                      <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Network <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results delivered through strategic partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white border border-gray-200/70 rounded-3xl p-8 text-center hover:shadow-2xl hover:border-orange-300/50 transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {metric.icon}
                  </div>
                  
                  <div className="text-4xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {metric.metric}
                  </div>
                  
                  <div className="text-gray-600 font-medium">{metric.label}</div>
                  
                  {/* Progress Ring */}
                  <div className="mt-6 relative w-20 h-20 mx-auto">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#f3f4f6"
                        strokeWidth="8"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="url(#metric-gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 251.2" }}
                        whileInView={{ strokeDasharray: "251.2 251.2" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                        transform="rotate(-90 50 50)"
                      />
                      <defs>
                        <linearGradient id="metric-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-3xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-amber-500/20 to-orange-600/20 animate-pulse" />
              
              <div className="relative bg-gradient-to-br from-white to-amber-50 border border-gray-200/70 rounded-3xl p-12 md:p-16 shadow-2xl">
                <div className="text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 px-6 py-3 rounded-full mb-8">
                    <FaHandsHelping className="text-orange-600 text-xl" />
                    <span className="text-orange-600 font-semibold text-lg">STRATEGIC PARTNERSHIPS</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                    Ready to Access <br />
                    <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                      Elite Connections?
                    </span>
                  </h3>
                  
                  <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Join hundreds of clients who have accelerated their real estate success through our premium network.
                    Experience the power of strategic connections.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                      href="/contact"
                      className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-500 text-white px-14 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <FaLink className="text-xl" />
                        CONNECT WITH NETWORK
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                    
                    <div className="text-gray-600">
                      <div className="flex items-center gap-2 text-lg">
                        <FaGlobe className="text-green-500 text-xl" />
                        <span className="font-semibold">Vetted & Verified Partners</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Partner Logos Placeholder */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap justify-center items-center gap-8">
                      {[...Array(5)].map((_, idx) => (
                        <div key={idx} className="w-24 h-12 bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg flex items-center justify-center">
                          <div className="text-orange-600 font-bold text-sm">PARTNER</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}