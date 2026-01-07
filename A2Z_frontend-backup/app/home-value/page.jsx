// app/home-value/page.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaHome, 
  FaChartLine, 
  FaPhone, 
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaArrowRight,
  FaCheckCircle,
  FaQuestionCircle,
  FaClock,
  FaShieldAlt,
  FaStar,
  FaCalculator
} from "react-icons/fa";
import Link from "next/link";

const HomeValuePage = () => {
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    email: "",
    phone: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        address: "",
        name: "",
        email: "",
        phone: ""
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const faqs = [
    {
      question: "How accurate is the home valuation?",
      answer: "Our valuations are 92-96% accurate based on recent Central NJ market data. We analyze comparable sales, current market conditions, and property-specific factors to provide the most accurate estimate."
    },
    {
      question: "How long does it take to get my valuation?",
      answer: "You'll receive an instant estimate after submitting the form, followed by a detailed market report within 24 hours via email."
    },
    {
      question: "Is this service really free?",
      answer: "Yes, absolutely free. There's no cost or obligation. We provide this service to help Central NJ homeowners understand their property's value."
    },
    {
      question: "Will you try to list my home?",
      answer: "No pressure. This is purely an informational service. We'll only discuss listing if you specifically request it during our follow-up."
    },
    {
      question: "What makes your valuation better than Zillow/Zestimate?",
      answer: "Zillow uses algorithms. We use local market expertise, recent comparable sales in your specific Central NJ neighborhood, and human analysis for much greater accuracy."
    },
    {
      question: "Do you need to see my home in person?",
      answer: "Not for the initial valuation. We use your property details and recent sales data. For the most accurate number, we recommend an in-person pricing consultation."
    }
  ];

  const valuationBenefits = [
    {
      icon: <FaChartLine />,
      title: "Data-Driven Analysis",
      description: "Real-time Central NJ market data & recent comparable sales"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Local Expertise",
      description: "Specialized knowledge of Old Bridge, Edison, Sayreville & surrounding areas"
    },
    {
      icon: <FaCalculator />,
      title: "Accurate Pricing",
      description: "92-96% accurate vs. online estimates that can be off by 10-15%"
    },
    {
      icon: <FaShieldAlt />,
      title: "No Obligation",
      description: "Free service with no pressure to list or sell"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <FaCalculator />
              FREE HOME VALUATION
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Get Your Accurate Home Value in{" "}
              <span className="text-blue-600">Central NJ</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
            >
              Instant estimate + I'll follow up with a pricing range and what buyers are paying for homes like yours right now in Old Bridge, Edison, Sayreville, and surrounding towns.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Our Valuation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Home Valuation?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              More accurate than online estimates because we understand Central NJ markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Comparison Section */}
          <div className="mt-20 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Valuation vs. Online Estimates
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <FaCheckCircle className="text-green-600 text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Our Analysis</h4>
                </div>
                
                <ul className="space-y-3">
                  {[
                    "92-96% accuracy rate",
                    "Local Central NJ market expertise",
                    "Recent comparable sales analysis",
                    "Property-specific adjustments",
                    "Human review & verification",
                    "Detailed 24-page report"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <FaQuestionCircle className="text-gray-600 text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Online Estimates</h4>
                </div>
                
                <ul className="space-y-3">
                  {[
                    "85-90% accuracy rate",
                    "Algorithm-based nationwide",
                    "Limited local market data",
                    "No property-specific review",
                    "Automated, no human input",
                    "Basic estimate only"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Side - Form Explanation */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get Your Free Home Valuation
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="text-gray-700">
                  Fill out the form to receive your <span className="font-semibold">instant estimate</span> plus a detailed market analysis. We'll show you:
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Current market value range for your home",
                    "Recent comparable sales in your neighborhood",
                    "Days on market for similar properties",
                    "Buyer demand in your specific area",
                    "Pricing strategy recommendations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FaStar className="text-yellow-500" />
                    <h4 className="font-bold text-gray-900">Trust & Privacy Guaranteed</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Your information is secure. We never share your data, and there's absolutely no obligation or pressure. This is a free service to help Central NJ homeowners.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaHome className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Get Your Home Value
                  </h3>
                  <p className="text-blue-100">
                    Takes less than 60 seconds • No obligation
                  </p>
                </div>

                {/* Form Content */}
                <div className="p-8">
                  {isSubmitted ? (
                    // Success Message
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                          <FaHome className="text-white text-2xl" />
                        </div>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">
                        Thank You! Your Request is Received
                      </h4>
                      
                      <p className="text-gray-600 mb-8">
                        I'll analyze your property and send you a detailed market report within 24 hours.
                      </p>

                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 mb-3">
                          Want the most accurate number?
                        </h5>
                        <p className="text-gray-600 mb-4">
                          Book a 10-minute pricing call for a comprehensive market analysis.
                        </p>
                        <Link
                          href="/consult"
                          className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          <FaPhone />
                          Book Pricing Call
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    // Form
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        {/* Address Field */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Property Address *
                          </label>
                          <div className="relative">
                            <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              required
                              placeholder="Enter your Central NJ address"
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                          </div>
                        </div>

                        {/* Name Field (Optional) */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name <span className="text-gray-500 text-sm">(Optional)</span>
                          </label>
                          <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your name"
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                          </div>
                        </div>

                        {/* Email Field */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="your@email.com"
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                          </div>
                        </div>

                        {/* Phone Field (Optional) */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number <span className="text-gray-500 text-sm">(Optional, recommended)</span>
                          </label>
                          <div className="relative">
                            <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="(732) 555-1234"
                              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                          </div>
                          <p className="text-gray-500 text-xs mt-2">
                            I'll call to discuss your valuation in detail
                          </p>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Processing...
                            </>
                          ) : (
                            <>
                              Get My Home Value
                              <FaArrowRight />
                            </>
                          )}
                        </button>

                        {/* Privacy Note */}
                        <p className="text-gray-500 text-xs text-center">
                          By submitting, you agree to our privacy policy. Your information is secure and will only be used to provide your home valuation.
                        </p>
                      </div>
                    </form>
                  )}
                </div>

                {/* Form Footer */}
                <div className="border-t border-gray-100 p-6 bg-gray-50">
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>No spam</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>24-hour response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Free service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span>No obligation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about our home valuation service
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaQuestionCircle className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <div className="inline-flex flex-col items-center gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <FaPhone className="text-blue-600 text-3xl" />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl">
                Call me directly for a quick chat about your Central NJ property value
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="tel:732-640-6456"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                <FaPhone />
                Call: 732-640-6456
              </a>
              <Link
                href="/consult"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
              >
                <FaClock />
                Schedule Consultation
              </Link>
            </div>
            
            <div className="pt-8 border-t border-blue-500 w-full">
              <p className="text-blue-200 text-sm">
                Serving Central NJ: Old Bridge, Edison, Sayreville, Marlboro, Woodbridge & surrounding areas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeValuePage;