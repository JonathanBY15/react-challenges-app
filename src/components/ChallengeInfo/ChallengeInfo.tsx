import React, { useState } from "react";
import ChallengeInfoNavbar from "./ChallengeInfoNavbar/ChallengeInfoNavbar";
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

  const difficultyColors = {
    Easy: "green",
    Medium: "orange",
    Hard: "red",
  };

  return (
    <div className="challenge-info-container">
      {/* ChallengeInfoNavbar */}
      <ChallengeInfoNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Challenge Header */}
      <h1>
        {challenge.id}. {challenge.name}{" "}
        <span style={{ color: difficultyColors[challenge.difficulty] }}>
          {challenge.difficulty}
        </span>
      </h1>

      {/* Tab Content */}
      <div className="content">
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
  );
};

export default ChallengeInfo;
