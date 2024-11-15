
"use client";

import { useState, useEffect } from "react";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (adjust as needed)
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center text-white z-50 bg-custom-gradient">
      <p className="mt-4 text-xl">Welcome to my portfolio</p>
    </div>
  );
};

export default SplashScreen;
