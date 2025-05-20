"use client";

import { useEffect, useState } from "react";

export default function ResultLoadingScreen() {
  const [progress, setProgress] = useState(0);
  const targetProgress = 100; // Animate to 100%

  useEffect(() => {
    let current = 0;
    const duration = 3000; // 3 seconds animation
    const frameDuration = 20; // update every 20ms
    const totalFrames = duration / frameDuration;
    const increment = targetProgress / totalFrames;

    const interval = setInterval(() => {
      current += increment;
      if (current >= targetProgress) {
        setProgress(targetProgress);
        clearInterval(interval);
      } else {
        setProgress(current);
      }
    }, frameDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white overflow-hidden">
      {/* Curved gradient background */}
      <svg
        className="absolute top-0 left-0 w-full h-full -z-10"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbefff" />
            <stop offset="100%" stopColor="#e6f0ff" />
          </linearGradient>
        </defs>
        <path d="M0 0 L0 400 Q400 600 800 400 L800 0 Z" fill="url(#grad)" />
      </svg>

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-10 max-w-3xl mx-auto text-center z-10">
        We create a personalized <br /> training plan that perfectly <br />{" "}
        suits your lifestyle
      </h1>

      {/* Running figure */}
      <div
        className="mb-16 relative w-40 h-40 mx-auto z-10
  rounded-3xl
  shadow-2xl
  ring-4 ring-blue-400/30
  bg-white
  overflow-hidden
"
      >
        <img
          src="/running.png"
          alt="Running figure"
          className="w-full h-full object-contain
      drop-shadow-[0_10px_15px_rgba(59,130,246,0.5)]
      transition-transform duration-300 hover:scale-105
    "
          style={{
            filter: "drop-shadow(0 5px 5px rgba(0, 0, 0, 0.2))",
          }}
        />
      </div>

      {/* Progress bar container */}
      <div className="w-full max-w-md mx-auto bg-blue-300 rounded-full h-12 overflow-hidden shadow-lg z-10 relative">
        <div
          className="bg-gradient-to-r from-blue-700 to-blue-500 h-full rounded-full transition-all duration-300 flex items-center justify-center text-yellow-300 font-bold text-xl whitespace-nowrap"
          style={{ width: `${progress}%` }}
        >
          <span
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{ pointerEvents: "none" }}
          >
            Progress {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
}
