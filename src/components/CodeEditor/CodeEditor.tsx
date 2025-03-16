/**
 * Conditionally renders a desktop or mobile version of the code editor based on the screen size.
 * 
 * Mobile Breakpoint: 1023px
 * 
 */

import React, { useState, useEffect } from "react";
import CodeEditorDesktop from "./CodeEditorDesktop/CodeEditorDesktop";
import CodeEditorMobile from "./CodeEditorMobile/CodeEditorMobile";

const CodeEditor: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check the screen width and update state accordingly
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 1023px)").matches);
    };

    // Initial check
    checkMobile();

    // Event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile ? <CodeEditorMobile /> : <CodeEditorDesktop />;
};

export default CodeEditor;
