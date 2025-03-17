import { useState, useEffect } from "react";

const useElementWidth = (elementRef: React.RefObject<HTMLElement | null>) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!elementRef.current) return; // Exit early if ref is null

    const updateWidth = () => {
      if (elementRef.current) {
        setWidth(elementRef.current.offsetWidth);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(elementRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [elementRef.current]); // Use elementRef.current instead of elementRef to trigger effect properly

  return width;
};

export default useElementWidth;

