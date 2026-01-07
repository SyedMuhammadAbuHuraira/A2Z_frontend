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
  FaArrowRight
} from "react-icons/fa";

const HomeValueSection = () => {
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    email: "",
    phone: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaChartLine />
              FREE VALUATION
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get Your Home Value{" "}
              <span className="text-blue-600">(Central NJ)</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8">
              Instant estimate + I'll follow up with a pricing range and what buyers are paying for homes like yours right now.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-10">
              {[
                "Accurate market analysis",
                "Current buyer demand insights",
                "Competitive pricing strategy",
                "Local Central NJ expertise"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Trust Note */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Why Get a Professional Valuation?</h4>
                  <p className="text-gray-600 text-sm">
                    Online estimates can be off by 10-15%. Our local market analysis gives you accurate numbers for Old Bridge, Edison, Sayreville, and surrounding towns.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
                  Takes less than 60 seconds
                </p>
              </div>

              {/* Form Content */}
              <div className="p-8">
                {isSubmitted ? (
                  // Success Message
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
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

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                      <h5 className="font-bold text-gray-900 mb-3">
                        Want the most accurate number?
                      </h5>
                      <p className="text-gray-600 mb-4">
                        Book a 10-minute pricing call for a comprehensive market analysis.
                      </p>
                      <a
                        href="/consult"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        <FaPhone />
                        Book Pricing Call
                      </a>
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
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
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
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-white border border-gray-200 rounded-2xl px-8 py-8 shadow-sm max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <FaChartLine className="text-blue-600 text-2xl" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-lg">Local Market Expertise</h4>
                <p className="text-gray-600 text-sm">
                  Specializing in Old Bridge, Edison, Sayreville, Marlboro & surrounding Central NJ areas
                </p>
              </div>
            </div>
            
            <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">850+</div>
              <div className="text-gray-600 text-sm">Homes Valued</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeValueSection;