import React from "react";
import ChallengeCard, { Challenge } from "../ChallengeCard/ChallengeCard";

interface ChallengeListProps {
  challenges: Challenge[];
}

const ChallengeList: React.FC<ChallengeListProps> = ({ challenges }) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge.number} challenge={challenge} />
      ))}
    </div>
  );
};

export default ChallengeList;
