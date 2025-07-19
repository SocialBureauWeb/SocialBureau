import React from "react";
import { motion } from "framer-motion";
import Hometagline from "./Hometagline";

const text = "SocialBureau";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedTextImageSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center bg-black text-white md:pl-20 h-[100vh]">
  {/* Text on Left */}
  <div className="w-full md:w-[50vw] flex flex-col items-center md:items-start">
    <motion.div
      className="text-5xl md:text-6xl leading-snug tracking-wide"
      style={{ fontFamily: "MyFont, sans-serif" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
          className={char === "B" ? "text-[#ff0000]" : ""}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>

  {/* Tagline */}
  <div className="w-full md:w-[50vw] flex justify-center md:justify-start mt-15 md:mt-0" style={{ fontFamily: 'Inter' }}>
    <Hometagline />
  </div>
</div>

      {/* Image on Right */}
      {/* Image on Right with gradient overlay */}
<div className="mt-8 md:mt-0 relative overflow-hidden rounded-xl shadow-xl md:h-[100vh] w-[50vw] sm:w-[100vw] sm:h-0">
  {/* The Image */}
  <img
    src="/assets/people1.png"
    alt="SocialBureau"
    className="md:w-[90vw] md:h-[100vh] w-[100vw] h-0 object-cover"
  />

  {/* Left Gradient */}
  <div className="absolute top-0 left-0 h-0 md:h-[100vh] w-1/4 bg-gradient-to-r from-black to-transparent z-15" />

  {/* Right Gradient */}
  <div className="absolute top-0 right-0 h-0 md:h-[100vh] w-1/4 bg-gradient-to-l from-black to-transparent z-50" />
</div>

    </div>
  );
}
