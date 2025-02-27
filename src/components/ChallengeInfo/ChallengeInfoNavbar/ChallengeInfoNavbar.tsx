import React from "react";
import "./ChallengeInfoNavbar.css";


// Props: activeTab(str), setActiveTab(func)
interface ChallengeInfoNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ChallengeInfoNavbar: React.FC<ChallengeInfoNavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ["Description", "Preview", "Test Cases", "Solution"];

  return (
    <div className="challenge-info-navbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? "active-tab" : ""}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ChallengeInfoNavbar;
