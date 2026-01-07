"use client";

import { motion } from "framer-motion";

const FloatingElements = ({ theme }: any) => {
  const shapes = [
    { icon: "🏠", size: 40, x: "10%", y: "20%", duration: 15 },
    { icon: "💰", size: 30, x: "80%", y: "30%", duration: 20 },
    { icon: "📈", size: 35, x: "20%", y: "70%", duration: 18 },
    { icon: "⭐", size: 25, x: "85%", y: "75%", duration: 22 },
    { icon: "🏢", size: 45, x: "15%", y: "85%", duration: 25 },
    { icon: "🤝", size: 32, x: "90%", y: "15%", duration: 17 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            fontSize: `${shape.size}px`,
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {shape.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;