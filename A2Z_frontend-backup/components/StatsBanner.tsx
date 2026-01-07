"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const images = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000",
    quote: "Luxury is not a price point — it’s an experience.",
    sub: "Helping families find extraordinary homes.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?w=2000",
    quote: "Your dream home is closer than you think.",
    sub: "We turn possibilities into reality.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=2000",
    quote: "Invest with confidence. Live with purpose.",
    sub: "Smart investments. Beautiful living.",
  },
];

export default function StatsBanner() {
  return (
    <section className="relative w-full h-[90vh] md:h-[85vh] overflow-hidden">
      {/* Slider */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center duration-700"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 md:bg-black/30 backdrop-blur-[2px]" />

            {/* Floating 3D Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1 }}
              className="absolute z-10 left-6 right-6 md:left-20 md:right-auto bottom-20 md:bottom-28 max-w-xl"
            >
              <motion.div
                whileHover={{ scale: 1.03, rotateX: 5 }}
                className="p-6 md:p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                  {item.quote}
                </h2>

                <p className="text-lg md:text-xl text-white/80 mt-4">
                  {item.sub}
                </p>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Animated Glow Orbs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/30 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full animate-pulse-slower" />

      {/* Optional small particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
