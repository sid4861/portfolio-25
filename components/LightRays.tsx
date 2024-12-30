"use client";

import React from "react";

const LightRays = () => {
  const styles = {
    hero: {
      "--stripes": `repeating-linear-gradient(
        20deg,
        rgba(255, 255, 255, 0.3) 0%,
        transparent 2%,
        rgba(255, 255, 255, 0.2) 4%,
        transparent 6%,
        rgba(255, 255, 255, 0.4) 8%,
        transparent 10%,
        rgba(255, 255, 255, 0.1) 12%,
        transparent 14%,
        rgba(255, 255, 255, 0.3) 16%,
        transparent 18%
      )`,
      backgroundImage: "var(--stripes)",
      backgroundSize: "300% 300%",
      backgroundPosition: "0 0",
      filter: "blur(10px)",
      maskImage: "radial-gradient(circle at 0 0, white, transparent 80%)",
      WebkitMaskImage: "radial-gradient(circle at 0 0, white, transparent 80%)",
      opacity: 1,
    } as React.CSSProperties,
  };

  return (
    <div className="fixed inset-0 ">
      <div
        className="absolute inset-0"
        style={{
          ...styles.hero,
          animation: "rays 20s linear infinite",
        }}
      />
      <style jsx>{`
        @keyframes rays {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default LightRays;
