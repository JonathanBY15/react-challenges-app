/**
 * A list component that displays multiple coding challenge cards.
 *
 * @type {object} ChallengeListProps
 * @property {Challenge[]} challenges - An array of coding challenges to display.
 *
 * @param {ChallengeListProps} props - The props for the ChallengeList component.
 * @returns {JSX.Element} The rendered ChallengeList component.
 */


import React from "react";
import ChallengeCard, { Challenge } from "../ChallengeCard/ChallengeCard";

interface ChallengeListProps {
  challenges: Challenge[]; // An array of coding challenges to display.
}

const ChallengeList: React.FC<ChallengeListProps> = ({ challenges }) => {
  return (
    <ul className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-1 p-0">

      {/** Render a ChallengeCard component for each challenge in the array */}
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge.number} challenge={challenge} />
      ))}
    </ul>
  );
};

export default ChallengeList;
