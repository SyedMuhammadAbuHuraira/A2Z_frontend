"use client";

import { motion } from "framer-motion";
import {
  FaStar,
  FaMapMarkerAlt,
  FaHome,
  FaCheckCircle,
  FaUser,
  FaChartLine,
} from "react-icons/fa";

const LocalProofSection = () => {
  const reviews = [
    {
      name: "Sarah M.",
      location: "Old Bridge",
      text: "Sold above asking in 3 days! Incredible negotiation.",
      date: "Nov 2023",
      rating: 5,
    },
    {
      name: "Robert K.",
      location: "Edison",
      text: "Made our first home purchase smooth & stress-free.",
      date: "Oct 2023",
      rating: 5,
    },
    {
      name: "Johnson Family",
      location: "Sayreville",
      text: "Truly understands Central NJ market. Highly recommended!",
      date: "Dec 2023",
      rating: 5,
    },
    {
      name: "Lisa P.",
      location: "Marlboro",
      text: "Found us an off-market property. Exceptional service!",
      date: "Jan 2024",
      rating: 5,
    },
  ];

  const recentWins = [
    {
      type: "Under Contract",
      count: 8,
      description: "Active deals in progress",
      icon: "📋",
      color: "from-blue-500 to-blue-600",
    },
    {
      type: "Just Listed",
      count: 5,
      description: "New properties on market",
      icon: "🏠",
      color: "from-green-500 to-green-600",
    },
    {
      type: "Sold",
      count: 12,
      description: "Recently closed deals",
      icon: "✅",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const counties = [
    {
      name: "Middlesex County",
      cities: ["Old Bridge", "Edison", "Sayreville", "East Brunswick"],
      primary: true,
    },
    {
      name: "Monmouth County",
      cities: ["Marlboro", "Manalapan", "Freehold", "Howell"],
      primary: false,
    },
    {
      name: "Somerset County",
      cities: ["Bridgewater", "Hillsborough", "Somerville"],
      primary: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* HEADER SECTION - Fixed */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Credibility Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full border border-blue-200">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-blue-700 text-sm font-bold tracking-widest uppercase">
              LOCAL CREDIBILITY
            </span>
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Trusted in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">
              Central NJ
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-700 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Real results and verified reviews from homeowners across{" "}
            <span className="font-semibold text-gray-900">
              Middlesex & Monmouth County
            </span>
          </p>
        </div>

        {/* RECENT WINS SECTION */}
        {/* <div className="mb-20">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">
            Current Quarter Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {recentWins.map((win, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{win.icon}</div>
                  <div className="text-4xl font-bold text-gray-900">
                    {win.count}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {win.type}
                  </h3>
                  <p className="text-gray-600 text-sm">{win.description}</p>
                </div>

                <div className="h-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${win.color} rounded-full`}
                    style={{ width: `${(win.count / 15) * 100}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* REVIEWS SECTION */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Verified reviews from Central NJ homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUser className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <FaMapMarkerAlt className="text-xs" />
                      {review.location}
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="text-xs text-gray-500 border-t border-gray-100 pt-3">
                  {review.date}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Rating Summary */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 border border-blue-100">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    5.0
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Google Rating
                  </div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    40+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Reviews
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    100%
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICE AREAS SECTION */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-gray-600">
              Comprehensive coverage across Central NJ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {counties.map((county, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`rounded-2xl p-8 border-2 ${
                  county.primary
                    ? "bg-gradient-to-b from-blue-50 to-white border-blue-200"
                    : "bg-white border-gray-100"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center ${
                      county.primary
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <FaHome className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {county.name}
                    </h3>
                    {county.primary && (
                      <div className="text-blue-600 text-sm font-semibold">
                        Primary Service Area
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3">
                  {county.cities.map((city, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{city}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CLOSING SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-12 text-center border border-blue-100">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-white text-3xl" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Local Expertise You Can Trust
            </h3>

            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              With deep market knowledge and proven results across Central New
              Jersey, we deliver real estate solutions tailored to your specific
              needs and goals.
            </p>

            <div className="inline-flex items-center gap-2 text-blue-700 font-semibold">
              <FaChartLine />
              <span>Proven track record in local markets</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalProofSection;