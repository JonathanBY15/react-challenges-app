import { useState, useEffect, useRef } from "react";

const useNavbarWidth = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [navbarWidth, setNavbarWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (navbarRef.current) {
        setNavbarWidth(navbarRef.current.offsetWidth);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    if (navbarRef.current) {
      resizeObserver.observe(navbarRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return { navbarRef, navbarWidth };
};

export default useNavbarWidth;
