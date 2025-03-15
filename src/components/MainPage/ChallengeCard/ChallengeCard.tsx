/**
 * A ChallengeCard component that displays information about a coding challenge.
 *
 * @type {object} Challenge
 * @property {string} name - The name of the challenge.
 * @property {number} number - The challenge number.
 * @property {"Easy" | "Medium" | "Hard"} difficulty - The difficulty level of the challenge.
 * @property {string} [description] - The description of the challenge.
 *
 * @type {object} ChallengeCardProps
 * @property {Challenge} challenge - The challenge details to display.
 *
 * @param {ChallengeCardProps} props - The props for the ChallengeCard component.
 * @returns {JSX.Element} The rendered ChallengeCard component.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { PiFire } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";

// Fields for each challenge
export interface Challenge {
  name: string;
  number: number;
  difficulty: "Easy" | "Medium" | "Hard";
  description?: string;
}

// Takes a Challenge prop
interface ChallengeCardProps {
  challenge: Challenge;
}

// Function to determine dificulty colors dynamically
// Returns a Tailwind utility class with a custom text color
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

// ChallengeCard component
const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  const navigate = useNavigate();

  return (
    // Outer ListItem (ChallengeCard)
    <li className="bg-[#161616a6] flex flex-col justify-between gap-2 rounded-md p-3 cursor-pointer 
                transition-all duration-200 list-none aspect-[6/2] sm:aspect-[4/2] lg:aspect-[3/2] 
                relative hover:bg-[#16161641] 
                hover:shadow-[0_-4px_8px_0_rgba(59,130,246,0.3),0_4px_8px_0_rgba(59,130,246,0.3),0_0_8px_0_rgba(59,130,246,0.3)] group" 
                onClick={() => navigate("/code")}
    >
      {/* Top Section */}
      <div className="flex justify-between text-white font-semibold">
        <span className="text-md md:text-lg">{challenge.number}. {challenge.name}</span> {/* Challenge Number and Name */}
        <span className={`flex items-center gap-1 px-2 py-1 text-xs ${getBadgeColor(challenge.difficulty)}`}> {/* Challenge Difficulty */}
          <PiFire className="text-sm text-amber-50" /> {challenge.difficulty}
        </span>
      </div>

      {/* Middle Section */}
      <p className="flex justify-center flex-1 text-start text-gray-300 text-sm md:text-md leading-tight px-0">
        {challenge.description || "No Challenge Description was provided by the developer. They should probably get to work."} {/* Challenge Description */}
      </p>

      {/* Bottom Right Arrow */}
      <div className="flex justify-end">
        <FaArrowRight className="text-gray-400 text-base transition-all duration-300 group-hover:text-[#61dafbbd] group-hover:drop-shadow-[0_0_8px_#61DAFB]" />
      </div>
    </li>
  );
};

export default ChallengeCard;
