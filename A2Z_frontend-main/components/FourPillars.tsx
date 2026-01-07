"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { 
  FaHome, 
  FaChartLine, 
  FaBuilding, 
  FaUsers,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";

const A2ZPillars = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const pillars = [
    {
      id: "homes",
      title: "A2Z Homes",
      outcomes: [
        "Buyer strategy",
        "Offer structuring", 
        "Negotiation + closing guidance",
        "Market analysis"
      ],
      icon: <FaHome />,
      description: "Residential real estate solutions",
      color: "blue"
    },
    {
      id: "investments",
      title: "A2Z Investments",
      outcomes: [
        "Deal analysis + ROI breakdowns",
        "Off-market opportunities", 
        "Investor-friendly strategy",
        "Portfolio management"
      ],
      icon: <FaChartLine />,
      description: "Investment property guidance",
      color: "green"
    },
    {
      id: "commercial",
      title: "A2Z Commercial",
      outcomes: [
        "Leasing + site selection",
        "Local business space guidance", 
        "Transaction coordination",
        "Commercial analysis"
      ],
      icon: <FaBuilding />,
      description: "Commercial real estate services",
      color: "purple"
    },
    {
      id: "network",
      title: "A2Z Network",
      outcomes: [
        "Lenders, attorneys, inspectors",
        "Contractors & renovation experts", 
        "Trusted local partners",
        "Connected ecosystem"
      ],
      icon: <FaUsers />,
      description: "Professional partner network",
      color: "orange"
    }
  ];

  const getColorClass = (color: string) => {
    switch(color) {
      case "blue": return "border-blue-100 hover:border-blue-300 hover:shadow-lg";
      case "green": return "border-green-100 hover:border-green-300 hover:shadow-lg";
      case "purple": return "border-purple-100 hover:border-purple-300 hover:shadow-lg";
      case "orange": return "border-orange-100 hover:border-orange-300 hover:shadow-lg";
      default: return "border-gray-200 hover:border-gray-300 hover:shadow-lg";
    }
  };

  const getIconColor = (color: string) => {
    switch(color) {
      case "blue": return "text-blue-600";
      case "green": return "text-green-600";
      case "purple": return "text-purple-600";
      case "orange": return "text-orange-600";
      default: return "text-gray-600";
    }
  };

  const getBgColor = (color: string) => {
    switch(color) {
      case "blue": return "bg-blue-50";
      case "green": return "bg-green-50";
      case "purple": return "bg-purple-50";
      case "orange": return "bg-orange-50";
      default: return "bg-gray-100";
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Minimal Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-gray-500 text-sm font-medium mb-4">
            THE A2Z APPROACH
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Complete <span className="text-blue-600">Real Estate</span> Solutions
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Four specialized divisions providing comprehensive services for Central NJ
          </p>
        </div>

        {/* Clean Grid with Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/pillars/${pillar.id}`}>
                <div className={`h-full bg-white border rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer ${getColorClass(pillar.color)}`}>
                  
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className={`w-12 h-12 ${getBgColor(pillar.color)} rounded-lg flex items-center justify-center ${getIconColor(pillar.color)}`}>
                      {pillar.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{pillar.title}</h3>
                      <p className="text-gray-600 text-sm">{pillar.description}</p>
                    </div>
                    <FaArrowRight className={`${getIconColor(pillar.color)} mt-2 group-hover:translate-x-1 transition-transform`} />
                  </div>

                  {/* Outcomes - Clean List */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-gray-500">Key Services</h4>
                    <div className="space-y-3">
                      {pillar.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start">
                          <FaCheckCircle className={`${getIconColor(pillar.color)} mt-1 mr-3 flex-shrink-0`} />
                          <span className="text-gray-700">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Divider */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        Serving Central NJ
                      </div>
                      <div className={`text-sm ${getIconColor(pillar.color)} font-medium`}>
                        Explore Services
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Simple Divider */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-12 bg-gray-300"></div>
            <div className="text-gray-400 text-sm">Real Estate Made Simple</div>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default A2ZPillars;