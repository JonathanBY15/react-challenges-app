/**
 * Displays the detailed information of a coding challenge, including the navigation, header, 
 * and content sections (description, preview, test cases, and solution).
 * The active tab is dynamically controlled using the state.
 * 
 * @component
 * @param {Challenge} challenge - The challenge data(json) to display (id, name, difficulty, description, preview GIF, test cases, and solution)
 * @returns {JSX.Element} The rendered challenge info container with its sub-components.
 */

import React, { useState } from "react";
import ChallengeNavbar from "./ChallengeNavbar/ChallengeNavbar";
import ChallengeHeader from "./ChallengeHeader/ChallengeHeader";
import ChallengeContent from "./ChallengeContent/ChallengeContent";
import "./ChallengeInfo.css";

interface SolutionFile {
  fileType: string;
  directory: string;
}

// Challenge content elements structure
export interface ContentElement {
  type: "p" | "h1" | "h2" | "ul" | "code";
  content: string | string[]; // Paragraphs, lists, or preformatted code
  files: SolutionFile[];
}

export interface Challenge {
  id: number;
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: ContentElement[];
  previewGif: string;
  testCases: ContentElement[];
  solution: ContentElement[];
}

const ChallengeInfo: React.FC<{ challenge: Challenge }> = ({ challenge }) => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="challenge-info-container">
      {/* ChallengeNavbar */}
      <ChallengeNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="challenge-header-content-container">
        {/* Challenge Header */}
        <ChallengeHeader
          id={challenge.id}
          name={challenge.name}
          difficulty={challenge.difficulty}
        />

        {/* Challenge Content */}
        <ChallengeContent
          activeTab={activeTab}
          description={challenge.description}
          previewGif={challenge.previewGif}
          testCases={challenge.testCases}
          solution={challenge.solution}
        />
      </div>
    </div>
  );
};

export default ChallengeInfo;
