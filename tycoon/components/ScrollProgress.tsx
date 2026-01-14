"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollHeight > 0) {
        setProgress((scrollTop / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress(); // initial

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-(--navbar-h) right-0 left-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-(--cyan) transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
