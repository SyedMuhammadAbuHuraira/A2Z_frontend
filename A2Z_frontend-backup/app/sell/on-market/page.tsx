// app/sell/on-market/page.jsx
"use client";

import { motion } from "framer-motion";
import { 
  FaBullhorn, 
  FaChartLine, 
  FaHome, 
  FaCamera,
  FaUsers,
  FaDollarSign,
  FaCheckCircle,
  FaArrowRight,
  FaPhone
} from "react-icons/fa";
import Link from "next/link";

const OnMarketPage = () => {
  const benefits = [
    {
      icon: <FaBullhorn />,
      title: "Maximum Exposure",
      description: "Listed on MLS, Zillow, Realtor.com & 50+ sites"
    },
    {
      icon: <FaCamera />,
      title: "Professional Marketing",
      description: "HD photography, virtual tours, drone footage"
    },
    {
      icon: <FaUsers />,
      title: "Competitive Bidding",
      description: "Multiple offers drive up final sale price"
    },
    {
      icon: <FaChartLine />,
      title: "Market Pricing",
      description: "Data-driven pricing for maximum value"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Market Analysis",
      description: "We analyze comparable sales and current market conditions"
    },
    {
      step: "02",
      title: "Home Preparation",
      description: "Professional staging, photography, and repairs"
    },
    {
      step: "03",
      title: "Strategic Marketing",
      description: "Launch on all major platforms with targeted campaigns"
    },
    {
      step: "04",
      title: "Showings & Offers",
      description: "Open houses, private showings, offer negotiations"
    },
    {
      step: "05",
      title: "Closing & Move",
      description: "Contract to closing in 30-45 days"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <FaBullhorn />
              ON-MARKET STRATEGY
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Sell On-Market for{" "}
              <span className="text-blue-600">Maximum Price</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-10"
            >
              Maximum exposure through MLS, professional marketing, and competitive bidding 
              to achieve the highest possible sale price for your Central NJ home.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Sell On-Market?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Traditional MLS listing remains the best way to maximize your home's value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-6">
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The On-Market Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven 5-step process designed for maximum results
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-8"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who Should Sell On-Market?
              </h2>
              <div className="space-y-4">
                {[
                  "Homeowners wanting maximum market value",
                  "Sellers with flexible timelines (30-60 days)",
                  "Properties in good condition",
                  "Those comfortable with showings & open houses",
                  "Sellers in competitive markets"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pros & Cons
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-green-600 mb-2">Advantages</h4>
                  <ul className="space-y-2">
                    {[
                      "Highest potential sale price",
                      "Maximum buyer exposure",
                      "Multiple offers create competition",
                      "Market determines true value"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-2">Considerations</h4>
                  <ul className="space-y-2">
                    {[
                      "Showings required (open houses)",
                      "Longer timeline (30-90 days)",
                      "Repairs/staging often needed",
                      "Public listing exposure"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Sell for Maximum Value?
          </h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Let's create a customized on-market strategy for your Central NJ home
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/consult"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              <FaPhone />
              Book Free Consultation
            </Link>
            <Link
              href="/home-value"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              <FaDollarSign />
              Get Home Value Estimate
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-blue-500">
            <p className="text-blue-200 text-sm">
              Serving Central NJ: Old Bridge, Edison, Sayreville, Marlboro, Woodbridge & surrounding areas
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnMarketPage;