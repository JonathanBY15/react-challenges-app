// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { PiFire } from "react-icons/pi";
// import "./ChallengeCard.css";

// export interface Challenge {
//   name: string;
//   number: number;
//   difficulty: "Easy" | "Medium" | "Hard";
// }

// interface ChallengeCardProps {
//   challenge: Challenge;
// }

// const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
//   const navigate = useNavigate();

//   return (
//     <li 
//       className="challenge-card bg-[#444344] border-b-1 rounded-[3px] p-4 w-full cursor-pointer 
//       transition duration-200 hover:bg-[#383838] list-none"
//       onClick={() => navigate("/code")}
//     > 
//       <h2 className="text-l text-white">
//         {challenge.number}. {challenge.name}
//       </h2>

//       <span className={`flex min-w-[100px] items-center justify-center text-center gap-1 px-3 py-1 mt-2 text-white text-sm font-semibold rounded-md ${getBadgeColor(challenge.difficulty)}`}>
//         <PiFire /> {challenge.difficulty}
//       </span>
//     </li>
//   );
// };

// // Function to determine badge colors dynamically
// const getBadgeColor = (difficulty: Challenge["difficulty"]) => {
//   switch (difficulty) {
//     case "Easy":
//       return "bg-green-600/40";
//     case "Medium":
//       return "bg-yellow-600/50";
//     case "Hard":
//       return "bg-red-600/40";
//     default:
//       return "bg-gray-600/40";
//   }
// };

// export default ChallengeCard;

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
                 transition-all duration-200 list-none flex flex-col justify-between aspect-[5/2] sm:aspect-[4/2] lg:aspect-[3/2] 
                 relative hover:bg-[#2d3536] group"
      onClick={() => navigate("/code")}
    >
      {/* Top Section */}
      <div className="flex justify-between text-white text-xs font-semibold">
        <span>{challenge.number}. {challenge.name}</span>
        <span className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs ${getBadgeColor(challenge.difficulty)}`}>
          <PiFire className="text-sm text-amber-50" /> {challenge.difficulty}
        </span>
      </div>

      {/* Middle Section */}
      <p className="text-gray-300 text-xs text-start flex-1 flex items-center justify-center px-0 leading-tight">
        {challenge.description || "Solve this challenge to test your skills! Lorem Lorem ipsum Lorem lorem sssa sads."}
      </p>

      {/* Bottom Right Arrow (Glows when card is hovered) */}
      <div className="flex justify-end">
        <FaArrowRight className="text-gray-400 text-base transition-all duration-300 group-hover:text-[#61DAFB] group-hover:drop-shadow-[0_0_8px_#61DAFB]" />
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
