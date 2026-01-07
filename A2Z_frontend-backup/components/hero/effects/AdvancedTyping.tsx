"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaKeyboard, FaMousePointer, FaBolt } from "react-icons/fa";

interface AdvancedTypingProps {
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
}

const AdvancedTyping = ({ theme }: AdvancedTypingProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [userIsTyping, setUserIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");

  const phrases = [
    "Find Your Dream Home 🏡",
    "Sell for Maximum Value 💰",
    "Invest Smartly 📈",
    "Partner with Experts 🤝",
    "Get Cash Offers Fast ⚡",
  ];

  const handleTyping = useCallback(() => {
    const currentPhrase = phrases[currentIndex];
    
    if (!isDeleting && displayText.length < currentPhrase.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, displayText.length - 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && displayText.length === currentPhrase.length) {
      // Pause before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next phrase
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, displayText, isDeleting, phrases]);

  useEffect(() => {
    if (!userIsTyping) {
      const timer = setTimeout(handleTyping, 100);
      return () => clearTimeout(timer);
    }
  }, [handleTyping, userIsTyping]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Handle user typing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.length === 1 && e.key.match(/[a-zA-Z0-9\s]/)) {
        setUserIsTyping(true);
        setTypedText((prev) => prev + e.key);
      } else if (e.key === "Backspace") {
        setTypedText((prev) => prev.slice(0, -1));
      } else if (e.key === "Enter") {
        setUserIsTyping(false);
        setTypedText("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main typing area */}
      <div className="relative bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-md 
                      rounded-2xl p-8 border border-white/10 shadow-2xl">
        
        {/* Keyboard icon */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
                            rounded-full blur-md opacity-50" />
            <div className="relative bg-gray-900 rounded-full p-3 border border-white/20">
              <FaKeyboard className="text-xl text-white" />
            </div>
          </div>
        </div>

        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Instruction */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 
                         border border-white/10 mb-4"
            >
              <FaMousePointer className="text-blue-400" />
              <span className="text-sm text-gray-300">
                {userIsTyping ? "You're typing! Press Enter to continue" : "Try typing something!"}
              </span>
            </motion.div>
          </div>

          {/* Display area */}
          <div className="min-h-[200px] bg-black/30 rounded-xl p-6 border border-white/10 
                          shadow-inner relative overflow-hidden">
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-500/50 
                            rounded-tl-xl" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-500/50 
                            rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-500/50 
                            rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-500/50 
                            rounded-br-xl" />

            {/* Typing text */}
            <div className="font-mono">
              <div className="flex items-start">
                <span className="text-green-400 mr-3">$</span>
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={userIsTyping ? "user" : "auto"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-3xl md:text-5xl font-bold"
                    >
                      {userIsTyping ? (
                        <span className="text-white">
                          {typedText}
                          <span
                            className={`inline-block w-[3px] h-[1.2em] bg-green-400 ml-1 
                                       align-middle ${showCursor ? "opacity-100" : "opacity-0"}`}
                            style={{ boxShadow: "0 0 10px #10B981" }}
                          />
                        </span>
                      ) : (
                        <span className="text-white">
                          {displayText}
                          <motion.span
                            className="inline-block w-[3px] h-[1.2em] bg-green-400 ml-1 align-middle"
                            animate={{ opacity: showCursor ? 1 : 0 }}
                            style={{ boxShadow: "0 0 10px #10B981" }}
                          />
                        </span>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Progress bar */}
              <motion.div
                className="h-1 bg-gray-800 rounded-full mt-6 overflow-hidden"
                initial={{ width: "0%" }}
                animate={{
                  width: userIsTyping
                    ? `${(typedText.length / 50) * 100}%`
                    : `${(displayText.length / phrases[currentIndex].length) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ background: theme.gradient }}
                />
              </motion.div>

              {/* Stats */}
              <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <FaBolt className="text-yellow-500" />
                  <span>
                    {userIsTyping
                      ? `Characters: ${typedText.length}`
                      : `Phrase ${currentIndex + 1}/${phrases.length}`}
                  </span>
                </div>
                <div className="text-xs">
                  {userIsTyping ? "Interactive Mode" : "Auto Mode"}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive keyboard */}
          <div className="grid grid-cols-10 gap-2 mt-6">
            {["A2Z", "REAL", "ESTATE", "BUY", "SELL", "INVEST", "HOME", "CASH", "DREAM", "NOW"].map(
              (key, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setUserIsTyping(true);
                    setTypedText((prev) => prev + key.toLowerCase());
                  }}
                  className="py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 
                             text-sm font-medium text-gray-300 hover:text-white transition-all 
                             backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}15, ${theme.secondary}15)`,
                  }}
                >
                  {key}
                </motion.button>
              )
            )}
          </div>

          {/* Hint text */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              Type anything to interact • Press Enter to reset • Watch the magic happen
            </p>
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ background: theme.accent }}
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0,
              }}
              animate={{
                y: [null, "-100px"],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedTyping;