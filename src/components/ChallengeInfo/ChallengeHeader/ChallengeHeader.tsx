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
