"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaHome,
  FaHandshake,
  FaPhone,
  FaChartLine,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

const ProcessSection = () => {
  const steps = [
    {
      stepNumber: "01",
      title: "Strategy Session",
      description: "We analyze your goals and the Central NJ market to create your custom buying or selling plan.",
      icon: <FaSearch />,
      color: "bg-blue-500",
    },
    {
      stepNumber: "02",
      title: "Active Execution",
      description: "Personalized property tours or professional home preparation based on your specific needs.",
      icon: <FaHome />,
      color: "bg-green-500",
    },
    {
      stepNumber: "03",
      title: "Close with Confidence",
      description: "Expert negotiation and seamless coordination for a smooth, stress-free closing.",
      icon: <FaHandshake />,
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-blue-600 text-sm font-semibold mb-4 px-4 py-2 bg-blue-50 rounded-full">
            OUR PROCESS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The A2Z Journey to Your{" "}
            <span className="text-blue-600">Real Estate Success</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A clear, straightforward path designed for Central NJ buyers and sellers.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Step Number */}
                  <div className="text-sm text-gray-500 font-medium mb-2">
                    STEP {step.stepNumber}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className={`${step.color} w-14 h-14 rounded-full flex items-center justify-center text-white text-xl mb-6`}>
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>
                  
                  {/* Progress Indicator */}
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${step.color.split('bg-')[1].split('-')[0] === 'blue' ? 'bg-blue-500' : step.color.split('bg-')[1].split('-')[0] === 'green' ? 'bg-green-500' : 'bg-purple-500'}`}
                        style={{ width: `${(index + 1) * 33}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500">{index + 1}/3</span>
                  </div>
                </div>

                {/* Arrow connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-8">
                    <div className="text-gray-300">
                      <FaArrowRight />
                    </div>
                  </div>
                )}

                {/* Dot on timeline for desktop */}
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <div className={`w-4 h-4 ${step.color} rounded-full border-4 border-white shadow`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Start Your Central NJ Real Estate Journey Today
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/consult"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow hover:shadow-md"
            >
              <FaPhone />
              Schedule a Free Consultation
            </a>
            <a
              href="/home-value"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold border border-blue-200 hover:bg-blue-50 transition-colors"
            >
              <FaShieldAlt />
              Get Your Home Value
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            Serving Old Bridge, Edison, Sayreville, Marlboro, Woodbridge & surrounding Central NJ areas
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;