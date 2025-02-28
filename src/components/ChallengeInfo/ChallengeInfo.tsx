import React, { useState } from "react";
import ChallengeInfoNavbar from "./ChallengeInfoNavbar/ChallengeInfoNavbar";
import ChallengeHeader from "./ChallengeHeader/ChallengeHeader";
import "./ChallengeInfo.css";

// Challenge Props
export interface Challenge {
  id: number;
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  previewGif: string;
  testCases: string[];
  solution: string;
}

const ChallengeInfo: React.FC<{ challenge: Challenge }> = ({ challenge }) => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="challenge-info-container">
      {/* ChallengeInfoNavbar */}
      <ChallengeInfoNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="challenge-header-content-container">
        {/* Challenge Header */}
        <ChallengeHeader id={challenge.id} name={challenge.name} difficulty={challenge.difficulty} />

        {/* Tab Content */}
        <div className="challenge-content">
          {activeTab === "Description" && <p>{challenge.description}</p>}
          {activeTab === "Preview" && <img src={challenge.previewGif} alt="Preview" />}
          {activeTab === "Test Cases" && (
            <ul>
              {challenge.testCases.map((test, index) => (
                <li key={index}>{test}</li>
              ))}
            </ul>
          )}
          {activeTab === "Solution" && (
            <pre>
              <code>{challenge.solution}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengeInfo;
