import React from "react";
import { useNavigate } from "react-router-dom";

export interface Challenge {
  name: string;
  number: number;
  difficulty: "Easy" | "Medium" | "Hard";
}

interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#3f3f3f] shadow-lg shadow-[#58C4DC]/30 hover:shadow-[#58C4DC]/40 rounded-lg p-4 w-full cursor-pointer transition duration-200" onClick={() => navigate("/code")}>
      <h2 className="text-xl font-bold text-white">{challenge.name}</h2>
      <p className="text-white">Challenge #{challenge.number}</p>
      <p className={`text-sm font-semibold ${getDifficultyColor(challenge.difficulty)}`}>
        Difficulty: {challenge.difficulty}
      </p>
    </div>
  );
};

const getDifficultyColor = (difficulty: Challenge["difficulty"]) => {
  switch (difficulty) {
    case "Easy":
      return "text-green-500";
    case "Medium":
      return "text-yellow-500";
    case "Hard":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

export default ChallengeCard;
