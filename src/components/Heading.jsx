import React, { useEffect, useRef, useState } from 'react'

export const Heading = () => {
    const textRef = useRef(null);
    
      const handleMouseMove = (e) => {
        const rect = textRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = Math.min(Math.max(x / rect.width, 0), 1) * 100;
        textRef.current.style.backgroundImage = `linear-gradient(90deg, #000, #ff0000 ${percent}%, #000)`;
      };
    
      const handleMouseLeave = () => {
        textRef.current.style.backgroundImage = "linear-gradient(90deg, #000, #fff 50%, #000)";
      };
  return (
    <div>
<h1 ref={textRef}
      className="font-bold text-center py-30 lg:pt-35 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-30"
      style={{
        fontFamily: "'Cinzel', serif",
        backgroundImage: "linear-gradient(90deg, #000, #fff 50%, #000)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
        transition: "background-image 0.3s"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>Born to Scale the Unscalable</h1>
    </div>
  )
}
