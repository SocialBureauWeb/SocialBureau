import React, { useRef, useState, useEffect } from "react";
const lines = ["Lean team.", "High brain power.", "Zero waste."];

const ScrollEffect2 = () => {
  const [step, setStep] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Responsive font sizes and layout styles
  const getResponsiveStyles = () => ({
    container: {
      outline: "none",
      minHeight: "30vh",
      height: "50dvh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      background: "#000",
      overflow: "hidden",
      userSelect: "none",
      padding: "0 4vw",
    },
    linesRow: {
      display: "flex",
      flexDirection: window.innerWidth < 600 ? "column" : "row",
      gap: window.innerWidth < 600 ? 12 : 16,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    line: {
      opacity: 1,
      transition: "opacity 1.6s cubic-bezier(.4,0,.2,1)",
      fontSize: window.innerWidth < 600 ? "1.3rem" : "2rem",
      fontWeight: 600,
      minWidth: window.innerWidth < 600 ? "120px" : "180px",
      textAlign: "center",
      color: "red",
      margin: window.innerWidth < 600 ? "8px 0" : "0",
      wordBreak: "break-word",
    },
  });

  // Handle window resize for responsiveness
  const [, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => setWindowSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite looping effect, then show all together at the end
  useEffect(() => {
    setShowAll(false); // Reset showAll on mount
    let count = 0;
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev + 1 === lines.length) {
          count += 1;
          // Show all after one full cycle (optionally adjust how many cycles)
          setShowAll(true);
          clearInterval(interval);
          setTimeout(() => {
            setShowAll(false);
            setStep(0);
            // Restart the effect
            count = 0;
            setTimeout(() => {
              setStep(1);
              const newInterval = setInterval(() => {
                setStep((prevStep) => {
                  if (prevStep + 1 === lines.length) {
                    setShowAll(true);
                    clearInterval(newInterval);
                    setTimeout(() => {
                      setShowAll(false);
                      setStep(0);
                    }, 2200);
                  }
                  return (prevStep + 1) % lines.length;
                });
              }, 2200);
            }, 2200);
          }, 2200);
        }
        return (prev + 1) % lines.length;
      });
    }, 2200);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  const styles = getResponsiveStyles();

  return (
    <div tabIndex={0} style={styles.container}>
      <div style={styles.linesRow}>
        {showAll
          ? lines.map((line) => (
              <span key={line} style={{ ...styles.line, opacity: 1 }}>
                {line}
              </span>
            ))
          : lines.map((line, idx) => {
              let opacity = 0.2;
              if (step === idx) {
                opacity = 1;
              }
              return (
                <span
                  key={line}
                  style={{
                    ...styles.line,
                    opacity,
                  }}
                >
                  {line}
                </span>
              );
            })}
      </div>
    </div>
  );
};

export default ScrollEffect2;