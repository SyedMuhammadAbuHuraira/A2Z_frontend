// app/sell/off-market/page.jsx
"use client";

import { motion } from "framer-motion";
import { 
  FaLock, 
  FaUserSecret, 
  FaCalendarAlt,
  FaHandshake,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaUsers
} from "react-icons/fa";
import Link from "next/link";

const OffMarketPage = () => {
  const benefits = [
    {
      icon: <FaLock />,
      title: "Complete Privacy",
      description: "No public listing, no open houses, total discretion"
    },
    {
      icon: <FaUserSecret />,
      title: "Selective Showings",
      description: "Only pre-qualified buyers see your home"
    },
    {
      icon: <FaCalendarAlt />,
      title: "Flexible Timeline",
      description: "Sell on your schedule, not the market's"
    },
    {
      icon: <FaHandshake />,
      title: "Negotiation Control",
      description: "Work directly with serious buyers"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Private Listing",
      description: "We create a confidential listing shared only with our vetted buyer network"
    },
    {
      step: "02",
      title: "Selective Marketing",
      description: "Targeted outreach to qualified buyers who match your criteria"
    },
    {
      step: "03",
      title: "Private Showings",
      description: "Scheduled showings only with serious, pre-approved buyers"
    },
    {
      step: "04",
      title: "Confidential Offers",
      description: "All negotiations handled discreetly between parties"
    },
    {
      step: "05",
      title: "Quiet Closing",
      description: "Complete the sale without public record until you're ready"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <FaLock />
              OFF-MARKET STRATEGY
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Sell Off-Market for{" "}
              <span className="text-purple-600">Privacy & Control</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-10"
            >
              A discreet, private sale process perfect for high-profile individuals, 
              unique properties, or sellers wanting maximum flexibility in Central NJ.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What is Off-Market Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Off-Market Selling?
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Off-market (or "pocket listing") sales are private real estate transactions 
                  where your property is <span className="font-semibold">not listed on public platforms like MLS</span>. 
                  Instead, we market directly to our exclusive network of qualified buyers.
                </p>
                <p className="text-gray-700">
                  This approach maintains <span className="font-semibold">complete privacy</span> while allowing for 
                  <span className="font-semibold"> flexible terms and selective showings</span>.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-2">Perfect For:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "High-profile sellers",
                      "Celebrities & executives",
                      "Inherited properties",
                      "Divorce situations",
                      "Unique/luxury homes",
                      "Privacy-conscious sellers"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How Showings Work
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Limited Access",
                    desc: "Only pre-qualified buyers from our network"
                  },
                  {
                    title: "By Appointment Only",
                    desc: "Scheduled at your convenience"
                  },
                  {
                    title: "Discreet Viewings",
                    desc: "No signs, no open houses"
                  },
                  {
                    title: "Vetted Buyers",
                    desc: "All buyers financially verified first"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                      <FaUserSecret />
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
              Benefits of Selling Off-Market
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why choose a private sale over traditional listing
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
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 text-2xl mb-6">
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

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Off-Market Selling Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A 5-step private process from listing to closing
            </p>
          </div>

          <div className="space-y-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-8"
              >
                <div className="w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0">
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

      {/* Pros & Cons */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Off-Market: Pros & Cons
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
                    "Complete privacy & discretion",
                    "No public showings or open houses",
                    "Flexible terms & timeline",
                    "Select qualified buyers only",
                    "Avoid market competition stigma",
                    "Test market before public listing"
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
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <FaShieldAlt className="text-red-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Considerations</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Smaller buyer pool",
                    "Potentially lower price",
                    "No MLS exposure",
                    "Longer time to sell possible",
                    "Requires experienced agent",
                    "Marketing limited to network"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                <span className="font-semibold">Note:</span> Off-market selling requires an experienced agent with 
                a strong buyer network to be effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Interested in a Private Sale?
          </h2>
          <p className="text-purple-100 text-xl mb-10 max-w-2xl mx-auto">
            Let's discuss if off-market selling is right for your Central NJ property
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/consult"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              <FaPhone />
              Book Private Consultation
            </Link>
            <a
              href="tel:732-640-6456"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              <FaUsers />
              Call: 732-640-6456
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-purple-500">
            <p className="text-purple-200 text-sm">
              Serving Central NJ: Old Bridge, Edison, Sayreville, Marlboro, Woodbridge & surrounding areas
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OffMarketPage;