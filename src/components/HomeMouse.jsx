// import React, { useEffect, useState } from "react";

// const HomeMouse = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isClicked, setIsClicked] = useState(false);

//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseDown = () => setIsClicked(true);
//     const handleMouseUp = () => setIsClicked(false);

//     window.addEventListener("mousemove", updateMousePosition);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", updateMousePosition);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75"
//       style={{
//         transform: `translate3d(${position.x - 100}px, ${position.y - 100}px, 0)`,
//       }}
//     >
//       <div
//         className={`w-[100px] h-[100px] rounded-full bg-[#ff0000] opacity-30 blur-2xl transition-transform duration-100 ease-out
//           animate-pulse
//           ${isClicked ? "scale-125" : "scale-100"}`}
//       ></div>
//     </div>
//   );
// };

// export default HomeMouse;
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

const AboutCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  // Store last mouse position for follower
  const mouse = useRef({ x: 0, y: 0 });
  // Used for follower animation frame
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor on body
    document.body.classList.add("cursor-none");

    const moveCursor = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Main cursor moves instantly
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
      // Lerp for smooth trailing
      followerPos.current.x += dx * 0.15;
      followerPos.current.y += dy * 0.15;

      if (followerRef.current) {
        followerRef.current.style.left = `${followerPos.current.x}px`;
        followerRef.current.style.top = `${followerPos.current.y}px`;
      }
      animId = requestAnimationFrame(animateFollower);
    };

    window.addEventListener("mousemove", moveCursor);
    animId = requestAnimationFrame(animateFollower);

    // Init on mount for SSR
    followerPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animId);
      document.body.classList.remove("cursor-none");
    };
  }, []);

  // Optionally expose API for interactive effects (ex: on hover)
  // Example: add color/scale on hover using a context or imperative handle

  return (
    <>
      <div
        ref={cursorRef}
        style={cursorStyle}
        className="pointer-events-none"
      />
      <div
        ref={followerRef}
        className="pointer-events-none"
      />
    </>
  );
};

export default AboutCursor;