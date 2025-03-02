// /**
//  * Displays challenge-related content based on the selected tab.
//  * Renders the challenge description, preview GIF, test cases, and solution.
//  * 
//  * @component
//  * @param {string} activeTab - The currently selected tab.
//  * @param {ContentElement[]} description - The challenge description content.
//  * @param {string} previewGif - URL of the preview GIF.
//  * @param {ContentElement[]} testCases - The challenge test cases content.
//  * @param {ContentElement[]} solution - The challenge solution content.
//  * @returns {JSX.Element} The rendered challenge content.
//  */


// import React from "react";
// import "./ChallengeContent.css";

// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


// interface ContentElement {
//   type: "p" | "h1" | "h2" | "ul" | "code";
//   content: string | string[]; // Paragraphs, lists, or preformatted code
//   file: string;
// }

// interface ChallengeContentProps {
//   activeTab: string;
//   description: ContentElement[];
//   previewGif: string;
//   testCases: ContentElement[];
//   solution: ContentElement[];
// }

// /**
//  * Converts challenge json files into corresponding React elements.
//  * Cases: p, h1, h2, ul, code
//  */
// const renderContent = (contentArray: ContentElement[]) => {
//   return contentArray.map((element, index) => {
//     switch (element.type) {
//       case "p":
//         return <p key={index}>{element.content}</p>;
//       case "h1":
//         return <h1 key={index}>{element.content}</h1>;
//       case "h2":
//         return <h2 key={index}>{element.content}</h2>;
//       case "ul":
//         return (
//           <ul key={index}>
//             {(element.content as string[]).map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         );
//       case "code":
//         return (
//           <SyntaxHighlighter language="jsx" style={darcula}>
//             {`${element.file}`}
//           </SyntaxHighlighter>
//         );
//       default:
//         return null;
//     }
//   });
// };

// const ChallengeContent: React.FC<ChallengeContentProps> = ({
//   activeTab,
//   description,
//   previewGif,
//   testCases,
//   solution,
// }) => {
//   return (
//     <div className="challenge-content">
//       {activeTab === "Description" && renderContent(description)}
//       {activeTab === "Preview" && <img src={previewGif} alt="Preview" />}
//       {activeTab === "Test Cases" && renderContent(testCases)}
//       {activeTab === "Solution" && renderContent(solution)}
//     </div>
//   );
// };

// export default ChallengeContent;



import React, { useEffect, useState } from "react";
import "./ChallengeContent.css";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface ContentElement {
  type: "p" | "h1" | "h2" | "ul" | "code";
  content: string | string[]; // Paragraphs, lists, or preformatted code
  file: string;
}

interface ChallengeContentProps {
  activeTab: string;
  description: ContentElement[];
  previewGif: string;
  testCases: ContentElement[];
  solution: ContentElement[];
}

/**
 * Converts challenge json files into corresponding React elements.
 * Cases: p, h1, h2, ul, code
 */
const renderContent = (contentArray: ContentElement[]) => {
  return contentArray.map((element, index) => {
    switch (element.type) {
      case "p":
        return <p key={index}>{element.content}</p>;
      case "h1":
        return <h1 key={index}>{element.content}</h1>;
      case "h2":
        return <h2 key={index}>{element.content}</h2>;
      case "ul":
        return (
          <ul key={index}>
            {(element.content as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      case "code":
        return <SyntaxHighlighterWrapper key={index} filePath={element.file} />;
      default:
        return null;
    }
  });
};

const SyntaxHighlighterWrapper: React.FC<{ filePath: string }> = ({ filePath }) => {
  const [code, setCode] = useState('');

  useEffect(() => {
    // Fetch the file content dynamically based on the path from 'filePath'
    fetch(filePath)
      .then((response) => response.text()) // Fetch file content as text
      .then((text) => setCode(text)); // Set the content to state
  }, [filePath]);

  return (
    <SyntaxHighlighter language="tsx" style={darcula}>
      {code} {/* This is the plain text passed to the syntax highlighter */}
    </SyntaxHighlighter>
  );
};

const ChallengeContent: React.FC<ChallengeContentProps> = ({
  activeTab,
  description,
  previewGif,
  testCases,
  solution,
}) => {
  return (
    <div className="challenge-content">
      {activeTab === "Description" && renderContent(description)}
      {activeTab === "Preview" && <img src={previewGif} alt="Preview" />}
      {activeTab === "Test Cases" && renderContent(testCases)}
      {activeTab === "Solution" && renderContent(solution)}
    </div>
  );
};

export default ChallengeContent;
