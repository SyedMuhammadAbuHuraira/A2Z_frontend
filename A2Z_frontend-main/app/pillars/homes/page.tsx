// app/pillars/homes/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaHome, 
  FaArrowRight,
  FaChartLine,
  FaHandshake,
  FaMapMarkerAlt,

  FaBuilding,
  FaUsers,
  FaStar,
  FaCheckCircle
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: "500+", label: "Homes Sold", delay: 100 },
    { number: "98%", label: "Client Satisfaction", delay: 200 },
    { number: "$250M+", label: "Total Volume", delay: 300 },
    { number: "15+", label: "Years Experience", delay: 400 }
  ];

  const coreServices = [
    {
      title: "Strategic Home Buying",
      description: "Complete guidance from search to closing",
      features: ["Custom search strategy", "Smart offer structuring", "Expert negotiation", "Seamless closing"],
      icon: <FaHome className="text-3xl" />
    },
    {
      title: "Premium Home Selling",
      description: "Maximize value with professional marketing",
      features: ["Market valuation", "Staging strategy", "Targeted marketing", "Fast-track closing"],
      icon: <FaChartLine className="text-3xl" />
    },
    {
      title: "Local Market Mastery",
      description: "Deep expertise in Central NJ neighborhoods",
      features: ["Neighborhood insights", "School district analysis", "Market trends", "Investment hotspots"],
      icon: <FaMapMarkerAlt className="text-3xl" />
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      subtitle: "Understand Your Vision",
      description: "We listen to understand your unique needs, preferences, and goals for your home journey."
    },
    {
      step: "02",
      title: "Strategy",
      subtitle: "Create Custom Plan",
      description: "Develop a personalized strategy based on market analysis and your specific requirements."
    },
    {
      step: "03",
      title: "Execution",
      subtitle: "Expert Implementation",
      description: "Our team handles all details from property search to negotiations and paperwork."
    },
    {
      step: "04",
      title: "Celebration",
      subtitle: "Move-In & Beyond",
      description: "Welcome to your new home with ongoing support and post-purchase guidance."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Hero Section - Heavy Attractive Design */}
      <section className="relative overflow-hidden pt-28 pb-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/5 to-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Animated Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FaHome className="text-white text-xl" />
                </div>
                <span className="text-blue-600 font-semibold tracking-wider">A2Z HOMES DIVISION</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="block">Premium</span>
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Residential Excellence
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                Elevating your home journey with unmatched expertise, personalized service, and 
                comprehensive solutions across Central New Jersey.
              </p>
            </motion.div>

            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: stat.delay / 1000, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 text-center hover:border-blue-300/50 hover:shadow-xl transition-all duration-500">
                    <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                    
                    {/* Animated underline */}
                    <div className="mt-4 relative">
                      <div className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-500 mx-auto" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Primary CTA - Single Clean Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <span>Begin Your Home Journey</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services - Heavy Attractive Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Signature</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions designed for exceptional residential experiences
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="mb-12 last:mb-0"
              >
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-10 hover:border-blue-300/50 hover:shadow-2xl transition-all duration-500">
                  <div className="flex flex-col lg:flex-row items-start gap-10">
                    {/* Icon Section */}
                    <div className="lg:w-1/4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 mb-6 lg:mb-0">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/4">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-8">
                        {service.description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start group">
                            <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Premium Experience */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The <span className="text-blue-600">A2Z Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A refined process designed for seamless, stress-free real estate transactions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white border border-gray-200/50 rounded-3xl p-8 hover:border-blue-300/50 hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="flex items-start gap-6">
                    {/* Step Number */}
                    <div className="relative">
                      <div className="text-4xl font-bold text-blue-600/20 group-hover:text-blue-600/30 transition-colors duration-300">
                        {step.step}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-2xl font-bold text-blue-600">{step.step}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-0.5 bg-blue-400" />
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                          {step.subtitle}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Animated indicator */}
                      <div className="mt-6">
                        <div className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-16 transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Heavy Attractive */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 rounded-3xl p-12 md:p-16 shadow-2xl">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 px-6 py-3 rounded-full mb-8">
                <FaHandshake className="text-blue-600" />
                <span className="text-blue-600 font-semibold">Let's Connect</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Ready to Elevate Your<br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Home Experience?
                </span>
              </h2>

              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Partner with A2Z Homes for premium residential real estate services 
                and experience the difference of true expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
                >
                  <span>Schedule Consultation</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center gap-4 bg-white border-2 border-gray-300 text-gray-700 px-12 py-5 rounded-2xl font-semibold text-lg hover:border-blue-400 hover:text-blue-600 transition-all duration-500"
                >
                  <span>Meet Our Team</span>
                  <FaUsers className="group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}