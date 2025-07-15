import React, { useRef, useState, useEffect } from "react";
const lines = ["Lean team.", "High brain power.", "Zero waste."];

const Hometagline = () => {
  const [step, setStep] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const getResponsiveStyles = () => ({
    container: {
  zIndex: 10,
  position: "relative", // required for zIndex to apply
  outline: "none",
  minHeight: "30vh",
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
      color: "red", // Default line color
      margin: window.innerWidth < 600 ? "8px 0" : "0",
      wordBreak: "break-word",
    },
    lineWhite: {
      color: "#fff", // White color for "High brain power."
    },
  });

  const [, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => setWindowSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let intervalId = null;
    let localStep = 0;

    const runCycle = () => {
      intervalId = setInterval(() => {
        if (localStep < lines.length) {
          setStep(localStep);
          setShowAll(false);
          localStep += 1;
        } else {
          // Show all for 2.2s
          setShowAll(true);
          localStep = 0;
        }
      }, 2200);
    };

    runCycle();

    return () => clearInterval(intervalId);
  }, []);

  const styles = getResponsiveStyles();

  // Helper function to determine style per line
  const getLineStyle = (line) =>
    line === "High brain power."
      ? { ...styles.line, ...styles.lineWhite }
      : styles.line;

  return (
    <div tabIndex={0} style={styles.container}>
      <div style={styles.linesRow}>
        {showAll
          ? lines.map((line) => (
              <span key={line} style={{ ...getLineStyle(line), opacity: 1 }}>
                {line}
              </span>
            ))
          : lines.map((line, idx) => (
              <span
                key={line}
                style={{
                  ...getLineStyle(line),
                  opacity: step === idx ? 1 : 0.2,
                }}
              >
                {line}
              </span>
            ))}
      </div>
    </div>
  );
};

export default Hometagline;