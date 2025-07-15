import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const cards = [
  { title: "Full-Funnel Performance Marketing", color: "#c00", textColor: "#fff" },
  { title: "API-Driven Growth Loops", color: "#111", textColor: "#fff" },
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
  height: 600vh;
  background: #000;
  font-family: 'EB Garamond', serif;
}

@media (max-width: 800px) {
  .scroll-root {
    height: 300vh; /* ↓ Reduce on mobile to avoid visual dominance */
  }
}

        .sticky-grid {
          position: sticky;
          top: 0;
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
          font-size: 2.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        @media (max-width: 800px) {
          .sticky-grid {
            display: flex;
            flex-direction: column;
            padding: 2rem 1rem;
            gap: 1.5rem;
          }
          .center-text {
            order: -1;
            font-size: 1.3rem;
            padding: 5rem;
          }
        }
      `}</style>

      <div className="sticky-grid">
        <AnimatedCard card={cards[0]} index={0} slow />
        <AnimatedCard card={cards[2]} index={2} />
        <div className="center-text ">Real-Time KPI Visibility</div>
        <AnimatedCard card={cards[1]} index={1} slow />
        <AnimatedCard card={cards[3]} index={3} />
      </div>
    </div>
  );
}
<div style={{ height: '100vh' }} /> // pushes the next section below

function AnimatedCard({ card, index, slow = false }) {
  const { scrollYProgress } = useScroll();
  const total = 5;
  const step = 1 / total;

  const start = index * step;
  const end = start + step;

  const range = slow
    ? [start, start + step * 0.75, end]
    : [start, (start + end) / 2, end];

  const y = useTransform(scrollYProgress, range, [150, 0, -30]);
  const opacity = useTransform(scrollYProgress, range, [0, 1, 1]);
  const scale = useTransform(scrollYProgress, range, [0.95, 1.05, 1]);

  const springY = useSpring(y, { stiffness: 70, damping: 20 });
  const springScale = useSpring(scale, { stiffness: 120, damping: 15 });

  return (
    <motion.div
      className="min-h-[24vh] lg:h-[30vh] w-[80vw] sm:w-[60vw] lg:w-[30vw] lg:text-3xl text-xl"
      style={{
        background: card.color,
        color: card.textColor,
        borderRadius: "24px",
        padding: "2rem",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        y: springY,
        scale: springScale,
        opacity,
      }}
    >
      {card.title}
    </motion.div>
  );
}
