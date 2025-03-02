/**
 * Displays challenge-related content based on the selected tab.
 * Renders the challenge description, preview GIF, test cases, and solution.
 * 
 * @component
 * @param {string} activeTab - The currently selected tab.
 * @param {ContentElement[]} description - The challenge description content.
 * @param {string} previewGif - URL of the preview GIF.
 * @param {ContentElement[]} testCases - The challenge test cases content.
 * @param {ContentElement[]} solution - The challenge solution content.
 * @returns {JSX.Element} The rendered challenge content.
 */


import React from "react";
import "./ChallengeContent.css";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


interface ContentElement {
  type: "p" | "h1" | "h2" | "ul" | "code";
  content: string | string[]; // Paragraphs, lists, or preformatted code
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
        return (
          // <pre key={index}>
          //   <code>{element.content}</code>
          // </pre>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {element.content}
          </SyntaxHighlighter>
        );
      default:
        return null;
    }
  });
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
