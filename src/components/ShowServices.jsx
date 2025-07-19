import React, { useState, useRef, useEffect, useCallback } from "react";

const cards = [
  {
    id: 1,
    icon: <i className="fas fa-chart-line text-[#ff0000] text-2xl"></i>,
    title: "Full-Funnel Performance Marketing",
    description:
      "Click costs don't matter if they don't convert. We deploy vertical-informed models and 14-day sprint cycles tied to LTV, not vanity ROAS.",
  },
  {
    id: 2,
    icon: <i className="fas fa-sitemap text-[#ff0000] text-2xl"></i>,
    title: "Funnel Architecture & Growth Pathways",
    description:
      "Stop leaking revenue. We map awareness to LTV with customized, P&L-aligned blueprints.",
  },
  {
    id: 3,
    icon: <i className="fas fa-bullseye text-[#ff0000] text-2xl"></i>,
    title: "Conversion Rate Optimization & Landing Systems",
    description:
      "Built with psychology, tested with micro-experiments. Bounce less. Convert more.",
  },
  {
    id: 4,
    icon: <i className="fas fa-comments text-[#ff0000] text-2xl"></i>,
    title: "Messaging & Positioning for Niche Brands",
    description:
      "Generic messaging kills growth. We uncover category-specific codes using ethnographic and linguistic analysis.",
  },
  {
    id: 5,
    icon: <i className="fas fa-cogs text-[#ff0000] text-2xl"></i>,
    title: "API-Driven Growth & Automated Distribution",
    description:
      "Eliminate friction. Merge engineering + marketing for compounding growth loops.",
  },
  {
    id: 6,
    icon: <i className="fas fa-crosshairs text-[#ff0000] text-2xl"></i>,
    title: "Niche Market Penetration Strategy",
    description:
      "We speak fluent healthtech, crypto, fintech, and more. Penetrate with precision.",
  },
  {
    id: 7,
    icon: <i className="fas fa-users text-[#ff0000] text-2xl"></i>,
    title: "Influencer & UGC Growth Engines",
    description:
      "No vanity metrics. Just creator content built for performance and attribution.",
  },
  {
    id: 8,
    icon: <i className="fas fa-envelope text-[#ff0000] text-2xl"></i>,
    title: "Lifecycle & Email Automation Strategy",
    description:
      "Trigger behavior-based flows that drive revenue, measured on 30-day impact.",
  },
  {
    id: 9,
    icon: <i className="fas fa-rocket text-[#ff0000] text-2xl"></i>,
    title: "Software GTM & Growth Architecture",
    description:
      "PLG meets sales-assist in a system that converts trials and grows MRR.",
  },
];


export default function ShowServices() {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const dragOffset = useRef(0);

  const totalCards = cards.length;
  const angle = 360 / totalCards; // Angle between each card

  const rotateCarousel = useCallback((direction) => {
    setStartIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % totalCards;
      } else {
        return prev === 0 ? totalCards - 1 : prev - 1;
      }
    });
  }, [totalCards]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    dragOffset.current = e.clientX - startX.current;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    containerRef.current.style.cursor = "grab";

    if (dragOffset.current > 70) {
      // Swipe Right
      rotateCarousel("prev");
    } else if (dragOffset.current < -70) {
      // Swipe Left
      rotateCarousel("next");
    }

    dragOffset.current = 0;
  };

  useEffect(() => {
    // Add event listeners to the window for better drag handling
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
    <div
      ref={containerRef}
      className="relative w-screen h-screen flex items-center justify-center bg-black overflow-hidden select-none"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUp} // End drag if mouse leaves the container
      style={{ perspective: "1200px", cursor: "grab" }}
    >
      {/* Red Sphere Image */}
      <img
        src="assets/particles.webp"
        alt="Red Sphere"
        className="absolute h-[120vh] z-0"
        style={{ filter: "drop-shadow(0 0 60px rgba(255,0,0,0.4))" }}
      />

      {/* Cards Carousel Container */}
      <div
        className="absolute w-[300px] h-[300px] flex items-center justify-center" // Adjust size as needed
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${-startIndex * angle}deg)`, // Rotate the entire carousel
          transition: "transform 0.8s ease-in-out",
        }}
      >
        {cards.map((card, index) => {
          const rotateY = index * angle;
          const transform = `rotateY(${rotateY}deg) translateZ(400px)`; // Adjust translateZ for desired radius
          const isActive = index === startIndex;

          return (
            <div
              key={card.id}
              className={`absolute backface-hidden`}
              style={{
                transform,
                transition: "transform 0.8s ease-in-out, opacity 0.4s ease-in-out",
                opacity: isActive ? 1 : 0.6,
                zIndex: isActive ? 20 : 10,
              }}
            >
              <div className="w-48 h-64 bg-black bg-opacity-90 rounded-xl shadow-xl p-4 flex flex-col justify-center items-center text-white border border-[#ff0000]
                          group relative overflow-hidden transition-all duration-300 ease-in-out hover:bg-opacity-100 hover:shadow-2xl">
                
                {/* Icon and Title - Always visible */}
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <div className="mb-2">{card.icon}</div>
                  <h2 className="text-lg font-bold text-center">
                    {card.title}
                  </h2>
                </div>

                {/* Description - Hidden by default, visible on hover */}
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-95 rounded-xl
                            transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  
                  <p className="text-sm text-center text-white">
                    {card.description}<br/><br/>
                    <a href={`/services/${encodeURIComponent(card.title)}`} className="text-[#ff0000] hover:text-[1rem]">Read More</a>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        
      </div>
      </div>
      <p className="text-white text-xl text-center justify-center">&lt;- Drag the cards to view more -&gt;</p>
    </div>
  );
}