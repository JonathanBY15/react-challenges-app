/**
 * Displays the header for a coding challenge, including its id(challenge number), name, and difficulty level.
 * The difficulty badge dynamically applies a CSS class based on the difficulty level.
 *  
 * @component
 * @param {number} id - The unique identifier for the challenge (challenge number).
 * @param {string} name - The name of the challenge.
 * @param {"Easy" | "Medium" | "Hard"} difficulty - The difficulty level of the challenge.
 * @returns {JSX.Element} The rendered challenge header component.
 */

import React from "react";
import { PiFire } from "react-icons/pi";
import "./ChallengeHeader.css";

interface ChallengeHeaderProps {
  id: number;
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const ChallengeHeader: React.FC<ChallengeHeaderProps> = ({ id, name, difficulty }) => {
  return (
    <div className="challenge-header">
      <h1>
        {id}. {name}
      </h1>
      <span className={`badge badge-${difficulty.toLowerCase()}`}><PiFire /> {difficulty}</span>
    </div>
  );
};

export default ChallengeHeader;
