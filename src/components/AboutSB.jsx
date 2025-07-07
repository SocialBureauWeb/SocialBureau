import React, { useEffect, useRef } from "react";
import { AboutHeading } from "./AboutHeading";

function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const AboutSB = () => {
  const text =
    "At Social Bureau, we don’t just build marketing campaigns—we architect high-performance ecosystems. Operating under the strategic umbrella of Trillion Edition, we fuse analytical muscle with cultural nuance to drive real outcomes for niche, high-growth brands.";

  const words = text.match(/[\w’'-]+|[.,—]/g);

  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((span, i) => {
      if (span) {
        const x = randBetween(-150, 150);
        const y = randBetween(-80, 80);
        span.style.transform = `translate(${x}px, ${y}px) scale(0.7)`;
        span.style.opacity = 0;

        setTimeout(() => {
          span.style.transition =
            "transform 0.8s cubic-bezier(.5,1.6,.3,1), opacity 0.8s";
          span.style.transform = "translate(0, 0) scale(1)";
          span.style.opacity = 1;
        }, 400 + i * 40); 
      }
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        justifyContent:"center",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 100% 60% at 0% 50%, rgba(139,0,0,0.75), transparent 65%), radial-gradient(ellipse 100% 60% at 100% 50%, rgba(139,0,0,0.75), transparent 65%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.38)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2}}>
        <AboutHeading />
        <style>{`
          .aboutsb-responsive-p {
            font-size: 25px;
            border-radius: 1.5rem;
            margin: 0 auto;
            padding: 3vw;
            color: #fff;
            z-index: 3;
            width:70vw;
            text-align: center;
            line-height: 1.4;
            /* Glass effect */
            -webkit-backdrop-filter: blur(16px) saturate(160%);
            box-shadow: 0 6px 32px 0 rgba(40,0,0,0.12);
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
        <p className="aboutsb-responsive-p text-center hover:scale-110">
          {words.map((word, idx) => (
            <span
              key={idx}
              ref={el => (refs.current[idx] = el)}
              style={{
                display: "inline-block",
                whiteSpace: word.match(/[.,—]/) ? "normal" : "pre",
                marginRight: word.match(/[.,—]/) ? 0 : 6,
                marginLeft: word.match(/[.,—]/) ? 0 : 0,
                opacity: 0, 
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