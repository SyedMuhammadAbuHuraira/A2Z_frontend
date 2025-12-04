"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaAward, FaShieldAlt, FaHandshake, FaRocket,
  FaArrowRight, FaCalendarAlt, FaClock, FaCheckCircle
} from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
  const values = [
    {
      title: "Transparency",
      description: "Clear communication and honest advice every step of the way",
      icon: <FaShieldAlt />,
      color: "#3B82F6"
    },
    {
      title: "Expertise",
      description: "Deep local market knowledge and data-backed insights",
      icon: <FaAward />,
      color: "#10B981"
    },
    {
      title: "Partnership",
      description: "We work with you as a true real estate partner",
      icon: <FaHandshake />,
      color: "#8B5CF6"
    },
    {
      title: "Innovation",
      description: "Modern tools, AI insights & advanced negotiation strategies",
      icon: <FaRocket />,
      color: "#F59E0B"
    }
  ];

  const services = [
    "Retail Home Sales & Purchases",
    "Off-Market & Distressed Property Solutions",
    "Investment Property Acquisitions",
    "Commercial Real Estate",
    "Probate & Inherited Property Sales",
    "Pre-Foreclosure Assistance",
    "Landlord Exit Strategies",
    "Portfolio Management"
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      
      {/* Background glowing effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-30 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300 opacity-30 blur-[140px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
            Meet  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
              Ahmad – Your Trusted Real Estate Expert
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            A decade of experience. Hundreds of families helped.  
            A2Z brings modern real estate solutions to Central New Jersey.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* IMAGE COLUMN — PARALLAX */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
            >
              <Image
                src="/images/a1.jpg"
                alt="Luxury Property"
                width={900}
                height={700}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 left-6 bg-white shadow-lg border border-gray-200 rounded-2xl px-6 py-4"
            >
              <div className="font-bold text-gray-900 text-lg">10+ Years Experience</div>
              <div className="text-sm text-gray-600">Real Estate · Investments · Solutions</div>
            </motion.div>
          </motion.div>

          {/* CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* About Ahmad Card */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="flex items-start gap-6 mb-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-300/30 rounded-full blur-xl" />
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl">
                    <FaUser />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Ahmad, Founder – A2Z Group</h3>
                  <p className="text-gray-600">Principal Broker · Trusted Advisor</p>

                  <div className="flex items-center gap-2 mt-2">
                    <FaMapMarkerAlt className="text-blue-500" />
                    <span className="text-sm text-gray-600">Serving Central New Jersey</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Ahmad has spent the last decade helping families, sellers, and investors
                navigate complex real estate situations with confidence and clarity.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                From luxury homes to distressed properties and investment portfolios — A2Z brings 
                modern marketing, strong negotiation, and innovative solutions to every transaction.
              </p>

              {/* Contact Info */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50">
                  <FaPhone className="text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">Phone</div>
                    <div className="font-semibold text-gray-900">(732) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-purple-50">
                  <FaEnvelope className="text-purple-600" />
                  <div>
                    <div className="text-sm text-gray-600">Email</div>
                    <div className="font-semibold text-gray-900">ahmad@a2zgroup.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Core Values</h3>

              <div className="grid grid-cols-2 gap-5">
                {values.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-5 rounded-xl bg-gray-50 border hover:border-gray-300 transition shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-3"
                      style={{ backgroundColor: v.color }}>
                      {v.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900">{v.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{v.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <div className="mt-20 bg-white rounded-3xl p-10 border shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Services</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <FaCheckCircle className="text-emerald-500" />
                <span className="text-gray-700">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20 relative bg-white/80 backdrop-blur-xl rounded-3xl p-14 shadow-xl border"
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-8">
              <FaCalendarAlt className="text-3xl text-white" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Discuss Your Real Estate Goals
            </h3>

            <p className="text-gray-600 text-lg mb-8">
              Whether you're buying, selling, investing, or facing challenges —  
              A2Z provides modern, honest, and expert guidance.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                Schedule a Call
              </Link>

              <Link
                href="/about"
                className="px-10 py-4 border-2 border-blue-400 text-blue-600 font-semibold rounded-2xl hover:bg-blue-50 transition"
              >
                Meet The Team
              </Link>
            </div>

            <div className="mt-10 pt-6 border-t text-gray-600 text-sm flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <FaClock className="text-blue-600" /> Mon–Sun: 8AM–8PM
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-purple-600" /> Central New Jersey
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-emerald-600" /> 24/7 Support Available
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
