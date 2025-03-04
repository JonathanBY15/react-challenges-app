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
//     <div 
//       className="challenge-card bg-[#3f3f3f] border-b-1 rounded-[3px] p-4 w-full cursor-pointer transition duration-200 hover:bg-[#383838] hover:shadow-xl shadow-cyan-200"
//       onClick={() => navigate("/code")}
//     >
//       <h2 className="text-l text-white">
//         {challenge.number}. {challenge.name}
//       </h2>
      
//       {/* Difficulty Badge */}
//       <span className={`badge badge-${challenge.difficulty.toLowerCase()}`}>
//         <PiFire /> {challenge.difficulty}
//       </span>
//     </div>
//   );
// };

// export default ChallengeCard;



import React from "react";
import { useNavigate } from "react-router-dom";
import { PiFire } from "react-icons/pi";
import "./ChallengeCard.css";

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
    <div 
      className="challenge-card bg-[#444344] border-b-1 rounded-[3px] p-4 w-full cursor-pointer 
      transition duration-200 hover:bg-[#474747]"
      onClick={() => navigate("/code")}
    >
      <h2 className="text-l text-white">
        {challenge.number}. {challenge.name}
      </h2>
      
      {/* Difficulty Badge with Tailwind styles */}
      <span className={`flex min-w-[100px] items-center justify-center text-center gap-1 px-3 py-1 mt-2 text-white text-sm font-semibold rounded-md ${getBadgeColor(challenge.difficulty)}`}>
        <PiFire /> {challenge.difficulty}
      </span>
    </div>
  );
};

// Function to determine badge colors dynamically
const getBadgeColor = (difficulty: Challenge["difficulty"]) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-600/40";
    case "Medium":
      return "bg-yellow-600/50";
    case "Hard":
      return "bg-red-600/40";
    default:
      return "bg-gray-600/40";
  }
};

export default ChallengeCard;
