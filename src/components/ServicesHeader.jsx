import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const ServicesHeader = forwardRef(function ServicesHeader({ onArrowClick }, ref) {
  return (
    <section
      ref={ref}
      className="flex flex-col justify-center items-center text-center pt-10 pb-8 px-10 bg-black h-[100vh]"
    >
      <h1 className="text-4xl xs:text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-4 text-white">
        Services Built for{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ff0000]">High-Velocity Growth</span>
      </h1>
      <div className="flex items-center justify-center mb-2 py-2">
        <span className="block w-10 sm:w-25 h-0.5 bg-[#ff0000] mr-2 sm:mr-3" />
      </div>
      <p className="max-w-4xl text-base xs:text-lg sm:text-xl text-gray-400 font-medium ">
        From funnel architecture to automated distribution, every Social Bureau service is built to fix leaky journeys, kill bloated CAC, and multiply your performance metrics.
      </p>
      <br />
      <br />
      <motion.img
        src="/assets/arrow.png" // Replace with your image path
        alt="Scroll Down"
        className="mx-auto w-8 h-8 my-10 cursor-pointer" // adjust size if needed
        animate={{
          y: [0, 10, 0], // bounce up and down
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={onArrowClick}
        tabIndex={0}
        style={{ outline: "none" }}
        onKeyPress={e => {
          if (e.key === "Enter" || e.key === " ") {
            onArrowClick();
          }
        }}
      />
    </section>
  );
});

export default ServicesHeader;