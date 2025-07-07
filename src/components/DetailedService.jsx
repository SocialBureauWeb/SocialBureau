import React, { useEffect, useState } from "react";

export const DetailedService = () => {
  const [radius, setRadius] = useState(0);
  const [locked, setLocked] = useState(true);

  useEffect(() => {
    const handleWheel = (e) => {
      if (locked) {
        e.preventDefault();
        setRadius((prev) => {
          const next = Math.min(prev + 5, 100);
          if (next === 100) {
            setLocked(false);
          }
          return next;
        });
      }
    };

    const handleTouchMove = (e) => {
      if (locked) {
        e.preventDefault();
        setRadius((prev) => {
          const next = Math.min(prev + 5, 100);
          if (next === 100) {
            setLocked(false);
          }
          return next;
        });
      }
    };

    if (locked) {
      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
      document.body.style.overflow = "auto";
    };
  }, [locked]);

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden">
      {/* LEFT STATIC IMAGE */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full flex-shrink-0">
        {/* Base grayscale */}
        <img
          src="assets/service1.jpeg"
          alt="Grayscale Base"
          className="w-full h-full object-cover grayscale"
        />
        {/* Color reveal */}
        <img
          src="assets/service1.jpeg"
          alt="Color Reveal"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none transition-clip-path duration-200 ease-out"
          style={{
            clipPath: `circle(${radius}% at 50% 50%)`,
          }}
        />
      </div>

      {/* RIGHT SIDE SCROLLABLE */}
      <div className="w-full md:w-1/2 h-full overflow-y-auto p-6 md:p-12 bg-black text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Service Title</h1>
        <div className="flex mb-2 py-2">
          <span className="block w-[100vw] h-0.5 bg-[#ff0000] mr-2 md:mr-3" />
        </div>
        <p className="text-base md:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          tincidunt, justo at placerat vulputate, erat augue luctus eros,
          placerat tincidunt sapien enim vel augue. Phasellus id consectetur
          lorem. Vestibulum ut purus vel nulla iaculis faucibus sed vitae nisl.
          Proin consequat nibh a ante tristique, eu maximus erat elementum.
          Mauris mattis sem id diam facilisis, in dignissim libero lacinia.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis,
          augue vel gravida iaculis, erat purus volutpat sapien, non sodales
          purus augue eget sapien. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};
