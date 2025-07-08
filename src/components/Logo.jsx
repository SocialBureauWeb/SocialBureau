import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Logo({ onComplete }) {
  const [userInteracted, setUserInteracted] = useState(false);
  const [start, setStart] = useState(false);
  const [showRest, setShowRest] = useState(false);

  const word = "SocialBureau".split("");

  useEffect(() => {
    if (!userInteracted) return;

    const t1 = setTimeout(() => setStart(true), 500);
    const t2 = setTimeout(() => setShowRest(true), 1300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [userInteracted]);

  useEffect(() => {
    if (showRest && userInteracted) {
      word.forEach((letter, index) => {
        if (letter !== "B") {
          setTimeout(() => {
            const audio = new Audio("/assets/key.mp3");
            audio.volume = 0.4;
            audio.play().catch((e) => {
              console.warn("Audio play error:", e);
            });
          }, 100 * index);
        }
      });

      const scrollDelay = word.length * 100 + 1000;
      const t = setTimeout(() => {
        if (onComplete) onComplete();
      }, scrollDelay);

      return () => clearTimeout(t);
    }
  }, [showRest, userInteracted]);

  return (
    <div
      onClick={() => setUserInteracted(true)}
      style={{
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "clamp(2rem, 6vw, 4rem)",
        fontFamily: "MyFont, sans-serif",
        overflow: "hidden",
        cursor: !userInteracted ? "pointer" : "default",
        transition: "transform 1s ease-in-out",
        transform: showRest ? "scale(1.7)" : "scale(1)",
        textAlign: "center",
        padding: "0 1rem",
      }}
    >
      {!userInteracted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 1, 0.8, 1],
            scale: [0.8, 1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 10px #fff",
            color: "#ff4d4d",
          }}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            color: "#fff",
            cursor: "pointer",
            textAlign: "center",
            padding: "0 0.5rem",
          }}
        >
          Click to start
        </motion.div>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "0.05em",
            position: "relative",
            letterSpacing: "-0.03em",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {word.map((letter, index) => {
            const isB = letter === "B";
            return (
              <span
                key={index}
                style={{
                  color: isB ? "red" : "white",
                  position: "relative",
                  transform: isB
                    ? start
                      ? "translate(0, 0)"
                      : "translate(-15vw, 0)"
                    : "none",
                  opacity: !isB && showRest ? 1 : !isB ? 0 : 1,
                  transition: isB
                    ? "transform 0.8s ease"
                    : `opacity 0.5s ease ${0.1 * index}s`,
                  fontSize: "clamp(2rem, 6vw, 4rem)",
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
