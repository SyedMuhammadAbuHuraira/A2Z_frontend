"use client";

import { EffectProps } from "../types";

const ParallaxStars = ({ theme, scrollProgress = 0 }: EffectProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: theme.primary,
            opacity: Math.random() * 0.8 + 0.2,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            transform: `translateY(${scrollProgress * -50}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxStars;