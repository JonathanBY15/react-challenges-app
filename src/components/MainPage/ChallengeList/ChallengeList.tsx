import React from "react";
import ChallengeCard, { Challenge } from "../ChallengeCard/ChallengeCard";

interface ChallengeListProps {
  challenges: Challenge[];
}

const ChallengeList: React.FC<ChallengeListProps> = ({ challenges }) => {
  return (
    <ul className="w-full max-w-lg mx-auto">
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge.number} challenge={challenge} />
      ))}
    </ul>
  );
};


export default ChallengeList;
