import React, { useRef, useEffect, useState } from "react";

// Images and styles remain unchanged
const cards = [
  { src: "assets/feature.jpeg", style: "rotate-[20deg]" },
  { src: "assets/feature2.jpeg", style: "rotate-[-20deg]" },
  { src: "https://static-cse.canva.com/blob/1157337/Howtobuildadigitalmarketingstrategyfromscratchbanner.png", style: "rotate-[7deg]" },
  { src: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5w02MCzaAgiHWdpsDC81YI/d2e12e073619958227bfe7e05b797b0c/GettyImages-1374879082.jpg", style: "rotate-[2deg]" },
  { src: "https://jaaqob.pl/wp-content/uploads/2024/11/Innowacyjny-marketing-Grafika-w-tresci-4.png", style: "rotate-[-10deg]" },
];

const texts = [
  "Full-Funnel Performance Marketing",
  "Vertical-Specific Strategy",
  "API-Driven Growth Loops",
  "Advanced CRO & Lifecycle Systems",
  "Real-Time KPI Visibility",
];

export default function ScrollEffect() {
  const [active, setActive] = useState(1);
  const scrollContainerRef = useRef(null);
  const stickyRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!scrollContainerRef.current || !stickyRef.current) return;

      const containerRect = scrollContainerRef.current.getBoundingClientRect();
      const containerHeight = scrollContainerRef.current.offsetHeight;
      const scrollProgress = Math.min(
        1,
        Math.max(0, (window.innerHeight - containerRect.top) / containerHeight)
      );

      // Custom thresholds: first card takes 30%, others take remaining equally
      const thresholds = [0, 0.3, 0.5, 0.7, 0.85, 1.0];
      const idx = thresholds.findIndex((t, i) => scrollProgress < t) - 1;
      setActive(Math.max(0, idx));
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Responsive font sizes and image sizes
  const textStyle = (i) => {
    if (i === active)
      return "font-bold text-neutral-800 blur-[0.5px] text-[clamp(1.25rem,5vw,2.6rem)]";
    if (Math.abs(i - active) === 1)
      return "font-medium text-neutral-500 blur-[1.5px] text-[clamp(1rem,3vw,1.9rem)]";
    return "font-normal text-neutral-400 blur-[2px] text-[clamp(0.9rem,2vw,1.5rem)]";
  };

  return (
    <div
      ref={scrollContainerRef}
      className="relative h-[150vh] bg-black mt-20"
    >
      <div
        ref={stickyRef}
        className="
          sticky top-0 h-screen flex flex-col md:flex-row 
           items-start md:items-center px-2 md:px-8
        "
      >
        {/* Card Stack */}
        <div className="
          relative 
          w-[80vw] max-w-[360px] min-w-[200px] 
          h-[54vw] max-h-[360px] min-h-[200px] 
          flex items-center justify-center mx-auto md:mx-0
        ">
          {cards.map((card, i) => {
            let classes =
              "absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] max-w-[260px] min-w-[120px] h-[45vw] max-h-[320px] min-h-[160px] transition-all duration-500 ease-in-out rounded-xl";
            if (i === active) {
              classes += " scale-110 shadow-2xl z-50";
            }
            return (
              <img
                key={card.src}
                src={card.src}
                alt="logo"
                className={`${classes} ${card.style}`}
                style={{
                  opacity:
                    Math.abs(i - active) > 2
                      ? 0
                      : 1 - 0.15 * Math.abs(i - active),
                  filter: i === active ? "none" : "blur(1.5px)",
                  transition:
                    "transform 0.6s cubic-bezier(.43,.15,.34,1.04), opacity 0.4s, filter 0.5s",
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            );
          })}
        </div>
        {/* Texts */}
        <div className="flex flex-col gap-2 mt-6 md:mt-0 w-full md:w-[500px] p-2 py-10 md:px-0">
          {texts.map((t, i) => (
            <h2
              key={t}
              className={`${textStyle(i)} transition-all duration-400`}
              style={{
                fontWeight:
                  i === active
                    ? 650
                    : i === active - 1 || i === active + 1
                    ? 475
                    : 400,
                color:
                  i === active
                    ? "rgba(255, 255, 255, 0.88)"
                    : i === active - 1 || i === active + 1
                    ? "rgb(175, 175, 175)"
                    : "rgb(133, 133, 133)",
                filter:
                  i === active
                    ? "blur(0.5px)"
                    : i === active - 1 || i === active + 1
                    ? "blur(1.5px)"
                    : "blur(2px)",
                fontSize:
                  i === active
                    ? "clamp(1.25rem,5vw,2.6rem)"
                    : i === active - 1 || i === active + 1
                    ? "clamp(1rem,3vw,1.9rem)"
                    : "clamp(0.9rem,2vw,1.5rem)",
                transition:
                  "all 0.5s cubic-bezier(.43,.15,.34,1.04), color 0.4s, filter 0.4s",
                lineHeight: 1.1,
              }}
            >
              {t}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}