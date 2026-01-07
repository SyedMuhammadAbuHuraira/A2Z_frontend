"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaTimes } from "react-icons/fa";

const InteractiveFlipBook = ({ theme }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -5, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {/* Button */}
        <div className="relative w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-2xl"
             style={{
               background: theme.gradient,
               color: "white",
               boxShadow: `0 10px 30px ${theme.glow}`
             }}>
          <FaBookOpen />
        </div>
      </motion.button>
    </div>
  );
};

export default InteractiveFlipBook;