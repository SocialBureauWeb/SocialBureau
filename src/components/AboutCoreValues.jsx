import React, { useEffect } from "react";

const values = [
  {
    icon: "assets/19.png",
    title: "Performance First",
    desc: "We don't guess; we engineer outcomes.",
  },
  {
    icon: "assets/20.png",
    title: "Niche-Native Thinking",
    desc: "We master the cultural codes others overlook.",
  },
  {
    icon: "assets/21.png",
    title: "Speed & Precision",
    desc: "Fast, focused, flawless.",
  },
  {
    icon: "assets/22.png",
    title: "Brutal Clarity",
    desc: "No jargon. Only sharp, actionable insights.",
  },
  {
    icon: "assets/23.png",
    title: "Zero Vanity",
    desc: "No busywork. Just compounding ROI.",
  },
];

export default function AboutCoreValues() {
  // Fade-in-up on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in-up").forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Inline CSS for effects */}
      <style>{`
        .card-3d {
          perspective: 1000px;
          transform-style: preserve-3d;
          transition: all 0.5s cubic-bezier(.23,1,.32,1);
        }
        .card-3d:hover {
          transform: rotateY(15deg) rotateX(10deg) scale(1.05);
        }
        .card-inner {
          background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%);
          border: 1px solid rgba(255,0,0,0.3);
          backdrop-filter: blur(10px);
          transform-style: preserve-3d;
          transition: all 0.3s cubic-bezier(.23,1,.32,1);
        }
        .card-3d:hover .card-inner {
          background: linear-gradient(135deg, rgba(255, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%);
          border-color: rgba(255, 0, 0, 0.6);
          box-shadow: 0 20px 40px rgba(255, 0, 0, 0.2), inset 0 0 20px rgba(255, 0, 0, 0.1);
        }
        .neon-text {
          color: #fff;
          text-shadow:
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 15px #ff0000,
            0 0 20px #ff0000,
            0 0 35px #ff0000,
            0 0 40px #ff0000;
          animation: flicker 2s infinite alternate;
        }
        @keyframes flicker {
          0%, 18%, 22%, 25%, 53%, 57%, 100% {
            text-shadow:
              0 0 5px #fff,
              0 0 10px #fff,
              0 0 15px #ff0000,
              0 0 20px #ff0000,
              0 0 35px #ff0000,
              0 0 40px #ff0000;
          }
          20%, 24%, 55% { text-shadow: none; }
        }
        .pulse-red {
          animation: pulse-red 2s ease infinite;
        }
        @keyframes pulse-red {
          0%, 100% { box-shadow: 0 0 5px rgba(255, 0, 0, 0.5); }
          50% { box-shadow: 0 0 30px rgba(255, 0, 0, 0.8), 0 0 60px rgba(255, 0, 0, 0.4); }
        }
        .cyber-lines {
          position: relative;
          overflow: hidden;
        }
        .cyber-lines::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff0000, transparent);
          animation: scan 2s ease infinite;
        }
        @keyframes scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .fade-in-up {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(.23,1,.32,1);
        }
        .fade-in-up.animate {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .card-3d:hover { transform: scale(1.02); }
        }
      `}</style>
      <section className="py-40 px-6 bg-black flex flex-col items-center">
        <h2
          className="text-3xl md:text-5xl font-black text-center mb-16"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
        >
          OUR CORE VALUES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 w-full max-w-7xl">
          {values.map((val, idx) => (
            <div
              className="card-3d fade-in-up"
              key={val.title}
              style={{ animationDelay: `${idx * 0.13}s` }}
            >
              <div className="card-inner p-8 rounded-xl h-full flex flex-col items-center text-center cyber-lines">
                <div className="text-4xl mb-6 w-10 h-10">
                  <img src={val.icon} alt="icon" />
                </div>
                <h3 className="text-xl font-bold mb-4 ">{val.title}</h3>
                <p className="text-sm opacity-80">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}