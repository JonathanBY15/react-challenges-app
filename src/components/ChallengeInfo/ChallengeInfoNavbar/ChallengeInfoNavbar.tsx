import React from "react";
import "./ChallengeInfoNavbar.css";

// React Icons
import { CiMemoPad } from "react-icons/ci";          // Description
import { FaEye } from "react-icons/fa";              // Preview
import { FaFlask } from "react-icons/fa6";           // Test Cases
import { FaFlagCheckered } from "react-icons/fa";    // Solution

// Props: activeTab(str), setActiveTab(func)
interface ChallengeInfoNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ChallengeInfoNavbar: React.FC<ChallengeInfoNavbarProps> = ({ activeTab, setActiveTab }) => {
  // Tabs to display, and their respective React Icon's
  const tabs = [
    { name: "Description", icon: <CiMemoPad /> },
    { name: "Preview", icon: <FaEye /> },
    { name: "Test Cases", icon: <FaFlask /> },
    { name: "Solution", icon: <FaFlagCheckered /> }
  ];

  return (
    <div className="challenge-info-navbar flex flex-wrap space-x-4 p-2 bg-[#282828] rounded shadow-md">
      {/* Display the tabs */}
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`flex items-center text-white py-2 px-4 rounded transition-colors cursor-pointer duration-300
            ${activeTab === tab.name ? "bg-[#414141] text-black" : "hover:bg-[#2e2e2e]"}`}
          onClick={() => setActiveTab(tab.name)}
        >
          {/* Icon and Tab Name */}
          <span className="mr-2">{tab.icon}</span>
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default ChallengeInfoNavbar;
