/**
 * Navigation bar for selecting different challenge sections (description, preview, test cases, solution).
 * Dynamically adjusts button styles based on the navbar width.
 * Uses useElementWidth hook.
 *  
 * @component
 * @param {string} activeTab - The currently selected tab.
 * @param {(tab: string) => void} setActiveTab - Function to update the active tab.
 * @returns {JSX.Element} The rendered challenge navigation bar.
 */

import React, { useRef } from "react";
import "./ChallengeNavbar.css";
import useElementWidth from "../../../hooks/useElementWidth";

// React Icons
import { CiMemoPad } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaFlask } from "react-icons/fa6";
import { FaFlagCheckered } from "react-icons/fa";

interface ChallengeNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ChallengeNavbar: React.FC<ChallengeNavbarProps> = ({ activeTab, setActiveTab }) => {
  const navbarRef = useRef<HTMLDivElement>(null);  // Create a ref for the navbar
  const navbarWidth = useElementWidth(navbarRef);  // Use the custom hook

  const tabs = [
    { name: "Description", icon: <CiMemoPad /> },
    { name: "Preview", icon: <FaEye /> },
    { name: "Test Cases", icon: <FaFlask /> },
    { name: "Solution", icon: <FaFlagCheckered /> }
  ];

  let smallButtonClass = "";
  if (navbarWidth < 318) {
    smallButtonClass = "xx-tiny-width";
  } else if (navbarWidth < 334) {
    smallButtonClass = "ex-tiny-width";
  } else if (navbarWidth < 400) {
    smallButtonClass = "tiny-width";
  } else if (navbarWidth < 428) {
    smallButtonClass = "small-width";
  } else if (navbarWidth < 492) {
    smallButtonClass = "medium-width";
  }

  return (
    <div
      ref={navbarRef}  // Attach the ref to the div
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

export default ChallengeNavbar;
