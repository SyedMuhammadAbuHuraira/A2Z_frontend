"use client";

import { motion } from "framer-motion";
import { 
  FaPhone, 
  FaMapMarkerAlt,
  FaHandshake,
  FaChartLine,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Clean Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaHandshake />
            MEET AHMAD
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your <span className="text-blue-600">Central NJ</span> Real Estate Expert
          </h2>
          
          <p className="text-gray-600">
            Direct, strategic guidance for buyers and sellers across Middlesex & Monmouth County
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Professional Headshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-2 shadow-lg">
              <div className="relative overflow-hidden rounded-xl">
                {/* Professional Headshot - Now using your uploaded image */}
                <div className="aspect-square relative">
                  <Image
                    src="/images/ahmad.webp"
                    alt="Ahmad - Central NJ Real Estate Expert"
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  
                  {/* Name & Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-2xl font-bold">Ahmad</div>
                    <div className="text-blue-200 font-medium">Principal Broker</div>
                    <div className="text-gray-200 text-sm mt-1">A2Z Group Real Estate</div>
                  </div>
                </div>
              </div>
              
              {/* Contact Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
                  <FaPhone />
                  <span className="font-bold">732-640-6456</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {/* Direct Personal Bio */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaHandshake className="text-blue-600" />
                Why Work With Me?
              </h3>
              
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">Central NJ specialist</span> with deep knowledge of Old Bridge, Edison, Sayreville, Marlboro and surrounding towns. I focus exclusively on this market because local expertise matters.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">Expert negotiator</span> who fights for your best interests. Whether you're buying or selling, I bring strategic thinking and proven tactics to get you the best possible outcome.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">More options, better strategy.</span> On-market exposure, private off-market sales, or cash offers - I'll show you all your options and help you choose the right path for your situation.
                </p>
              </div>
              
              {/* Key Points */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Local Expert</div>
                    <div className="text-sm text-gray-600">Central NJ Focus</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FaChartLine className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Market Strategist</div>
                    <div className="text-sm text-gray-600">Data-Driven</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs - Exactly as Required */}
            <div className="space-y-6">
              {/* CTA 1: Book a Consult */}
              {/* <Link
                href="/consult"
                className="group block"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <FaHandshake className="text-white text-xl" />
                      </div>
                      <div>
                        <div className="text-xl font-bold">Book a Free Consult</div>
                        <div className="text-blue-100 text-sm">Personal strategy session</div>
                      </div>
                    </div>
                    <FaArrowRight className="text-white group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link> */}

              {/* CTA 2: Call/Text */}
              {/* <a
                href="tel:732-640-6456"
                className="group block"
              >
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaPhone className="text-blue-600 text-xl" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">Call/Text Direct</div>
                        <div className="text-gray-600 text-sm">732-640-6456</div>
                      </div>
                    </div>
                    <div className="text-blue-600 group-hover:translate-x-2 transition-transform">
                      <FaArrowRight />
                    </div>
                  </div>
                </div>
              </a> */}
            </div>

            {/* Services Quick View */}
            {/* <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-blue-600" />
                What I Offer:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "On-Market Sales",
                  "Off-Market Options",
                  "Investment Guidance",
                  "Cash Sale Solutions"
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-16"
        >
          {/* <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-2xl px-8 py-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900">Central NJ Focus</h4>
                <p className="text-gray-600 text-sm">Old Bridge, Edison, Sayreville, Marlboro & surrounding areas</p>
              </div>
            </div>
            <div className="h-12 w-px bg-blue-200 hidden sm:block"></div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              <FaPhone />
              Schedule Call
            </Link>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;