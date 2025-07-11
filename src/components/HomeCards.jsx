import React, { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Full-Funnel Performance Marketing",
    color: "red-gradient",
    align: "left",
  },
  {
    title: "API-Driven Growth Loops",
    color: "black-card",
    align: "center",
  },
  {
    title: "Vertical-Specific Strategy",
    color: "white-card",
    align: "left",
  },
  {
    title: "Advanced CRO & Lifecycle Systems",
    color: "red-gradient",
    align: "left",
  },
];

export default function HomeCards() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
        } else if (hasBeenVisible) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasBeenVisible]);

  return (
    <div className="cards-root">
      <style>
        {`
          .cards-root {
            min-height: 100vh;
            background: #000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
            font-family: 'EB Garamond', serif;
          }
          .cards-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 32px;
            width: 90vw;
            max-width: 1800px;
            margin: 15vh auto;
            min-height: 90vh;
            align-items: stretch;
            /* Initial: exit state */
            transform: translateY(60px) scale(0.9);
            opacity: 0;
            pointer-events: none;
            transition:
              transform 1s cubic-bezier(0.77,0,0.175,1),
              opacity 1s cubic-bezier(0.77,0,0.175,1);
          }
          .cards-grid.visible {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0) scale(1);
            transition:
              transform 1s cubic-bezier(0.33,1,0.68,1),
              opacity 1s cubic-bezier(0.33,1,0.68,1);
          }
          .cards-grid.exiting {
            /* Exit state: slide out + fade */
            opacity: 0;
            pointer-events: none;
            transform: translateY(60px) scale(0.96);
            transition:
              transform 0.7s cubic-bezier(0.77,0,0.175,1),
              opacity 0.7s cubic-bezier(0.77,0,0.175,1);
          }
          .card-center-text {
            grid-column: 2;
            grid-row: 1 / span 2;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          /* Responsive styles */
          @media (max-width: 1100px) {
            .cards-grid {
              grid-template-columns: 1fr;
              grid-template-rows: unset;
              gap: 24px;
              margin: 4vh auto;
              min-height: unset;
              width: 98vw;
            }
            .card-center-text {
              grid-column: 1 !important;
              grid-row: auto !important;
              order: 3;
              min-height: unset;
              width: 100%;
            }
          }
          @media (max-width: 600px) {
            .cards-grid {
              gap: 16px;
              padding: 0 4vw;
            }
          }
        `}
      </style>
      <div
        ref={containerRef}
        className={`cards-grid${isVisible ? " visible" : hasBeenVisible ? " exiting" : ""}`}
      >
        <Card {...cards[0]} style={{}} />
        <Card {...cards[2]} style={{}} />
        <div className="card-center-text">
          <CenterText />
        </div>
        <Card {...cards[1]} style={{}} />
        <Card {...cards[3]} style={{}} />
      </div>
    </div>
  );
}

function Card({
  title,
  color,
  align = "left",
  style = {},
}) {
  let background;
  if (color === "red-gradient") {
    background = "radial-gradient(ellipse at 80% 20%, #c00 0%, #800 100%)";
  } else if (color === "white-card") {
    background = "#fff";
  } else if (color === "black-card") {
    background = "#111";
  } else {
    background = "#000";
  }

  return (
    <div  className="mob-title"
      style={{
        borderRadius: "32px",
        background,
        color: color === "white-card" ? "#111" : "#fff",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "340px",
        boxShadow:
          color === "white-card"
            ? "0 2px 32px #1113"
            : "0 2px 32px #c003",
        position: "relative",
        width: "100%",
        ...style,
      }}
    >
      <style>
        {`
          .card-title {
            font-family: 'EB Garamond', serif;
            font-weight: 400;
            font-size: 2.6rem;
            line-height: 1.1;
            text-align: ${align};
          }
          @media (max-width: 600px) {
            .card-title {
              font-size: 1.8rem;              
              text-align:center;
            }
          }
        `}
      </style>
      <div>
        <div className="card-title">
          {title}
        </div>
      </div>
    </div>
  );
}


function CenterText() {
  return (
    <div
      style={{
        color: "#fff",
        fontFamily: "'EB Garamond', serif",
        fontSize: "2.6rem",
        fontWeight: 400,
        textAlign: "center",
        width: "100%",
        padding: "0 12px",
        lineHeight: 1.12,
        letterSpacing: "-0.01em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "200px",
      }}
    >
      Real-Time KPI Visibility
    </div>
  );
}