// app/sell/cash-as-is/page.jsx
"use client";

import { motion } from "framer-motion";
import { 
  FaBolt, 
  FaMoneyBillWave,
  FaTools,
  FaCalendarCheck,
  FaHome,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaClock
} from "react-icons/fa";
import Link from "next/link";

const CashAsIsPage = () => {
  const benefits = [
    {
      icon: <FaBolt />,
      title: "Fast Closing",
      description: "Close in as little as 7-14 days"
    },
    {
      icon: <FaTools />,
      title: "Sell As-Is",
      description: "No repairs, cleaning, or staging required"
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Cash Offer",
      description: "Guaranteed funds, no financing contingencies"
    },
    {
      icon: <FaCalendarCheck />,
      title: "Certainty",
      description: "No buyer financing fall-through risk"
    }
  ];

  const situations = [
    {
      title: "Inherited Properties",
      description: "Don't want to deal with repairs or cleaning"
    },
    {
      title: "Foreclosure Risk",
      description: "Need to sell quickly to avoid foreclosure"
    },
    {
      title: "Job Relocation",
      description: "Moving soon and can't wait for traditional sale"
    },
    {
      title: "Divorce Settlement",
      description: "Need to liquidate property quickly"
    },
    {
      title: "Major Repairs Needed",
      description: "Property needs extensive work you can't afford"
    },
    {
      title: "Landlord Exiting",
      description: "Want to sell rental property with tenants"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Submit Property Info",
      description: "Share basic details about your property"
    },
    {
      step: "02",
      title: "Receive Cash Offer",
      description: "Get a fair cash offer within 24-48 hours"
    },
    {
      step: "03",
      title: "Accept Offer",
      description: "Review and accept our no-obligation offer"
    },
    {
      step: "04",
      title: "Schedule Closing",
      description: "Pick closing date (7-30 days from acceptance)"
    },
    {
      step: "05",
      title: "Get Paid",
      description: "Receive cash at closing, no contingencies"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <FaBolt />
              CASH SALE STRATEGY
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Sell for Cash{" "}
              <span className="text-emerald-600">As-Is, Fast & Guaranteed</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-10"
            >
              Close in days, not months. Sell your Central NJ home in any condition 
              with a guaranteed cash offer and no repairs needed.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What is Cash As-Is Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is a Cash As-Is Sale?
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  A cash as-is sale means you sell your property <span className="font-semibold">exactly as it is</span>, 
                  with <span className="font-semibold">no repairs, cleaning, or improvements required</span>. 
                  You receive a guaranteed cash offer and can close in as little as 7 days.
                </p>
                <p className="text-gray-700">
                  This is the <span className="font-semibold">fastest, most certain way to sell</span> a home, 
                  perfect for urgent situations or properties needing work.
                </p>
                
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                      <FaClock className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Typical Timeline</h3>
                      <p className="text-emerald-700 font-semibold">7-30 Days vs 60-90 Days Traditional</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">24-48h</div>
                      <div className="text-sm text-gray-600">Offer Received</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">7-30d</div>
                      <div className="text-sm text-gray-600">Close & Get Paid</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                No Repairs Needed - Sell in Any Condition
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Damaged Properties",
                    desc: "Fire, water, or structural damage - we buy them all"
                  },
                  {
                    title: "Hoarder Homes",
                    desc: "We handle cleanup, no cost to you"
                  },
                  {
                    title: "Major Repairs",
                    desc: "Foundation, roof, electrical issues - no problem"
                  },
                  {
                    title: "Tenant Occupied",
                    desc: "Sell with tenants, we handle everything"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                      <FaHome />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Cash As-Is Sale
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why choose speed and certainty over maximum price
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
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 text-2xl mb-6">
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

      {/* Who It's For */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Who Should Sell for Cash As-Is?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This solution is perfect for these common situations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((situation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-emerald-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <FaCheckCircle className="text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">{situation.title}</h3>
                </div>
                <p className="text-gray-600">{situation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The 5-Step Cash Sale Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, fast, and hassle-free from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Cash As-Is: Pros & Cons
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Pros */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <FaCheckCircle className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Advantages</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Close in 7-30 days (vs 60-90)",
                    "No repairs or cleaning needed",
                    "Guaranteed cash offer",
                    "No financing contingencies",
                    "Sell in any condition",
                    "Avoid foreclosure or liens"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Cons */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <FaMoneyBillWave className="text-amber-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Considerations</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Lower price than market value",
                    "No negotiation on price",
                    "Investor-focused (not retail)",
                    "Quick decision required",
                    "Less time for due diligence",
                    "Not ideal for perfect homes"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                <span className="font-semibold">Best for:</span> Speed & certainty over maximum price.
                <span className="font-semibold"> Not ideal for:</span> Perfect condition homes where maximum value is the priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need to Sell Fast?
          </h2>
          <p className="text-emerald-100 text-xl mb-10 max-w-2xl mx-auto">
            Get a fair cash offer for your Central NJ property in 24 hours
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/consult"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-600 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              <FaPhone />
              Get Cash Offer Now
            </Link>
            <a
              href="tel:732-640-6456"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              <FaBolt />
              Call: 732-640-6456
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-emerald-500">
            <p className="text-emerald-200 text-sm">
              Serving Central NJ: Old Bridge, Edison, Sayreville, Marlboro, Woodbridge & surrounding areas
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CashAsIsPage;