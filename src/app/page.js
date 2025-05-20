"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter to handle navigation
import Start from "@/components/Start";
import Consent from "@/components/Consent";

export default function Home() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("start");
  const [progress, setProgress] = useState(0);

  // Handle Start Page to Consent Page Transition
  useEffect(() => {
    if (currentPage === "start") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setCurrentPage("consent"), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 60);

      return () => clearInterval(interval);
    }
  }, [currentPage]);

  // Handle Consent Page to Survey Page transition
  const handleConsentContinue = () => {
    router.push("/survey");
  };

  // Render the current page based on the state
  const renderPage = () => {
    switch (currentPage) {
      case "start":
        return <Start progress={progress} />;
      case "consent":
        return <Consent onContinue={handleConsentContinue} />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
}
