import React from "react";
import ChallengeList from "./ChallengeList/ChallengeList";
import { Challenge } from "./ChallengeCard/ChallengeCard";

const MainPage: React.FC = () => {
  const challenges: Challenge[] = [
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Graph Traversal", number: 3, difficulty: "Hard" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#282828] p-8 size-full">
      <h1 className="text-3xl font-bold mb-6">Coding Challenges</h1>
      <ChallengeList challenges={challenges} />
    </div>
  );
};

export default MainPage;
