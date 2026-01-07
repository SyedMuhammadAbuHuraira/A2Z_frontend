"use client";

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
  color: string;
}

const AnimatedStars = ({ 
  count = 30, 
  starColors = ["#FFD700", "#FFED85", "#FFF3B0", "#FFFFFF"],
  minSize = 8,
  maxSize = 16
}: { 
  count?: number;
  starColors?: string[];
  minSize?: number;
  maxSize?: number;
}) => {
  const [stars, setStars] = useState<Star[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Generate initial stars
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < count; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * (maxSize - minSize) + minSize,
          opacity: Math.random() * 0.6 + 0.3, // 0.3 to 0.9 opacity
          delay: Math.random() * 2,
          duration: Math.random() * 1.5 + 1, // 1 to 2.5 seconds
          color: starColors[Math.floor(Math.random() * starColors.length)]
        });
      }
      setStars(newStars);
      // Trigger animation after stars are set
      setTimeout(() => setIsVisible(true), 100);
    };

    generateStars();

    // Optional: Re-generate stars on window resize
    const handleResize = () => {
      setIsVisible(false);
      setTimeout(() => generateStars(), 300);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [count, starColors, minSize, maxSize]);

  // CSS for the twinkling animation
  const starAnimationStyle = `
    @keyframes twinkle {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.2); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(180deg); }
    }
    
    .star-twinkle {
      animation: twinkle var(--duration) ease-in-out infinite;
      animation-delay: var(--delay);
    }
    
    .star-float {
      animation: float calc(var(--duration) * 2) ease-in-out infinite;
      animation-delay: var(--delay);
    }
  `;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <style>{starAnimationStyle}</style>
      
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute transition-opacity duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            '--delay': `${star.delay}s`,
            '--duration': `${star.duration}s`,
          } as React.CSSProperties}
        >
          {/* Main star */}
          <div 
            className="star-twinkle"
            style={{
              fontSize: `${star.size}px`,
              color: star.color,
              opacity: star.opacity,
              filter: 'drop-shadow(0 0 4px rgba(255, 215, 0, 0.5))',
              transition: 'all 0.3s ease',
            }}
          >
            ★
          </div>
          
          {/* Optional: Subtle glow effect */}
          <div 
            className="absolute inset-0 star-float"
            style={{
              fontSize: `${star.size * 1.5}px`,
              color: star.color,
              opacity: 0.1,
              filter: 'blur(2px)',
              marginLeft: '-25%',
              marginTop: '-25%',
            }}
          >
            ★
          </div>
        </div>
      ))}
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-indigo/5" />
    </div>
  );
};

// Memoized version for better performance
export default AnimatedStars;

// Alternative: Constellation version (more elegant)
export const ConstellationStars = ({ count = 15 }: { count?: number }) => {
  const [lines, setLines] = useState<Array<{ x1: number; y1: number; x2: number; y2: number }>>([]);

  useEffect(() => {
    const points = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));

    const newLines: Array<{ x1: number; y1: number; x2: number; y2: number }> = [];
    
    // Create connections between nearby points
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 30) { // Connect points within 30% distance
          newLines.push({
            x1: points[i].x,
            y1: points[i].y,
            x2: points[j].x,
            y2: points[j].y,
          });
        }
      }
    }
    
    setLines(newLines);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="w-full h-full">
        {/* Connection lines */}
        {lines.map((line, i) => (
          <line
            key={i}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="rgba(255, 215, 0, 0.15)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
        
        {/* Stars */}
        {[...Array(count)].map((_, i) => (
          <circle
            key={i}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r={Math.random() * 2 + 1}
            fill="#FFD700"
            className="animate-pulse"
            style={{
              opacity: Math.random() * 0.6 + 0.3,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 1.5 + 1}s`,
            }}
          />
        ))}
      </svg>
      
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-brand-indigo/10" />
    </div>
  );
};

// Simple static stars (best for performance)
export const StaticStars = ({ count = 50 }: { count?: number }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 3 + 1;
        const opacity = Math.random() * 0.7 + 0.3;
        
        return (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-yellow-200 to-yellow-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              boxShadow: `0 0 ${size * 2}px rgba(255, 215, 0, ${opacity * 0.5})`,
              filter: 'blur(0.5px)',
            }}
          />
        );
      })}
    </div>
  );
};