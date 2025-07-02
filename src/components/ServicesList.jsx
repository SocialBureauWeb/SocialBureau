import React, { forwardRef, useEffect, useRef, useState } from "react";

// ICONS
const icons = [
  <i className="fas fa-chart-line"></i>,
  <i className="fas fa-sitemap"></i>,
  <i className="fas fa-bullseye"></i>,
  <i className="fas fa-comments"></i>,
  <i className="fas fa-cogs"></i>,
  <i className="fas fa-crosshairs"></i>,
  <i className="fas fa-users"></i>,
  <i className="fas fa-envelope"></i>,
  <i className="fas fa-rocket"></i>,
];

const cardImages = [
  "assets/service1.jpeg",
  "assets/service2.jpeg",
  "assets/service3.jpeg",
  "assets/service4.jpeg",
  "assets/service5.jpeg",
  "assets/service6.jpeg",
  "assets/service7.jpeg",
  "assets/service8.jpeg",
  "assets/service9.jpeg",
];

const cards = [
  {
    title: "Full-Funnel Performance Marketing",
    description:
      "Click costs don't matter if they don't convert. We deploy vertical-informed models and 14-day sprint cycles tied to LTV, not vanity ROAS.",
  },
  {
    title: "Funnel Architecture & Growth Pathways",
    description:
      "Stop leaking revenue. We map awareness to LTV with customized, P&L-aligned blueprints.",
  },
  {
    title: "Conversion Rate Optimization & Landing Systems",
    description:
      "Built with psychology, tested with micro-experiments. Bounce less. Convert more.",
  },
  {
    title: "Messaging & Positioning for Niche Brands",
    description:
      "Generic messaging kills growth. We uncover category-specific codes using ethnographic and linguistic analysis.",
  },
  {
    title: "API-Driven Growth & Automated Distribution",
    description:
      "Eliminate friction. Merge engineering + marketing for compounding growth loops.",
  },
  {
    title: "Niche Market Penetration Strategy",
    description:
      "We speak fluent healthtech, crypto, fintech, and more. Penetrate with precision.",
  },
  {
    title: "Influencer & UGC Growth Engines",
    description:
      "No vanity metrics. Just creator content built for performance and attribution.",
  },
  {
    title: "Lifecycle & Email Automation Strategy",
    description:
      "Trigger behavior-based flows that drive revenue—measured on 30-day impact.",
  },
  {
    title: "Software GTM & Growth Architecture",
    description:
      "PLG meets sales-assist in a system that converts trials and grows MRR.",
  },
];

function useActiveSection(refs) {
  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      let closestIdx = 0;
      let minDist = Infinity;
      refs.forEach((ref, idx) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const mid = (rect.top + rect.bottom) / 2;
          const dist = Math.abs(mid - centerY);
          if (dist < minDist) {
            minDist = dist;
            closestIdx = idx;
          }
        }
      });
      setActiveIdx(closestIdx);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);
  return activeIdx;
}
const GradientCircle = ({ icon }) => (
  <div className="flex items-center justify-center w-full h-full">
    <div
      className="relative"
      style={{
        width: "min(32vw, 520px)",
        height: "min(32vw, 520px)",
        minWidth: 320,
        minHeight: 320,
        maxWidth: 520,
        maxHeight: 520,
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 520 520" style={{ position: "absolute", top: 0, left: 0 }}>
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="100%" stopColor="#000" />
          </radialGradient>
        </defs>
        <circle cx="260" cy="260" r="260" fill="url(#grad)" />
      </svg>
      <div
        className="absolute"
        style={{
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 120, height: 120, borderRadius: "50%"
        }}
      >
        <span style={{
          fontSize: "4rem",
          color: "white",
          filter: "drop-shadow(0 0 8px #fff5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 120, height: 120,
        }}>
          {icon}
        </span>
      </div>
    </div>
  </div>
);

const getFontStyle = () => ({
  fontFamily: '"Playfair Display", serif',
  fontWeight: 400,
  letterSpacing: "-0.01em"
});

const ServicesList = forwardRef(function ServicesList(_, ref) {
  const cardRefs = useRef(cards.map(() => React.createRef()));
  const activeIdx = useActiveSection(cardRefs.current);

  return (
    <section
      ref={ref}
      className="w-full bg-black flex flex-row items-start justify-center"
      style={{ width: "100vw", maxWidth: "100vw" }}
    >
      {/* LEFT COLUMN */}
      <div
  className="hidden md:flex items-center justify-center"
  style={{
    width: "44vw",
    minWidth: 320,
    maxWidth: 640,
    height: "100vh",
    position: "sticky",
    top: 0,
  }}
>
  <GradientCircle icon={icons[activeIdx]} />
</div>


      {/* RIGHT COLUMN */}
      <div
        className="flex flex-col gap-20 pl-8 pr-8"
        style={{ flex: 1 }}
      >
        {cards.map((card, idx) => (
          <div
  ref={cardRefs.current[idx]}
  key={card.title}
  style={{
    minHeight: "30vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }}
>
  {/* Row for title and arrow */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      textAlign: "left",
    }}
    className="transform transition-transform duration-300 hover:translate-x-5"
  >
    <div
      className="text-[clamp(2.2rem,7vw,3rem)] leading-none text-white "
      style={{ ...getFontStyle() }}
    >
      {card.title}
    </div>
    <div className="ml-5 text-[#ff0000] text-3xl ">
      <i className="fas fa-arrow-right"></i>
    </div>
  </div>

  {/* Description */}
  <div
    className="text-base font-normal text-white/70 mt-2 max-w-2xl"
    style={{
      fontSize: "clamp(1rem,2vw,1.2rem)",
      textAlign: "left",
    }}
  >
    {card.description}
  </div>
</div>

        ))}
      </div>
    </section>
  );
});

export default ServicesList;
