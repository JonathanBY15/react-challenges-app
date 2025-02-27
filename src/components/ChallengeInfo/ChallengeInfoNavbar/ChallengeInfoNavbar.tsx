import React, { useRef, useState, useEffect } from "react";
import "./ChallengeInfoNavbar.css";

// React Icons
import { CiMemoPad } from "react-icons/ci";          // Description
import { FaEye } from "react-icons/fa";              // Preview
import { FaFlask } from "react-icons/fa6";           // Test Cases
import { FaFlagCheckered } from "react-icons/fa";    // Solution

interface ChallengeInfoNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ChallengeInfoNavbar: React.FC<ChallengeInfoNavbarProps> = ({ activeTab, setActiveTab }) => {
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

  const tabs = [
    { name: "Description", icon: <CiMemoPad /> },
    { name: "Preview", icon: <FaEye /> },
    { name: "Test Cases", icon: <FaFlask /> },
    { name: "Solution", icon: <FaFlagCheckered /> }
  ];

  // Determine button class based on width
  let smallButtonClass = "";
  if (navbarWidth < 400) {
    smallButtonClass = "tiny-width";
  } else if (navbarWidth < 428) {
    smallButtonClass = "small-width";
  } else if (navbarWidth < 492) {
    smallButtonClass = "medium-width";
  }

  return (
    <div
      ref={navbarRef}
      className="challenge-info-navbar flex flex-wrap space-x-4 p-2 bg-[#282828] rounded shadow-md"
    >
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`flex items-center py-2 px-4 rounded transition-colors cursor-pointer duration-300 
            ${smallButtonClass} 
            ${activeTab === tab.name ? "bg-[#414141]" : "text-white hover:bg-[#2e2e2e]"}`}
          onClick={() => setActiveTab(tab.name)}
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default ChallengeInfoNavbar;
