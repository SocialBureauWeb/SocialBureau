import React, { forwardRef, useEffect, useRef, useState } from "react";

const icons = [
  <i className="fas fa-chart-line text-red-600 text-2xl"></i>,
  <i className="fas fa-sitemap text-red-600 text-2xl"></i>,
  <i className="fas fa-bullseye text-red-600 text-2xl"></i>,
  <i className="fas fa-comments text-red-600 text-2xl"></i>,
  <i className="fas fa-cogs text-red-600 text-2xl"></i>,
  <i className="fas fa-crosshairs text-red-600 text-2xl"></i>,
  <i className="fas fa-users text-red-600 text-2xl"></i>,
  <i className="fas fa-envelope text-red-600 text-2xl"></i>,
  <i className="fas fa-rocket text-red-600 text-2xl"></i>,
];

// Array of unique images, one for each card (replace URLs as needed)
const cardImages = [
  "assets/service1.webp",
  "assets/service2.webp",
  "assets/service3.webp",
  "assets/service4.webp",
  "assets/service5.webp",
  "assets/service6.webp",
  "assets/service7.webp",
  "assets/service8.webp",
  "assets/service9.webp",
];

const cards = [
  {
    title: "Full-Funnel Performance Marketing",
    description: "Click costs don't matter if they don't convert. We deploy vertical-informed models and 14-day sprint cycles tied to LTV, not vanity ROAS."
  },
  {
    title: "Funnel Architecture & Growth Pathways",
    description: "Stop leaking revenue. We map awareness to LTV with customized, P&L-aligned blueprints."
  },
  {
    title: "Conversion Rate Optimization & Landing Systems",
    description: "Built with psychology, tested with micro-experiments. Bounce less. Convert more."
  },
  {
    title: "Messaging & Positioning for Niche Brands",
    description: "Generic messaging kills growth. We uncover category-specific codes using ethnographic and linguistic analysis."
  },
  {
    title: "API-Driven Growth & Automated Distribution",
    description: "Eliminate friction. Merge engineering + marketing for compounding growth loops."
  },
  {
    title: "Niche Market Penetration Strategy",
    description: "We speak fluent healthtech, crypto, fintech, and more. Penetrate with precision."
  },
  {
    title: "Influencer & UGC Growth Engines",
    description: "No vanity metrics. Just creator content built for performance and attribution."
  },
  {
    title: "Lifecycle & Email Automation Strategy",
    description: "Trigger behavior-based flows that drive revenue—measured on 30-day impact."
  },
  {
    title: "Software GTM & Growth Architecture",
    description: "PLG meets sales-assist in a system that converts trials and grows MRR."
  },
];

function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return isIntersecting;
}

const ServicesList = forwardRef(function ServicesList(_, ref) {
  const gridRef = useRef();
  const isVisible = useOnScreen(gridRef, "-50px");

  return (
    <section
      ref={ref}
      className="min-h-screen bg-black flex items-center justify-center py-8"
    >
      <style>{`
        .slide-up {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .slide-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .flip-card {
          width: 340px;
          height: 320px;
          perspective: 1000px;
        }
        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-inner,
        .flip-card:focus-within .flip-inner {
          transform: rotateY(180deg);
        }
        .flip-front, .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.75rem;
          overflow: hidden;
        }
        .flip-front {
          background: #000;
          border: 1px solid #262626;
          box-shadow: 0 4px 24px 0 rgba(239, 68, 68, 0.0);
        }
        .flip-back {
          background-size: cover;
          background-position: center;
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <div
        ref={gridRef}
        className={`max-w-7xl w-full px-2 sm:px-4 slide-up${isVisible ? " visible" : ""}`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pb-40">
          {cards.map((card, idx) => (
            <div className="flip-card group" tabIndex={0} key={card.title}>
              <div className="flip-inner">
                <div className="flip-front flex flex-col gap-4 p-6 sm:p-8 shadow-lg">
                  <div className="flex items-center justify-between">
                    {icons[idx]}
                    <span className="text-neutral-400">
                      <a href="#"><svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg></a>
                    </span>
                  </div>
                  <div>
                    <h3 className="mt-2 text-base sm:text-lg font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-neutral-300 text-sm sm:text-base">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div
                  className="flip-back"
                  style={{
                    backgroundImage: `url('${cardImages[idx % cardImages.length]}')`
                  }}
                >
                  {/* Image only on back */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>      
    </section>
  );
});

export default ServicesList;