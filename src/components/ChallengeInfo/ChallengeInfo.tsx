// import React, { useState } from "react";
// import ChallengeNavbar from "./ChallengeNavbar/ChallengeNavbar";
// import ChallengeHeader from "./ChallengeHeader/ChallengeHeader";
// import ChallengeContent from "./ChallengeContent/ChallengeContent";
// import "./ChallengeInfo.css";

// // Challenge Props
// export interface Challenge {
//   id: number;
//   name: string;
//   difficulty: "Easy" | "Medium" | "Hard";
//   description: string;
//   previewGif: string;
//   testCases: string[];
//   solution: string;
// }

// const ChallengeInfo: React.FC<{ challenge: Challenge }> = ({ challenge }) => {
//   const [activeTab, setActiveTab] = useState("Description");

//   return (
//     <div className="challenge-info-container">
//       {/* ChallengeNavbar */}
//       <ChallengeNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="challenge-header-content-container">
//         {/* Challenge Header */}
//         <ChallengeHeader id={challenge.id} name={challenge.name} difficulty={challenge.difficulty} />

//         {/* Challenge Content */}
//         <ChallengeContent
//           activeTab={activeTab}
//           description={challenge.description}
//           previewGif={challenge.previewGif}
//           testCases={challenge.testCases}
//           solution={challenge.solution}
//         />
//       </div>
//     </div>
//   );
// };

// export default ChallengeInfo;



import React, { useState } from "react";
import ChallengeNavbar from "./ChallengeNavbar/ChallengeNavbar";
import ChallengeHeader from "./ChallengeHeader/ChallengeHeader";
import ChallengeContent from "./ChallengeContent/ChallengeContent";
import "./ChallengeInfo.css";

// ContentElement type (matching your new structure)
export interface ContentElement {
  type: "p" | "h1" | "h2" | "ul" | "code";
  content: string | string[]; // Paragraphs, lists, or preformatted code
}

// Updated Challenge Props to match the new structure
export interface Challenge {
  id: number;
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: ContentElement[]; // Array of ContentElement
  previewGif: string;
  testCases: ContentElement[]; // Array of ContentElement
  solution: ContentElement[]; // Array of ContentElement
}

const ChallengeInfo: React.FC<{ challenge: Challenge }> = ({ challenge }) => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="challenge-info-container">
      {/* ChallengeNavbar */}
      <ChallengeNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="challenge-header-content-container">
        {/* Challenge Header */}
        <ChallengeHeader
          id={challenge.id}
          name={challenge.name}
          difficulty={challenge.difficulty}
        />

        {/* Challenge Content */}
        <ChallengeContent
          activeTab={activeTab}
          description={challenge.description}
          previewGif={challenge.previewGif}
          testCases={challenge.testCases}
          solution={challenge.solution}
        />
      </div>
    </div>
  );
};

export default ChallengeInfo;
