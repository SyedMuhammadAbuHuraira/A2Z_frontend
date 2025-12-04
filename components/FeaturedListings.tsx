"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaHeart,
  FaShareAlt,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const FeaturedListings = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  // Listings
  const listings = [
    {
      id: 1,
      title: "Modern Luxury Home in Princeton",
      price: "$1,250,000",
      address: "123 University Ave, Princeton, NJ",
      beds: 5,
      baths: 4,
      sqft: 4200,
      desc:
        "A fully renovated modern luxury estate with high ceilings, chef kitchen, marble bathrooms, and premium finishes. Located minutes from Princeton University.",
      status: "For Sale",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
      featured: true,
    },
    {
      id: 2,
      title: "Townhouse in Jersey City",
      price: "$895,000",
      address: "456 Grove St, Jersey City, NJ",
      beds: 3,
      baths: 3,
      sqft: 1800,
      desc:
        "Modern townhouse with skyline views, private rooftop, and spacious living area. Steps away from PATH station.",
      status: "For Sale",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600",
      featured: false,
    },
    {
      id: 3,
      title: "Investment Multi-Family Property",
      price: "$750,000",
      address: "789 Broadway, New Brunswick, NJ",
      beds: 8,
      baths: 4,
      sqft: 3200,
      desc:
        "Excellent rental income potential. 4-unit multi-family property, fully occupied, recently updated kitchens & baths.",
      status: "Investment",
      image:
        "https://images.unsplash.com/photo-1599423300746-b62533397364?w=1600",
      featured: true,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase bg-blue-50 px-5 py-2 rounded-full">
            Premium Featured Listings
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover High-End{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Real Estate
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
            Explore handpicked luxury homes, investment properties, and exclusive real estate opportunities.
          </p>
        </div>

        {/* Slider Outer Container */}
        <div className="relative">

          {/* CUSTOM NAVIGATION BUTTONS */}
          <button
            className="swiper-button-prev absolute -left-10 top-1/2 z-30 transform -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
          >
            ❮
          </button>

          <button
            className="swiper-button-next absolute -right-10 top-1/2 z-30 transform -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
          >
            ❯
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={35}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1.2 },
              1024: { slidesPerView: 2 },
              1350: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {listings.map((item, index) => (
              <SwiperSlide key={item.id}>
                {/* CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProperty(item)}
                  className="group cursor-pointer bg-white rounded-3xl shadow-xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                    {/* Actions */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="w-10 h-10 bg-white/90 shadow rounded-full flex items-center justify-center hover:text-red-500">
                        <FaHeart />
                      </button>
                      <button className="w-10 h-10 bg-white/90 shadow rounded-full flex items-center justify-center hover:text-blue-600">
                        <FaShareAlt />
                      </button>
                    </div>

                    {/* Featured tag */}
                    {item.featured && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold shadow">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{item.price}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-600">
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {item.title}
                    </h4>

                    <p className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <FaMapMarkerAlt className="text-gray-400" /> {item.address}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mt-6 mb-6 text-center">
                      <div>
                        <FaBed className="mx-auto text-gray-400 mb-1" />
                        <p className="font-semibold">{item.beds}</p>
                        <p className="text-xs text-gray-500">Beds</p>
                      </div>
                      <div>
                        <FaBath className="mx-auto text-gray-400 mb-1" />
                        <p className="font-semibold">{item.baths}</p>
                        <p className="text-xs text-gray-500">Baths</p>
                      </div>
                      <div>
                        <FaRulerCombined className="mx-auto text-gray-400 mb-1" />
                        <p className="font-semibold">{item.sqft}</p>
                        <p className="text-xs text-gray-500">Sq Ft</p>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold hover:-translate-y-1 hover:shadow-xl transition">
                      View Details <FaArrowRight className="inline ml-2" />
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 🔥 QUICK VIEW MODAL */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Modal Image */}
            <div className="relative h-72 w-full">
              <img
                src={selectedProperty.image}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 bg-white/90 h-10 w-10 rounded-full shadow flex items-center justify-center hover:bg-red-600 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold">{selectedProperty.title}</h3>
              <p className="text-gray-600 mt-2">{selectedProperty.address}</p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                {selectedProperty.desc}
              </p>

              <div className="grid grid-cols-3 gap-4 mt-6 mb-6 text-center">
                <div>
                  <FaBed className="mx-auto text-gray-400 mb-1" />
                  <p className="font-semibold">{selectedProperty.beds}</p>
                  <p className="text-xs text-gray-500">Beds</p>
                </div>

                <div>
                  <FaBath className="mx-auto text-gray-400 mb-1" />
                  <p className="font-semibold">{selectedProperty.baths}</p>
                  <p className="text-xs text-gray-500">Baths</p>
                </div>

                <div>
                  <FaRulerCombined className="mx-auto text-gray-400 mb-1" />
                  <p className="font-semibold">
                    {selectedProperty.sqft.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">Sq Ft</p>
                </div>
              </div>

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-xl transition">
                Contact About This Property
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default FeaturedListings;
