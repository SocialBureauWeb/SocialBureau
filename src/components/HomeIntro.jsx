import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const HomeIntro = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
 const paragraphRef = useRef(null);
  const isInView = useInView(paragraphRef, {
    margin: "-20% 0px -20% 0px",
  });

  // Plain text without HTML
  const paragraph = `SocialBureau isn’t your typical performance agency. We’re the growth engine behind niche, high-velocity brands looking to scale smarter and faster. No fluff, no vanity metrics—just cultural fluency, ROI-obsession, and surgical strategy that moves the needle where it matters.`;

  const words = paragraph.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsZoomed(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full text-white bg-black overflow-hidden">
     
      {/* Video Zoom Section */}
      <div
        ref={containerRef}
        className="relative flex items-center justify-center"
      >
        <video
          ref={videoRef}
          src="assets/sb.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={`transition-all duration-[1500ms] ease-in-out object-cover z-55
            ${
              isZoomed
                ? "w-full h-full rounded-none"
                : "w-[300px] h-[200px] rounded-xl"
            }`}
        />
        {/* Optional overlay for effect */}
        <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
      </div>

      {/* Bottom Text */}
     <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-40 bg-black overflow-hidden">
  {/* Corner Gradient Overlays */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-500 via-transparent to-transparent rounded-full blur-3xl z-0"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-red-700 via-transparent to-transparent rounded-full blur-2xl z-0"></div>

  {/* Main Content */}
  <div className="relative z-10 text-white text-center">
    <h1 style={{ fontFamily: "Playfair Display, serif" }} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-10 sm:leading-3 md:leading-15 lg:leading-20 font-serif font-normal">
      Unfair Advantage for Niche<br /> Brands in Noisy Markets
    </h1>

    <div className="flex flex-col lg:flex-row items-center mt-20 px-[8vw]">
      <div className="flex-3 text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-10 lg:leading-15 font-sans">
          We engineer full-funnel growth strategies that{" "}
          <span className="text-[#ff0000] font-bold">outperform</span>, not just perform. Powered by precision, insight, and vertical-native expertise.
        </h2>
      </div>
      <div className="flex mt-8 lg:mt-0 items-center">
        <img
  src="assets/decor.png"
  alt="Decorative"
  className="w-48 h-48 object-contain"
  style={{
    animation: "zoomPulse 2s ease-in-out infinite"
  }}
/>
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
  if (word.startsWith("SocialBureau")) {
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
    </div>
  );
};
export default HomeIntro;
