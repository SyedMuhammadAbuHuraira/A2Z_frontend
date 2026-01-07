"use client";

import { useState } from "react";
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

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ===========================
// ✅ DEFINE PROPERTY INTERFACE
// ===========================
interface Property {
  id: number;
  title: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  desc: string;
  image: string;
  featured: boolean;
  status: string;
}

const FeaturedListings = () => {
  // ===========================
  // ✅ FIXED — PROPER TYPE
  // ===========================
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // ===========================
  // LISTINGS DATA WITH STATUS FIXED
  // ===========================
  const listings: Property[] = [
    {
      id: 1,
      title: "Modern Luxury Home in Princeton",
      price: "$1,250,000",
      address: "123 University Ave, Princeton, NJ",
      beds: 5,
      baths: 4,
      sqft: 4200,
      desc: "Fully renovated luxury home near Princeton University.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
      featured: true,
      status: "For Sale",
    },
    {
      id: 2,
      title: "Townhouse in Jersey City",
      price: "$895,000",
      address: "456 Grove St, Jersey City, NJ",
      beds: 3,
      baths: 3,
      sqft: 1800,
      desc: "Townhouse with skyline views and private rooftop.",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600",
      featured: false,
      status: "For Sale",
    },
    {
      id: 3,
      title: "Investment Multi-Family Property",
      price: "$750,000",
      address: "789 Broadway, New Brunswick, NJ",
      beds: 8,
      baths: 4,
      sqft: 3200,
      desc: "High-income multi-family investment.",
      image:
        "https://images.unsplash.com/photo-1599423300746-b62533397364?w=1600",
      featured: true,
      status: "Investment",
    },
    {
      id: 4,
      title: "Luxury Beachfront Villa",
      price: "$2,850,000",
      address: "Ocean Drive, Long Branch, NJ",
      beds: 6,
      baths: 6,
      sqft: 5200,
      desc: "Stunning ocean views + private beach access.",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1600",
      featured: true,
      status: "For Sale",
    },
    {
      id: 5,
      title: "Suburban Family Home",
      price: "$640,000",
      address: "39 Applewood Ln, Edison, NJ",
      beds: 4,
      baths: 3,
      sqft: 2600,
      desc: "Beautiful neighborhood with top-rated schools.",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600",
      featured: false,
      status: "For Sale",
    },
  ];

  // ===========================
  //        COMPONENT UI
  // ===========================
  return (
    <section className="relative py-24 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase bg-blue-50 px-5 py-2 rounded-full">
            Premium Featured Listings
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-900">
            Browse{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Exclusive Homes
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
            Stunning luxury homes and high-value investment properties.
          </p>
        </div>

        {/* SWIPER */}
        <div className="relative">

          {/* DESKTOP ARROWS */}
          <button
            className="swiper-button-prev hidden lg:flex absolute -left-10 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl hover:bg-blue-600 hover:text-white justify-center items-center transition z-30"
          >
            ❮
          </button>

          <button
            className="swiper-button-next hidden lg:flex absolute -right-10 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl hover:bg-blue-600 hover:text-white justify-center items-center transition z-30"
          >
            ❯
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
            pagination={{ clickable: true }}
            slidesPerGroup={3}
            spaceBetween={25}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              480: { slidesPerView: 1.1, slidesPerGroup: 1 },
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1280: { slidesPerView: 3, slidesPerGroup: 3 },
            }}
            className="pb-16"
          >
            {listings.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProperty(item)}
                  className="cursor-pointer bg-white rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-3xl transition-all duration-500 overflow-hidden relative group"
                >
                  
                  {/* IMAGE */}
                  <div className="relative h-60 md:h-72 overflow-hidden">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40"></div>

                    {/* ACTION BUTTONS */}
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button className="w-9 h-9 bg-white/90 rounded-full shadow flex items-center justify-center text-gray-700 hover:text-red-500 transition">
                        <FaHeart />
                      </button>
                      <button className="w-9 h-9 bg-white/90 rounded-full shadow flex items-center justify-center text-gray-700 hover:text-blue-600 transition">
                        <FaShareAlt />
                      </button>
                    </div>

                    {item.featured && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold shadow">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{item.price}</h3>

                      {/* ⛔ FIXED — NOW TYPE SAFE */}
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-600">
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {item.title}
                    </h4>

                    <p className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                      <FaMapMarkerAlt className="text-gray-400" /> {item.address}
                    </p>

                    {/* AMENITIES */}
                    <div className="grid grid-cols-3 gap-3 mt-4 text-center">
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

                    <button className="w-full py-3 mt-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl font-semibold hover:-translate-y-1 hover:shadow-xl transition">
                      View Details <FaArrowRight className="inline ml-2" />
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* MODAL */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
          >
            
            <div className="relative h-60 w-full">
              <img src={selectedProperty.image} className="w-full h-full object-cover" />

              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 bg-white/90 h-10 w-10 rounded-full shadow flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold">{selectedProperty.title}</h3>
              <p className="text-gray-600">{selectedProperty.address}</p>

              <p className="mt-3 text-gray-700">{selectedProperty.desc}</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default FeaturedListings;
