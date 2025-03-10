import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import ChallengeList from "./ChallengeList/ChallengeList";
import { Challenge } from "./ChallengeCard/ChallengeCard";
import GradientBlob from "../GradientBlob/GradientBlob";

const MainPage: React.FC = () => {
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(true);
  const [isChallengeTypeOpen, setIsChallengeTypeOpen] = useState(true);

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
    // <div className="flex flex-col justify-start items-center min-h-screen bg-[#282828] w-full p-[96px] relative">
    <div className="flex flex-col justify-start items-center min-h-screen bg-[#282828] w-full p-[96px] relative overflow-auto">

      <GradientBlob size={300} top="10%" left="10%" />
      <GradientBlob size={250} bottom="20%" right="15%" opacity={0.5} animationDelay="1s" />
      <GradientBlob size={200} top="50%" left="50%" opacity={0.7} animationDelay="2s" />
      <GradientBlob size={280} top="5%" right="5%" opacity={0.6} animationDelay="1.5s" colors={["#4a00e0", "#8e44ad", "#00d4ff"]} />
      <GradientBlob size={230} bottom="10%" left="20%" opacity={0.5} animationDelay="0.8s" colors={["#1e3c72", "#2a5298", "#6a0dad"]} />
      {/* Heading and Subheading */}
      <div className="w-full max-w-3xl">
        <div className="flex items-center gap-5 mb-2">
          <div className="p-4 rounded-2xl shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 relative">
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-40 blur-lg"></div>
            <FaReact className="text-white text-2xl sm:text-xl md:text-4xl relative z-10" />
          </div>
          <h1 className="text-white text-2xl sm:text-xl md:text-5xl font-bold">React Coding Challenges</h1>
        </div>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6">
          20+ React coding challenges to practice your frontend skills and prepare for interviews.
        </p>
      </div>


      {/* Challenge List */}
      <ChallengeList challenges={challenges} />

      {/* Filters Section - Anchored to the Right */}
      <div className="absolute right-10 top-[96px] p-6 rounded-lg shadow-md bg-[#00000057] text-white w-64">
        {/* <h2 className="text-xl mb-4 flex items-center gap-2">
          <FaFilter />
          Filters
        </h2> */}

        {/* Difficulty Filter - Accordion */}
        <div className="mb-4">
          <button
            onClick={() => setIsDifficultyOpen(!isDifficultyOpen)}
            className="w-full text-left text-lg font-semibold mb-2 flex justify-between items-center cursor-pointer"
          >
            Difficulty
            <MdKeyboardArrowDown
              className={`transform transition-transform duration-600 ${isDifficultyOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`difficulty-content overflow-hidden transition-all duration-500 ease-in-out ${
              isDifficultyOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-2">
              {["Easy", "Medium", "Hard"].map((difficulty) => (
                <label key={difficulty} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[#3a3a3a10]" />
                  {difficulty}
                </label>
              ))}
            </div>
          </div>
          <hr className="my-2 border-gray-500" />
        </div>

        {/* Challenge Type Filter - Accordion */}
        <div>
          <button
            onClick={() => setIsChallengeTypeOpen(!isChallengeTypeOpen)}
            className="w-full text-left text-lg font-semibold mb-2 flex justify-between items-center cursor-pointer"
          >
            Challenge Type
            <MdKeyboardArrowDown
              className={`transform transition-transform ${isChallengeTypeOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`challenge-type-content overflow-hidden transition-all duration-500 ease-in-out ${
              isChallengeTypeOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-2">
              {["Build a component", "Fix a component", "Style a component", "Refactor a component"].map(
                (type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-[#3a3a3a10]" />
                    {type}
                  </label>
                )
              )}
            </div>
          </div>
          <hr className="my-2 border-gray-500" />
        </div>
      </div>

    </div>
  );
};

export default MainPage;

