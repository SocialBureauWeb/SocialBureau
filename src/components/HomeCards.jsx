import React from "react";
import { motion } from "framer-motion";

const cards = [
  { title: "Full-Funnel Performance Marketing", color: "#c00", textColor: "#fff" },
  { title: "API-Driven Growth Loops", color: "#fff", textColor: "#111" },
  { title: "Vertical-Specific Strategy", color: "#fff", textColor: "#111" },
  { title: "Advanced CRO & Lifecycle Systems", color: "#c00", textColor: "#fff" },
];

export default function GridScrollCards() {
  return (
    <div className="scroll-root">
      <style>{`
        .scroll-root {
          position: relative;
          z-index: 1;
          height: 100vh;
          background: #000;
          font-family: 'EB Garamond', serif;
        }

        .sticky-grid {
          position: relative;
          height: 100vh;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 2rem;
          padding: 3rem;
          align-items: center;
          justify-items: center;
        }

        .center-text {
          grid-column: 2;
          grid-row: 1 / span 2;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        @media (max-width: 800px) {
          .scroll-root {
            height: auto;
            padding-bottom: 4rem;
          }

          .sticky-grid {
            display: flex;
            flex-direction: column;
            padding: 2rem 1rem;
            gap: 1.5rem;
          }

          .center-text {
            order: -1;
            padding: 5rem;
          }
        }
      `}</style>

      <div className="sticky-grid">
        <FloatingCard card={cards[0]} delay={0} />
        <FloatingCard card={cards[2]} delay={0.3} />
        <div className="center-text lg:max-w-[15vw] lg:text-3xl bg-[#111] rounded-full p-[2rem] min-h-[30vh]">Real-Time KPI Visibility</div>
        <FloatingCard card={cards[1]} delay={0.6} />
        <FloatingCard card={cards[3]} delay={0.9} />
      </div>
    </div>
  );
}

function FloatingCard({ card, delay }) {
  return (
    <motion.div
      className="min-h-[24vh] lg:h-[30vh] w-[80vw] sm:w-[60vw] lg:max-w-[15vw] lg:text-3xl text-xl rounded-full"
      style={{
        background: card.color,
        color: card.textColor,
        padding: "2rem",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      animate={{
        y: [0, -12, 0, 12, 0],
        rotate: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        delay,
      }}
    >
      {card.title}
    </motion.div>
  );
}
