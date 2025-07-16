import React, { useEffect, useState } from "react";
import Spline from '@splinetool/react-spline';

export default function Logo() {
  const fullText = "SocialBureau";
  const [text, setText] = useState("");
  const speed = 100; // Typing speed in ms per letter

  useEffect(() => {
  let currentIndex = 0;

  const typingInterval = setInterval(() => {
    if (currentIndex < fullText.length) {
      const nextChar = fullText[currentIndex]; // safe access
      setText((prev) => prev + nextChar);
      currentIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, speed);

  return () => clearInterval(typingInterval);
}, []);


  // Split and highlight the red 'B'
  const renderText = () => {
    return [...text].map((char, index) => (
      <span key={index} className={char === "B" ? "text-[#ff0000]" : ""}>
        {char}
      </span>
    ));
  };

  return (
<main className="w-screen min-h-screen overflow-visible relative bg-black">
      {/* Text Overlay */}
      <div
        className="absolute text-5xl lg:text-7xl top-[23vh] lg:top-[45vh] lg:left-[10vw] w-full lg:text-left text-center text-white z-10 p-5"
        style={{
          fontFamily: "MyFont, sans-serif",
          letterSpacing: "1px",
        }}
      >
        {renderText()}
      </div>

      {/* Zoomed & Cropped Spline */}
      <div
        style={{
          transform: "scale(2.1)",
          transformOrigin: "center",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Spline scene="https://prod.spline.design/bGvIOLIpwq6uOJVn/scene.splinecode" />
      </div>
    </main>
  );
}
