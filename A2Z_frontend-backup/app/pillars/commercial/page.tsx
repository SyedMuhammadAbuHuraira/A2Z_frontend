// app/pillars/commercial/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaBuilding, 
  FaArrowRight,
  FaChartLine,
  FaMapMarkerAlt,
  FaUsers,
  FaDollarSign,
  FaCheckCircle,
  FaCity,
 
  FaIndustry,
  FaStore,
  FaHospital,
  FaWarehouse,
  FaClipboardCheck,
  FaHandshake,

  FaTrophy,
  FaBriefcase,
  FaChessBoard,
  FaCalculator,
  FaBalanceScale
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function CommercialPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  // Commercial Stats - Real Market Data
  const commercialStats = [
    { 
      number: "$850M+", 
      label: "Transaction Volume", 
      icon: <FaDollarSign />,
      description: "Commercial deals closed",
      color: "from-purple-600 to-indigo-600"
    },
    { 
      number: "200+", 
      label: "Business Clients", 
      icon: <FaUsers />,
      description: "Trusted partnerships",
      color: "from-blue-600 to-cyan-600"
    },
    { 
      number: "75+", 
      label: "Lease Negotiations", 
      icon: <FaHandshake />,
      description: "Successful agreements",
      color: "from-emerald-600 to-green-600"
    },
    { 
      number: "98%", 
      label: "Client Retention", 
      icon: <FaBalanceScale />,
      description: "Repeat business rate",
      color: "from-amber-600 to-orange-600"
    }
  ];

  // Commercial Property Types
  const propertyTypes = [
    {
      icon: <FaChessBoard className="text-4xl" />,
      title: "Office Buildings",
      metrics: ["Class A, B, C Spaces", "Corporate Headquarters", "Co-working Solutions", "Tech Office Parks"],
      value: "25-30% ROI potential",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      icon: <FaStore className="text-4xl" />,
      title: "Retail Spaces",
      metrics: ["Shopping Centers", "High Street Retail", "Anchor Tenants", "Pop-up Locations"],
      value: "8-12% Cap Rates",
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      borderColor: "border-purple-200"
    },
    {
      icon: <FaIndustry className="text-4xl" />,
      title: "Industrial",
      metrics: ["Warehouses", "Manufacturing", "Distribution Centers", "Logistics Parks"],
      value: "6-9% Annual Returns",
      color: "bg-gradient-to-br from-gray-50 to-gray-100",
      borderColor: "border-gray-200"
    },
    {
      icon: <FaHospital className="text-4xl" />,
      title: "Specialty",
      metrics: ["Medical Offices", "Hotels", "Mixed-Use", "Self-Storage"],
      value: "Specialized expertise",
      color: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200"
    }
  ];

  // Services Grid
  const commercialServices = [
    {
      phase: "01",
      title: "Site Selection",
      subtitle: "Strategic Location Analysis",
      description: "Data-driven market analysis for optimal business locations",
      icon: <FaMapMarkerAlt />,
      points: ["Demographic studies", "Traffic analysis", "Competition mapping", "Growth projections"]
    },
    {
      phase: "02",
      title: "Lease Negotiation",
      subtitle: "Optimal Terms & Conditions",
      description: "Expert negotiation for favorable lease agreements",
      icon: <FaHandshake />,
      points: ["Rent structuring", "TI allowances", "Options analysis", "Exit strategies"]
    },
    {
      phase: "03",
      title: "Investment Analysis",
      subtitle: "ROI & Cash Flow Modeling",
      description: "Comprehensive financial analysis for investment decisions",
      icon: <FaCalculator />,
      points: ["Cap rate analysis", "Cash flow projections", "Risk assessment", "Tax implications"]
    },
    {
      phase: "04",
      title: "Portfolio Strategy",
      subtitle: "Long-Term Asset Management",
      description: "Strategic planning for commercial property portfolios",
      icon: <FaChessBoard />,
      points: ["Asset allocation", "Value enhancement", "Disposition planning", "Risk mitigation"]
    }
  ];

  // Market Insights
  const marketInsights = [
    { metric: "4.8%", label: "Average Cap Rate", trend: "Stable", icon: <FaChartLine /> },
    { metric: "$32.50", label: "Avg Office Rent PSF", trend: "↑ 3.2%", icon: <FaClipboardCheck /> },
    { metric: "94%", label: "Occupancy Rate", trend: "High", icon: <FaClipboardCheck /> },
    { metric: "18 Months", label: "Avg Hold Period", trend: "Optimal", icon: <FaBalanceScale /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/20 to-white">
      
      {/* Hero Section - Professional Commercial Design */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-900/5 to-gray-800/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-gray-800/5 to-gray-900/5 rounded-full blur-3xl" />
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                               linear-gradient(to bottom, #000 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
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
                {/* Professional Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center">
                      <FaBuilding className="text-white text-2xl" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Commercial Division</div>
                      <div className="text-2xl font-bold text-gray-900">A2Z COMMERCIAL</div>
                    </div>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                    <span className="block">STRATEGIC</span>
                    <span className="text-gray-800">COMMERCIAL</span>
                    <span className="block">REAL ESTATE</span>
                  </h1>

                  <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                    Expert guidance for businesses seeking optimal commercial properties in Central New Jersey.
                    Data-driven insights combined with hands-on market expertise.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {commercialStats.slice(0, 2).map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                      className="group"
                    >
                      <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-500">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                            {stat.icon}
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">
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
                    className="group inline-flex items-center gap-4 bg-gray-900 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 hover:shadow-2xl transition-all duration-500"
                  >
                    <span>SCHEDULE COMMERCIAL CONSULT</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Side - Commercial Building Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="relative h-[600px] rounded-3xl overflow-hidden">
                  {/* Building Structure */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200">
                    {/* Modern Commercial Building */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                      {/* Building Base */}
                      <div className="w-64 h-80 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-lg relative">
                        {/* Windows Grid */}
                        <div className="absolute inset-4 grid grid-cols-4 gap-4">
                          {[...Array(20)].map((_, i) => (
                            <div key={i} className="bg-gradient-to-b from-blue-100 to-blue-200 rounded-sm" />
                          ))}
                        </div>
                        
                        {/* Entry */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gradient-to-b from-gray-500 to-gray-600 rounded-t-lg" />
                      </div>
                      
                      {/* Tower */}
                      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gradient-to-b from-gray-400 to-gray-500 rounded-t-lg">
                        {/* Tower Windows */}
                        <div className="absolute inset-3 grid grid-cols-3 gap-3">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-gradient-to-b from-blue-50 to-blue-100 rounded" />
                          ))}
                        </div>
                      </div>
                      
                      {/* Surroundings */}
                      <div className="absolute -bottom-4 left-0 right-0 h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full" />
                    </div>
                    
                    {/* Business Icons Floating */}
                    <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white border border-gray-300 rounded-xl flex items-center justify-center shadow-lg">
                      <FaBriefcase className="text-gray-700" />
                    </div>
                    <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-white border border-gray-300 rounded-xl flex items-center justify-center shadow-lg">
                      <FaChartLine className="text-gray-700" />
                    </div>
                    <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white border border-gray-300 rounded-xl flex items-center justify-center shadow-lg">
                      <FaHandshake className="text-gray-700" />
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white border border-gray-300 rounded-xl flex items-center justify-center shadow-lg">
                      <FaCalculator className="text-gray-700" />
                    </div>
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 via-transparent to-gray-900/5" />
                  
                  {/* Grid Overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full" style={{
                      backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                                       linear-gradient(to bottom, #000 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                </div>
                
                {/* Floating Market Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">$850M+</div>
                    <div className="text-sm text-gray-600 font-medium">Deal Volume</div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-gray-900 text-white rounded-2xl p-6 shadow-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">200+</div>
                    <div className="text-sm text-white/90 font-medium">Business Clients</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
              {commercialStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 1.2, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500">
                    <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-gray-700 font-semibold">{stat.label}</div>
                      <div className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        ✓ Verified
                      </div>
                    </div>
                    
                    <div className="text-gray-500 text-sm">{stat.description}</div>
                    
                    <div className="mt-6">
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ delay: index * 0.2 + 1.5, duration: 1 }}
                          className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
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

      {/* Property Types Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 bg-gray-100 px-6 py-3 rounded-full mb-6">
              <FaCity className="text-gray-700" />
              <span className="text-gray-700 font-semibold">COMMERCIAL PROPERTIES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              <span className="text-gray-800">Property</span> Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise across all major commercial real estate asset classes
            </p>
          </motion.div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {propertyTypes.map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className={`bg-white border ${property.borderColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 h-full`}>
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`w-20 h-20 ${property.color} rounded-2xl flex items-center justify-center text-gray-800 group-hover:scale-110 transition-transform duration-500`}>
                      {property.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>
                      <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                        <FaChartLine />
                        <span>{property.value}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <FaCheckCircle className="text-gray-600" />
                      Key Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {property.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gray-600 rounded-full" />
                          <span className="text-gray-700">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-gray-700 font-medium hover:text-gray-900 transition-colors group/link"
                    >
                      Explore {property.title.toLowerCase()} opportunities
                      <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Process */}
      <section className="py-24 bg-gradient-to-b from-gray-50/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              <span className="text-gray-800">Strategic</span> Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Methodical process for successful commercial real estate transactions
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Process Timeline */}
            <div className="relative mb-16">
              <div className="h-1 bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-full relative"
                >
                  {/* Process Markers */}
                  {[0, 25, 50, 75, 100].map((pos, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.5, duration: 0.5 }}
                      className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border-2 border-gray-800 rounded-full"
                      style={{ left: `${pos}%` }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commercialServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                    {/* Phase Number */}
                    <div className="text-5xl font-bold text-gray-900/10 mb-4">{service.phase}</div>
                    
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                      {service.icon}
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <div className="text-sm font-semibold text-gray-600 mb-4">{service.subtitle}</div>
                      <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
                      
                      <div className="space-y-3">
                        {service.points.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                            <span className="text-gray-700 text-sm">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Progress Line */}
                    <div className="mt-8">
                      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-800 rounded-full w-3/4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Market <span className="text-gray-800">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven intelligence for informed commercial decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-700 mx-auto mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                    {insight.icon}
                  </div>
                  
                  <div className="text-4xl font-bold text-gray-900 mb-3">
                    {insight.metric}
                  </div>
                  
                  <div className="text-gray-600 font-medium mb-2">{insight.label}</div>
                  
                  <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                    {insight.trend}
                  </div>
                  
                  {/* Mini Chart */}
                  <div className="mt-6">
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-between px-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-0.5 h-full bg-gray-300" />
                        ))}
                      </div>
                      <div className="h-full bg-gray-800 rounded-full w-3/4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Professional */}
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
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/5 via-gray-800/5 to-gray-900/5" />
              
              <div className="relative bg-white border border-gray-200 rounded-3xl p-12 md:p-16 shadow-2xl">
                <div className="text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-3 bg-gray-100 px-6 py-3 rounded-full mb-8">
                    <FaTrophy className="text-gray-700" />
                    <span className="text-gray-700 font-semibold text-lg">COMMERCIAL EXCELLENCE</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                    Ready to Elevate Your<br />
                    <span className="text-gray-800">
                      Commercial Strategy?
                    </span>
                  </h3>
                  
                  <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Partner with A2Z Commercial for expert guidance on your business property needs.
                    Let's discuss your commercial real estate objectives.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                      href="/contact"
                      className="group relative overflow-hidden bg-gray-900 text-white px-14 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 hover:shadow-2xl transition-all duration-500"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <FaBriefcase className="text-xl" />
                        SCHEDULE COMMERCIAL CONSULT
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                    </Link>
                    
                    <div className="text-gray-600">
                      <div className="flex items-center gap-2 text-lg">
                        <FaBuilding className="text-gray-700 text-xl" />
                        <span className="font-semibold">Confidential & Strategic</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="text-gray-600 mb-4">For urgent commercial inquiries:</div>
                    <Link 
                      href="tel:+1234567890"
                      className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
                    >
                      (123) 456-7890
                    </Link>
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