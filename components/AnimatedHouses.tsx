"use client";

import { motion } from "framer-motion";

// ================================
// ⭐ FIXED VARIANTS WITH "as any"
// ================================
const houseAnimation: any = {
  hidden: { opacity: 0, y: 80, scale: 0.7 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.6,
      duration: 0.8,
      type: "spring",
      stiffness: 120,
    },
  }),
};

const float: any = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const AnimatedHouses = () => {
  const houses = [
    {
      title: "Your Dream Begins",
      text: "We help you discover the perfect neighborhood & lifestyle.",
      color: "#3B82F6",
      svg: (
        <svg width="140" height="140" viewBox="0 0 300 300">
          <polygon
            points="150,40 40,140 260,140"
            fill="#f7d7aa"
            stroke="#b38761"
            strokeWidth="8"
          />
          <rect
            x="70"
            y="140"
            width="160"
            height="110"
            fill="#ffe9cd"
            stroke="#b38761"
            strokeWidth="8"
          />
          <rect x="130" y="180" width="40" height="70" fill="#d7b28a" />
        </svg>
      ),
    },

    {
      title: "Your Home Takes Shape",
      text: "Tour properties & experience homes like never before.",
      color: "#10B981",
      svg: (
        <svg width="150" height="150" viewBox="0 0 300 300">
          <polygon
            points="150,30 20,150 280,150"
            fill="#cce8ff"
            stroke="#5a87b5"
            strokeWidth="8"
          />
          <rect
            x="60"
            y="150"
            width="180"
            height="110"
            fill="#e8f4ff"
            stroke="#5a87b5"
            strokeWidth="8"
          />
          <rect x="135" y="190" width="40" height="70" fill="#94b8d6" />
        </svg>
      ),
    },

    {
      title: "Your Future Is Ready",
      text: "Finalize, close & move into the home you love.",
      color: "#8B5CF6",
      svg: (
        <svg width="160" height="160" viewBox="0 0 300 300">
          <polygon
            points="150,20 10,160 290,160"
            fill="#e1d4ff"
            stroke="#7a5ab8"
            strokeWidth="8"
          />
          <rect
            x="80"
            y="160"
            width="140"
            height="110"
            fill="#f2eaff"
            stroke="#7a5ab8"
            strokeWidth="8"
          />
          <rect x="135" y="200" width="40" height="70" fill="#bca7e8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          The Journey of{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Your Home
          </span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Watch your dream home come to life — one beautiful step at a time.
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        {houses.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={houseAnimation as any}  
            className="flex flex-col items-center"
          >
            <motion.div variants={float as any} animate="animate">
              {item.svg}
            </motion.div>

            {/* Title */}
            <h3
              className="text-2xl font-bold mt-6"
              style={{ color: item.color }}
            >
              {item.title}
            </h3>

            {/* Popup Box */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.6 + 0.4, duration: 0.6 }}
              className="mt-4 bg-white shadow-lg p-4 rounded-2xl border border-gray-100 max-w-xs"
            >
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedHouses;
