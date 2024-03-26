import { useEffect, useState } from "react";

export const useScrollOnY = () => {
  const [scrolledtop, setscrolltop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 100) {
        setscrolltop(false);
      } else {
        setscrolltop(true);
      }
    });
  }, []);

  return scrolledtop;
};
