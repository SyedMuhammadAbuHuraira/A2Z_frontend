"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaBath, FaBed, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";

const properties = [
  {
    id: 1,
    title: "Luxury Family Home",
    location: "Princeton, New Jersey",
    price: "$850,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    image: "/images/a1.jpg",
  },
  {
    id: 2,
    title: "Modern Townhouse",
    location: "Edison, New Jersey",
    price: "$620,000",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    image: "/images/a2.jpg",
  },
  {
    id: 3,
    title: "Waterfront Condo",
    location: "Asbury Park, New Jersey",
    price: "$540,000",
    beds: 2,
    baths: 2,
    sqft: "1,450",
    image: "/images/a3.png",
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured <span className="text-blue-600">Properties</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
            Explore our hand-picked listings of the most desirable homes.
          </p>
        </motion.div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((house) => (
            <motion.div
              key={house.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="relative h-60 w-full">
                <Image
                  src={house.image}
                  alt={house.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-lg shadow">
                  For Sale
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{house.title}</h3>

                <div className="flex items-center text-gray-600 mt-2">
                  <FaMapMarkerAlt className="mr-2 text-blue-500" />
                  {house.location}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaBed className="text-blue-500" /> {house.beds} Beds
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaBath className="text-blue-500" /> {house.baths} Baths
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaRulerCombined className="text-blue-500" /> {house.sqft} sqft
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-2xl font-bold text-blue-600">{house.price}</p>
                  <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
