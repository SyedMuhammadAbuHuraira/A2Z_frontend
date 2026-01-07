"use client";

import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaLock,
  FaBolt,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";
import Link from "next/link";

const SellingOptionsSection = () => {
  const options = [
    {
      title: "Sell On-Market",
      subtitle: "Max exposure + highest price strategy",
      icon: <FaBullhorn className="text-2xl" />,
      color: "bg-blue-500",
      borderColor: "border-blue-200",
      bulletColor: "text-blue-600",
      bullets: [
        "Maximum buyer exposure via MLS",
        "Professional staging & photography",
        "Competitive pricing for top dollar",
        "Ideal for full market value"
      ],
      ctaText: "See how it works",
      link: "/sell/on-market",
    },
    {
      title: "Sell Off-Market (Private)",
      subtitle: "Discreet sale + flexible terms",
      icon: <FaLock className="text-2xl" />,
      color: "bg-purple-500",
      borderColor: "border-purple-200",
      bulletColor: "text-purple-600",
      bullets: [
        "Complete privacy & discretion",
        "No public showings or open houses",
        "Flexible terms & negotiation",
        "Perfect for unique properties"
      ],
      ctaText: "See how it works",
      link: "/sell/off-market",
    },
    {
      title: "Cash / As-Is Sale",
      subtitle: "Speed + certainty, no repairs required",
      icon: <FaBolt className="text-2xl" />,
      color: "bg-emerald-500",
      borderColor: "border-emerald-200",
      bulletColor: "text-emerald-600",
      bullets: [
        "Close in 7-14 days",
        "Sell home in any condition",
        "No repairs or staging needed",
        "Perfect for urgent sales"
      ],
      ctaText: "See how it works",
      link: "/sell/cash-as-is",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Clean Centered Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-blue-600 text-sm font-semibold mb-6 px-4 py-2 bg-blue-50 rounded-full"
          >
            SELLING SOLUTIONS
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            {/* Main Heading with Red Line - Only underline below heading */}
            <div className="relative pb-4 mb-3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Your Selling Options
              </h2>
              {/* Red Underline - Only under the heading text */}
              <div className="absolute bottom-0 left-0 h-0.5">
                <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full w-full"></div>
              </div>
            </div>

            {/* Subtitle with parentheses - Clean spacing */}
            <p className="text-gray-600 text-lg md:text-xl font-medium">
              <span className="text-gray-400">(</span>
              Not One-Size-Fits-All
              <span className="text-gray-400">)</span>
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Choose the selling strategy that best fits your goals, timeline, and situation in Central NJ.
          </motion.p>
        </div>

        {/* Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`relative h-full bg-white rounded-2xl border ${option.borderColor} p-8 hover:shadow-lg transition-all duration-300`}>

                {/* Icon Circle */}
                <div className={`${option.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mb-8 shadow-lg`}>
                  {option.icon}
                </div>

                {/* Title - Bold and Clean */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-600 mb-6 font-medium">
                  {option.subtitle}
                </p>

                {/* Benefits List - Clean */}
                <ul className="space-y-4 mb-8">
                  {option.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className={`mt-1 mr-3 flex-shrink-0 ${option.bulletColor}`} />
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Clean */}
                <Link
                  href={option.link}
                  className={`inline-flex items-center justify-between w-full px-6 py-4 bg-gray-50 border ${option.borderColor} rounded-xl text-gray-800 font-semibold hover:bg-white hover:shadow transition-all duration-300`}
                >
                  <span>{option.ctaText}</span>
                  <FaArrowRight className="text-gray-400 group-hover:text-gray-700 transition-colors" />
                </Link>

                {/* Bottom Border Accent */}
                <div className={`mt-8 pt-6 border-t ${option.borderColor}`}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Best for:</span>
                    <span className="font-medium text-gray-700">
                      {option.color.includes('blue') ? 'Maximizing Value' :
                        option.color.includes('purple') ? 'Privacy & Flexibility' :
                          'Speed & Convenience'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clean Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-6 bg-gray-50 rounded-2xl px-8 py-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FaCheckCircle className="text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">
                Need help choosing?
              </h4>
            </div>

            <p className="text-gray-600 max-w-lg">
              Schedule a free consultation to discuss which option is best for your specific situation.
            </p>

            <Link
              href="/consult"
              className="inline-flex items-center gap-3 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Personalized Advice
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SellingOptionsSection;