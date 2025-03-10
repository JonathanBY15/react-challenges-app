// import React from "react";
// import ChallengeCard, { Challenge } from "../ChallengeCard/ChallengeCard";

// interface ChallengeListProps {
//   challenges: Challenge[];
// }

// const ChallengeList: React.FC<ChallengeListProps> = ({ challenges }) => {
//   return (
//     <ul className="w-full max-w-xl max-h-[80vh] mx-auto overflow-y-auto">
//       {challenges.map((challenge) => (
//         <ChallengeCard key={challenge.number} challenge={challenge} />
//       ))}
//     </ul>
//   );
// };


// export default ChallengeList;


import React from "react";
import ChallengeCard, { Challenge } from "../ChallengeCard/ChallengeCard";

interface ChallengeListProps {
  challenges: Challenge[];
}

const ChallengeList: React.FC<ChallengeListProps> = ({ challenges }) => {
  return (
    <ul
      className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-4 p-4"
    >
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge.number} challenge={challenge} />
      ))}
    </ul>
  );
};

export default ChallengeList;
