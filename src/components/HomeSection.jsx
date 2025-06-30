import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HomeSection = () => {
  const paragraphRef = useRef(null);
  const isInView = useInView(paragraphRef, {
    margin: "-20% 0px -20% 0px",
  });

  // Plain text without HTML
  const paragraph = `SocialBureau isn’t your typical performance agency. We’re the growth engine behind niche, high-velocity brands looking to scale smarter and faster. No fluff, no vanity metrics—just cultural fluency, ROI-obsession, and surgical strategy that moves the needle where it matters.`;

  const words = paragraph.split(" ");

  return (
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
  );
};

export default HomeSection;
