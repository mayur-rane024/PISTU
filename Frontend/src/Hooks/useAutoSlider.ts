// src/hooks/useAutoSlider.ts

import { useEffect } from "react";

export const useAutoSlider = (
  length: number,
  setIndex: React.Dispatch<React.SetStateAction<number>>,
  intervalTime = 15000
) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [length, setIndex, intervalTime]);
};
