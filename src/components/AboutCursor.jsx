import React, { useEffect, useRef } from "react";


const cursorStyle = {
  pointerEvents: "none",
  zIndex: 9999,
  position: "fixed",
  width: 20,
  height: 20,
  background: "#ff0000",
  borderRadius: "50%",
  transition: "transform 0.1s ease, background 0.2s",
  boxShadow: "0 0 20px #ff0000",
  left: 0,
  top: 0,
  transform: "translate(-50%, -50%) scale(1)",
};

const followerStyle = {
  pointerEvents: "none",
  zIndex: 9998,
  position: "fixed",
  width: 40,
  height: 40,
  borderRadius: "50%",
  border: "2px solid rgba(255, 0, 0, 0.5)",
  transition: "all 0.3s ease",
  left: 0,
  top: 0,
  transform: "translate(-50%, -50%) scale(1)",
};

const AboutCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    document.body.classList.add("cursor-none");

    const moveCursor = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    let animId;
    const animateFollower = () => {
      const { x, y } = followerPos.current;
      const dx = mouse.current.x - x;
      const dy = mouse.current.y - y;
      followerPos.current.x += dx * 0.3;
      followerPos.current.y += dy * 0.3;


      if (followerRef.current) {
        followerRef.current.style.left = `${followerPos.current.x}px`;
        followerRef.current.style.top = `${followerPos.current.y}px`;
      }
      animId = requestAnimationFrame(animateFollower);
    };

    window.addEventListener("mousemove", moveCursor);
    animId = requestAnimationFrame(animateFollower);

    followerPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animId);
      document.body.classList.remove("cursor-none");
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={cursorStyle}
        className="pointer-events-none"
      />
      <div
        ref={followerRef}
        style={followerStyle}
        className="pointer-events-none"
      />
    </>
  );
};

export default AboutCursor;