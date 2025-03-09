import React from "react";
import ChallengeList from "./ChallengeList/ChallengeList";
import ChallengeCard from "./ChallengeCard/ChallengeCard";
import { Challenge } from "./ChallengeCard/ChallengeCard";

const MainPage: React.FC = () => {
  const challenges: Challenge[] = [
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Graph Traversal", number: 3, difficulty: "Hard" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Graph Traversal", number: 3, difficulty: "Hard" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Graph Traversal", number: 3, difficulty: "Hard" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Graph Traversal", number: 3, difficulty: "Hard" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Graph Traversal", number: 3, difficulty: "Hard" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Graph Traversal", number: 3, difficulty: "Hard" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Graph Traversal", number: 3, difficulty: "Hard" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
    { name: "Graph Traversal", number: 3, difficulty: "Hard" },
    { name: "Dynamic Programming", number: 4, difficulty: "Hard" },
    { name: "Recursion Basics", number: 5, difficulty: "Medium" },
    { name: "Array Manipulation", number: 1, difficulty: "Easy" },
    // { name: "Sorting Algorithm", number: 2, difficulty: "Medium" },
  ];

  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-[#282828] w-full p-[96px]">
      <h1 className="text-white text-3xl font-bold mb-6">Coding Challenges</h1>
      <ChallengeList challenges={challenges} />
      <ChallengeCard challenge={challenges[2]}></ChallengeCard>
    </div>
  ); 
  
};

export default MainPage;
