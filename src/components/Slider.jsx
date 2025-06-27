import React, { useRef, useEffect, useState } from "react";

// Example images and titles
const images = [
  { src: "/assets/funnel.png", title: "Full-Funnel Performance Marketing" },
  { src: "/assets/bar.png", title: "Vertical-Specific Strategy" },
  { src: "/assets/loop.png", title: "API-Driven Growth Loops" },
  { src: "/assets/lifecycle.png", title: "Advanced CRO & Lifecycle Systems" },
  { src: "/assets/eye.png", title: "Real-Time KPI Visibility" }
];

// const images = [
//   { src: "/assets/feature1.png", title: "Full-Funnel Performance Marketing" },
//   { src: "/assets/feature2.png", title: "Vertical-Specific Strategy" },
//   { src: "/assets/feature3.png", title: "API-Driven Growth Loops" },
//   { src: "/assets/feature2.png", title: "Advanced CRO & Lifecycle Systems" },
//   { src: "/assets/feature2.png", title: "Real-Time KPI Visibility" }
// ];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [show, setShow] = useState(false);
  const triggersRef = useRef([]);
  const rootRef = useRef(null);

  // Only show grid when scrolled to this component
  useEffect(() => {
    const handleScroll = () => {
      if (!rootRef.current) return;
      const rect = rootRef.current.getBoundingClientRect();
      // 20% of the component visible in viewport = show
      const threshold = window.innerHeight * 0.5;
      setShow(rect.bottom > threshold && rect.top < window.innerHeight - threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Set up scroll triggers for each image
  useEffect(() => {
    if (!show) return;
    const handleScroll = () => {
      if (!triggersRef.current.length) return;
      // Which trigger is closest to the center of the viewport?
      const centerY = window.innerHeight / 2;
      let minDist = Infinity, idx = -1;
      triggersRef.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(centerY - elCenter);
        if (dist < minDist) {
          minDist = dist;
          idx = i;
        }
      });
      setActiveIndex(idx);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [show]);

  return (
    <div ref={rootRef} className="relative min-h-[800vh]">
  {show && (
    <div className="fixed inset-0 pointer-events-none z-20 flex items-center justify-center">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl px-4 sm:px-6 md:px-8 place-items-center">
        {images.map((img, i) => {
  const isLastRowWithTwoItems = images.length % 3 === 2 && i >= images.length - 2;
  const isLastRowWithOneItem = images.length % 3 === 1 && i === images.length - 1;

  return (
    <div
      key={img.src}
      className={`relative aspect-square rounded-xl overflow-hidden group transition-all duration-700
        ${activeIndex === i ? "z-40" : ""}
        ${isLastRowWithTwoItems ? "col-span-3 md:col-span-1 mx-auto" : ""}
        ${isLastRowWithOneItem ? "col-span-3 mx-auto" : ""}
      `}
    >
      <img
        src={img.src}
        alt={img.title}
        className={`w-full h-full object-cover transition-transform duration-700
          ${activeIndex === i ? "scale-[1.3] shadow-2xl" : "scale-100"}
        `}
        style={{ transitionProperty: "transform, box-shadow" }}
      />
      <span
        className={`absolute inset-0 p-10 flex items-center justify-center text-xl sm:text-2xl md:text-5xl font-bold text-white
          bg-black/40 transition-opacity duration-700
          ${activeIndex === i ? "opacity-100" : "opacity-0"}
          pointer-events-none z-50 select-none`}
      >
        {img.title}
      </span>
    </div>
  );
})}

      </div>
    </div>
  )}

  {/* Invisible scroll triggers */}
  <div className="h-[300vh] pt-[40vh]">
    <div className="flex flex-col items-center gap-[40vh]">
      {images.map((_, i) => (
        <div
          key={i}
          ref={(el) => (triggersRef.current[i] = el)}
          className="w-full h-[60vh]"
        />
      ))}
    </div>
  </div>
</div>

  );
}