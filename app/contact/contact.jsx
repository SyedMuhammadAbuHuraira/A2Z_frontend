"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaClock, FaCheckCircle, FaPaperPlane,
  FaWhatsapp, FaLinkedin, FaTwitter
} from "react-icons/fa";
import { FiMail, FiMessageSquare } from "react-icons/fi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtext: "Mon-Fri: 9am-6pm EST",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "info@a2zgroup.com",
      subtext: "Response within 24 hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Office",
      details: "123 Luxury Avenue, Suite 100",
      subtext: "New York, NY 10001",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: "Monday - Friday",
      subtext: "9:00 AM - 6:00 PM EST",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const contactReasons = [
    "Free Property Valuation",
    "Investment Consultation",
    "Buyer/Seller Representation",
    "Commercial Real Estate",
    "Property Management",
    "Legal & Tax Advisory"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      
      {/* BACKGROUND GLASS EFFECTS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5 rounded-full blur-3xl opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our real estate experts for personalized solutions and premium service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT COLUMN - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* CONTACT CARDS */}
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white/70 backdrop-blur-xl
                  border border-white/40
                  rounded-2xl p-6
                  shadow-[0_8px_32px_rgba(31,38,135,0.1)]
                  hover:shadow-[0_12px_40px_rgba(31,38,135,0.15)]
                  transition-all duration-300
                  group
                  relative
                  overflow-hidden
                  before:absolute before:inset-0 
                  before:bg-gradient-to-br 
                  before:from-white/40 before:via-transparent before:to-white/20 
                  before:rounded-2xl before:-z-10
                "
              >
                <div className="flex items-start gap-4">
                  <div className={`
                    w-14 h-14 rounded-xl
                    bg-gradient-to-br ${item.color}
                    flex items-center justify-center
                    text-white text-2xl
                    shadow-lg
                    backdrop-blur-sm
                    border border-white/30
                    group-hover:scale-110
                    transition-transform duration-300
                  `}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-800 font-medium mb-1">
                      {item.details}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.subtext}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* WHY CONTACT US */}
            <div className="
              bg-gradient-to-br from-blue-50/50 to-cyan-50/50
              backdrop-blur-xl
              border border-white/40
              rounded-2xl p-6
              shadow-[0_8px_32px_rgba(31,38,135,0.1)]
            ">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Contact Us?
              </h3>
              <ul className="space-y-3">
                {contactReasons.map((reason, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="
              bg-white/70 backdrop-blur-xl
              border border-white/40
              rounded-2xl p-6
              shadow-[0_8px_32px_rgba(31,38,135,0.1)]
            ">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Connect Socially
              </h3>
              <div className="flex gap-4">
                <a href="#" className="
                  w-12 h-12 rounded-xl
                  bg-gradient-to-br from-green-500 to-emerald-600
                  flex items-center justify-center
                  text-white text-xl
                  hover:scale-110
                  transition-transform duration-300
                  shadow-lg
                ">
                  <FaWhatsapp />
                </a>
                <a href="#" className="
                  w-12 h-12 rounded-xl
                  bg-gradient-to-br from-blue-600 to-blue-700
                  flex items-center justify-center
                  text-white text-xl
                  hover:scale-110
                  transition-transform duration-300
                  shadow-lg
                ">
                  <FaLinkedin />
                </a>
                <a href="#" className="
                  w-12 h-12 rounded-xl
                  bg-gradient-to-br from-sky-500 to-cyan-500
                  flex items-center justify-center
                  text-white text-xl
                  hover:scale-110
                  transition-transform duration-300
                  shadow-lg
                ">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="
              bg-white/70 backdrop-blur-xl
              border border-white/40
              rounded-3xl p-6 md:p-8 lg:p-10
              shadow-[0_20px_60px_rgba(31,38,135,0.15)]
              relative
              overflow-hidden
              before:absolute before:inset-0 
              before:bg-gradient-to-br 
              before:from-white/40 before:via-transparent before:to-white/20 
              before:rounded-3xl before:-z-10
            ">
              {/* SUCCESS MESSAGE */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="
                    bg-gradient-to-br from-green-500/10 to-emerald-500/10
                    border border-green-500/30
                    rounded-xl p-4 mb-6
                    backdrop-blur-sm
                  "
                >
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600 text-2xl" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-gray-600 text-sm">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex items-center gap-3 mb-8">
                <div className="
                  w-14 h-14 rounded-xl
                  bg-gradient-to-br from-blue-600 to-cyan-500
                  flex items-center justify-center
                  text-white text-2xl
                  shadow-lg
                ">
                  <FiMessageSquare />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll respond promptly
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="
                        w-full px-4 py-3
                        bg-white/50 backdrop-blur-sm
                        border border-white/40
                        rounded-xl
                        text-gray-900
                        placeholder-gray-500
                        focus:outline-none focus:ring-2 focus:ring-blue-500/30
                        focus:border-blue-500/50
                        transition-all duration-300
                      "
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="
                        w-full px-4 py-3
                        bg-white/50 backdrop-blur-sm
                        border border-white/40
                        rounded-xl
                        text-gray-900
                        placeholder-gray-500
                        focus:outline-none focus:ring-2 focus:ring-blue-500/30
                        focus:border-blue-500/50
                        transition-all duration-300
                      "
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="
                        w-full px-4 py-3
                        bg-white/50 backdrop-blur-sm
                        border border-white/40
                        rounded-xl
                        text-gray-900
                        placeholder-gray-500
                        focus:outline-none focus:ring-2 focus:ring-blue-500/30
                        focus:border-blue-500/50
                        transition-all duration-300
                      "
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="
                        w-full px-4 py-3
                        bg-white/50 backdrop-blur-sm
                        border border-white/40
                        rounded-xl
                        text-gray-900
                        focus:outline-none focus:ring-2 focus:ring-blue-500/30
                        focus:border-blue-500/50
                        transition-all duration-300
                        appearance-none
                      "
                    >
                      <option value="">Select a topic</option>
                      <option value="buying">Buying a Property</option>
                      <option value="selling">Selling a Property</option>
                      <option value="investment">Real Estate Investment</option>
                      <option value="commercial">Commercial Real Estate</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="
                      w-full px-4 py-3
                      bg-white/50 backdrop-blur-sm
                      border border-white/40
                      rounded-xl
                      text-gray-900
                      placeholder-gray-500
                      focus:outline-none focus:ring-2 focus:ring-blue-500/30
                      focus:border-blue-500/50
                      transition-all duration-300
                      resize-none
                    "
                    placeholder="Tell us about your real estate needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="
                    w-full py-4 px-6
                    bg-gradient-to-r from-blue-600/90 to-cyan-500/90
                    hover:from-blue-600 hover:to-cyan-500
                    text-white font-semibold
                    rounded-xl
                    backdrop-blur-sm
                    border border-white/30
                    shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]
                    hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.35)]
                    transition-all duration-300
                    relative
                    overflow-hidden
                    group
                    before:absolute before:inset-0
                    before:bg-gradient-to-r
                    before:from-white/20
                    before:to-transparent
                    before:translate-x-[-100%]
                    group-hover:before:translate-x-[100%]
                    before:transition-transform before:duration-700
                  "
                >
                  <div className="flex items-center justify-center gap-3 relative z-10">
                    <span className="text-lg">Send Message</span>
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-6">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>

            {/* MAP SECTION */}
            <div className="
              mt-10
              bg-white/70 backdrop-blur-xl
              border border-white/40
              rounded-3xl p-6
              shadow-[0_8px_32px_rgba(31,38,135,0.1)]
              overflow-hidden
              relative
              before:absolute before:inset-0 
              before:bg-gradient-to-br 
              before:from-white/40 before:via-transparent before:to-white/20 
              before:rounded-3xl before:-z-10
            ">
              <div className="flex items-center gap-3 mb-6">
                <div className="
                  w-12 h-12 rounded-xl
                  bg-gradient-to-br from-emerald-500 to-green-600
                  flex items-center justify-center
                  text-white text-xl
                ">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Our Headquarters
                </h3>
              </div>
              
              <div className="
                w-full h-64
                bg-gradient-to-br from-gray-100 to-gray-200
                rounded-xl
                flex items-center justify-center
                border border-white/40
              ">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-4xl text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">123 Luxury Avenue, Suite 100</p>
                  <p className="text-gray-500">New York, NY 10001</p>
                  <button className="
                    mt-4 px-6 py-2
                    bg-gradient-to-r from-blue-500 to-cyan-500
                    text-white font-medium
                    rounded-lg
                    hover:shadow-lg
                    transition-shadow duration-300
                  ">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;