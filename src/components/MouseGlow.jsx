import React, { useEffect, useState } from "react";

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75"
      style={{
        transform: `translate3d(${position.x - 100}px, ${position.y - 100}px, 0)`,
      }}
    >
      <div
        className={`w-[200px] h-[200px] rounded-full bg-red-500 opacity-30 blur-3xl transition-transform duration-100 ease-out
          animate-pulse
          ${isClicked ? "scale-125" : "scale-100"}`}
      ></div>
    </div>
  );
};

export default MouseGlow;
