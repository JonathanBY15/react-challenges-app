import React from "react";
import { FaReact } from "react-icons/fa";
import ChallengeList from "./ChallengeList/ChallengeList";
import SearchBar from "./SearchBar/SearchBar";
import { Challenge } from "./ChallengeCard/ChallengeCard";
import GradientBlob from "../GradientBlob/GradientBlob";

const MainPage: React.FC = () => {
  const challenges: Challenge[] = [
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Graph Traversal", number: 3, difficulty: "Hard" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Graph Traversal", number: 3, difficulty: "Hard" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Graph Traversal", number: 3, difficulty: "Hard" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Graph Traversal", number: 3, difficulty: "Hard" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
  ];

  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-[#282828] w-full pt-[96px] pb-[40px] px-[40px] relative overflow-auto gap-2 sm:gap-4">
      <GradientBlob size={300} top="10%" left="10%" />
      <GradientBlob size={250} bottom="20%" right="15%" opacity={0.5} animationDelay="1s" />
      <GradientBlob size={200} top="50%" left="50%" opacity={0.7} animationDelay="2s" />
      <GradientBlob size={280} top="5%" right="5%" opacity={0.6} animationDelay="1.5s" colors={["#4a00e0", "#8e44ad", "#00d4ff"]} />
      <GradientBlob size={230} bottom="10%" left="20%" opacity={0.5} animationDelay="0.8s" colors={["#1e3c72", "#2a5298", "#6a0dad"]} />

      {/* Heading and Subheading */}
      <div className="w-full max-w-3xl">
        <div className="flex items-center gap-5 mb-2">
          <div className="p-3 sm:p-4 rounded-2xl shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 relative">
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-40 blur-lg"></div>
            <FaReact className="text-white text-xl md:text-3xl lg:text-4xl relative z-10" />
          </div>
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">React Coding Challenges</h1>
        </div>
        <p className="text-gray-300 text-base sm:text-md md:text-lg lg:text-xl mb-6 font-normal">
          20+ React coding challenges to practice your frontend skills and prepare for interviews.
        </p>
      </div>

      <SearchBar></SearchBar>

      {/* Challenge List */}
      <ChallengeList challenges={challenges} />
    </div>
  );
};

export default MainPage;
