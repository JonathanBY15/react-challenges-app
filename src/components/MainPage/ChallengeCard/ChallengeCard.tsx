import React from "react";

export interface Challenge {
  name: string;
  number: number;
  difficulty: "Easy" | "Medium" | "Hard";
}

interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  return (
    <div className="bg-[#3f3f3f] shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 rounded-lg p-4 w-64 cursor-pointer transition duration-200">
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
