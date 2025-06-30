import React, { useEffect, useRef } from "react";
import { Heading } from "./Heading";

// Utility to get a random integer between min and max (inclusive)
function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const AboutSB = () => {
  const text =
    "At Social Bureau, we don’t just build marketing campaigns—we architect high-performance ecosystems. Operating under the strategic umbrella of Trillion Edition, we fuse analytical muscle with cultural nuance to drive real outcomes for niche, high-growth brands.";

  // Split the text into words and punctuation as separate tokens
  const words = text.match(/[\w’'-]+|[.,—]/g);

  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((span, i) => {
      if (span) {
        // Assign a random initial transform and opacity
        const x = randBetween(-150, 150);
        const y = randBetween(-80, 80);
        span.style.transform = `translate(${x}px, ${y}px) scale(0.7)`;
        span.style.opacity = 0;

        // Animate to original position (with a stagger)
        setTimeout(() => {
          span.style.transition =
            "transform 0.8s cubic-bezier(.5,1.6,.3,1), opacity 0.8s";
          span.style.transform = "translate(0, 0) scale(1)";
          span.style.opacity = 1;
        }, 400 + i * 40); // staggered by word
      }
    });
  }, []);

  const bgImageUrl = "/assets/back.jpeg";

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          // backgroundImage: `url('${bgImageUrl}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          zIndex: 1,
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <Heading />
        <style>{`
          .aboutsb-responsive-p {
  font-size: 30px;
  border-radius: 1.5rem;
  margin: 0 auto;
  padding: 3vw;
  color: #fff;
  background: none;
  z-index: 3;
  text-align: center;
  max-width: 1200px;
  line-height: 1.4;
}

          @media (max-width: 900px) {
            .aboutsb-responsive-p {
              padding: 40px 16px;
              font-size: 1.28rem;
            }
          }
          @media (max-width: 600px) {
            .aboutsb-responsive-p {
              font-size: 1.1rem;
              padding: 16px;
              word-break: break-word;
            }
          }
          @media (max-width: 400px) {
            .aboutsb-responsive-p {
              font-size: 20px;
              padding: 25px;
            }
          }
        `}</style>
        <p className="aboutsb-responsive-p text-center">
          {words.map((word, idx) => (
            <span
              key={idx}
              ref={el => (refs.current[idx] = el)}
              style={{
                display: "inline-block",
                whiteSpace: word.match(/[.,—]/) ? "normal" : "pre",
                marginRight: word.match(/[.,—]/) ? 0 : 6,
                marginLeft: word.match(/[.,—]/) ? 0 : 0,
                opacity: 0, // will be animated to 1
                transform: "none"
              }}
            >
              {word}
              {word.match(/[.,—]/) ? "\u00A0" : " "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};