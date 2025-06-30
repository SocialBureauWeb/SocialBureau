import React, { useState, useEffect, useRef } from "react";

const INTERACTIVE_GRID_STYLE = {
  position: "absolute",
  top: 0, left: 0, width: "100%", height: "100%",
  backgroundImage: `
    linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)`,
  backgroundSize: "50px 50px",
  pointerEvents: "none",
  opacity: 0.2,
  zIndex: 0,
};

const CUSTOM_CURSOR_STYLE = {
  position: "fixed",
  width: 20, height: 20,
  background: "radial-gradient(circle, #ff0000, transparent)",
  borderRadius: "50%",
  pointerEvents: "none",
  zIndex: 9999,
  transition: "transform 0.1s ease",
  mixBlendMode: "difference",
  left: 0, top: 0,
};

const TRAIL_STYLE = {
  position: "fixed",
  width: 8, height: 8,
  background: "rgba(255,0,0,0.3)",
  borderRadius: "50%",
  pointerEvents: "none",
  zIndex: 9998,
};

const RIPPLE_STYLE = {
  position: "absolute",
  borderRadius: "50%",
  background: "rgba(255,0,0,0.3)",
  pointerEvents: "none",
  animation: "ripple 0.6s linear",
};

const PARTICLE_STYLE = {
  position: "absolute",
  background: "#ff0000",
  borderRadius: "50%",
  pointerEvents: "none",
  animation: "float 3s infinite ease-in-out",
  zIndex: 1,
};

const MouseEffect = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);
  const [ripples, setRipples] = useState([]);
  const [particles, setParticles] = useState([]);

  // Hide default cursor
  useEffect(() => {
    document.body.classList.add("cursor-none");
    return () => document.body.classList.remove("cursor-none");
  }, []);

  // MouseMove, Trails, Particles
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX, y = e.clientY;
      setMouse({ x, y });

      // Cursor trail
      setTrails((prev) => [...prev.slice(-8), { x, y, id: Date.now(), opacity: 1 }]);
      // Random particles
      if (Math.random() > 0.9) {
        const px = x + (Math.random() - 0.5) * 100;
        const py = y + (Math.random() - 0.5) * 100;
        setParticles((prev) =>
          [...prev.slice(-15), {
            x: px,
            y: py,
            id: Date.now() + Math.random(),
            size: Math.random() * 6 + 2
          }]
        );
      }
    };

    const handleClick = (e) => {
      const newRipple = { x: e.clientX, y: e.clientY, id: Date.now() };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  // Clean up faded trails
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) =>
        prev
          .map((t) => ({ ...t, opacity: t.opacity - 0.1 }))
          .filter((t) => t.opacity > 0)
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Key CSS for animation (ripple, float, pulse)
  useEffect(() => {
    if (document.getElementById("mouse-effect-anim")) return;
    const style = document.createElement("style");
    style.id = "mouse-effect-anim";
    style.innerHTML = `
@keyframes ripple { to { transform: scale(4); opacity: 0; } }
@keyframes float { 0%,100%{transform:translateY(0) rotate(0);} 50%{transform:translateY(-20px) rotate(180deg);} }
@keyframes pulse { 0%{transform:scale(1); opacity:1;} 100%{transform:scale(2); opacity:0;} }
`;
    document.head.appendChild(style);
  }, []);

  
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Interactive Grid */}
      <div style={INTERACTIVE_GRID_STYLE} />
      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{
          ...CUSTOM_CURSOR_STYLE,
          left: mouse.x - 10,
          top: mouse.y - 10,
          transform: `scale(${mouse.x > 0 ? 1 : 0})`,
        }}
      />
      {/* Cursor Trails */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            ...TRAIL_STYLE,
            left: trail.x - 4,
            top: trail.y - 4,
            opacity: trail.opacity,
            transform: `scale(${trail.opacity})`,
          }}
        />
      ))}
      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple-effect"
          style={{
            ...RIPPLE_STYLE,
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: 50,
            height: 50,
          }}
        />
      ))}
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            ...PARTICLE_STYLE,
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen space-y-12">
        
      </div>
    </div>
  );
};

export default MouseEffect;