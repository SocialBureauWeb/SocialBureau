import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Logo from "./Logo";

const HomeIntro = () => {
  const paragraphRef = useRef(null);

  const isInView = useInView(paragraphRef, {
    margin: "-20% 0px -20% 0px",
  });


  const paragraph = `SocialBureau isn’t your typical performance agency. We’re the growth engine behind niche, high-velocity brands looking to scale smarter and faster. No fluff, no vanity metrics—just cultural fluency, ROI-obsession, and surgical strategy that moves the needle where it matters.`;
  const words = paragraph.split(" ");

  return (
    <div className="w-full text-white bg-black overflow-hidden">
      {/* <section className="h-screen w-full relative z-10">
  <Logo />
</section> */}
<section className="relative z-20">
      <div
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-40 bg-black overflow-hidden"
      >
        {/* Gradients */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-500 via-transparent to-transparent rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-red-700 via-transparent to-transparent rounded-full blur-2xl z-0"></div>

        {/* Main Content */}
        <div className="relative z-10 text-white text-center">
          <h1
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-10 sm:leading-3 md:leading-15 lg:leading-20 font-serif font-normal"
          >
            Unfair Advantage for Niche<br /> Brands in Noisy Markets
          </h1>

          <div className="flex flex-col lg:flex-row items-center mt-20 px-[8vw]">
            <div className="flex-3 text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-10 lg:leading-15 font-sans">
                We engineer full-funnel growth strategies that{" "}
                <span className="text-[#ff0000] font-bold" style={{fontFamily:'Arial'}}>outperform</span>,
                not just perform. Powered by precision, insight, and
                vertical-native expertise.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[10vh] px-6 lg:px-40 text-white text-center">
        <p
  ref={paragraphRef}
  className="text-xl sm:text-xl md:text-2xl lg:text-3xl leading-relaxed flex flex-wrap justify-center gap-x-1"
>
  {words.map((word, index) => {
    if (index === 0 && word.startsWith("SocialBureau")) {
      return (
        <motion.span
          key={index}
          animate={
            isInView
              ? { scale: 1, opacity: 1 }
              : { scale: 0.8, opacity: 0.2 }
          }
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="inline-block"
          style={{ fontFamily: "MyFont, sans-serif" }}
        >
          Social
          <span className="text-[#ff0000]">B</span>
          ureau
          {word.length > "SocialBureau".length
            ? word.slice("SocialBureau".length)
            : ""}
          &nbsp;
        </motion.span>
      );
    }
    return (
      <motion.span
        key={index}
        animate={
          isInView
            ? { scale: 1, opacity: 1 }
            : { scale: 0.8, opacity: 0.2 }
        }
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="inline-block"
      >
        {word}&nbsp;
      </motion.span>
    );
  })}
</p>

      </div>
      </section>
    </div>
  );
};

export default HomeIntro;
