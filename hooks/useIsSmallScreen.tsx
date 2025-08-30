"use client";
import { useEffect, useState } from "react";

export const useIsSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)"); // Tailwind's sm = 640px

    const handleChange = () => setIsSmallScreen(mediaQuery.matches);

    handleChange(); // initial check
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isSmallScreen;
};
