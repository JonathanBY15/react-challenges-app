import { useState, useEffect } from "react";

/**
 * Custom hook to track the width of a given HTML element.
 * Uses the ResizeObserver API to update the width dynamically when the element resizes.
 *
 * @param {React.RefObject<HTMLElement | null>} elementRef - A ref object pointing to the target element.
 * @returns {number} The current width of the element in pixels.
 *
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement | null>(null);
 * const width = useElementWidth(ref);
 * 
 * return <div ref={ref}>Width: {width}px</div>;
 * ```
 */

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

