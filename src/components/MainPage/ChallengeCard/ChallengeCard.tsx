import React from "react";
import { useNavigate } from "react-router-dom";
import { PiFire } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import "./ChallengeCard.css";

export interface Challenge {
  name: string;
  number: number;
  difficulty: "Easy" | "Medium" | "Hard";
  description?: string;
}

interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  const navigate = useNavigate();

  return (
      <li
        className="bg-[#161616a6] rounded-md p-3 cursor-pointer 
                  transition-all duration-200 list-none flex flex-col justify-between aspect-[6/2] sm:aspect-[4/2] lg:aspect-[3/2] 
                  relative hover:bg-[#16161641] 
                  hover:shadow-[0_-4px_8px_0_rgba(59,130,246,0.3),0_4px_8px_0_rgba(59,130,246,0.3),0_0_8px_0_rgba(59,130,246,0.3)]  gap-2
                  group"
        onClick={() => navigate("/code")}
      >
      {/* Top Section */}
      <div className="flex justify-between text-white font-semibold">
        <span>{challenge.number}. {challenge.name}</span>
        <span className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs ${getBadgeColor(challenge.difficulty)}`}>
          <PiFire className="text-sm text-amber-50" /> {challenge.difficulty}
        </span>
      </div>

      {/* Middle Section */}
      <p className="text-gray-300 text-start flex-1 flex justify-center px-0 leading-tight">
        {challenge.description || "Solve this challenge to test your skills! Lorem Lorem ipsum Lorem lorem sssa sads."}
      </p>

      {/* Bottom Right Arrow (Glows when card is hovered) */}
      <div className="flex justify-end">
        <FaArrowRight className="text-gray-400 text-base transition-all duration-300 group-hover:text-[#61dafbbd] group-hover:drop-shadow-[0_0_8px_#61DAFB]" />
      </div>
    </li>
  );
};

// Function to determine dificulty colors dynamically
const getBadgeColor = (difficulty: Challenge["difficulty"]) => {
  switch (difficulty) {
    case "Easy":
      return "text-[#3B865C]";
    case "Medium":
      return "text-[#F9C526]";
    case "Hard":
      return "text-[#F2355F]";
    default:
      return "text-gray-600/40";
  }
};

export default ChallengeCard;
