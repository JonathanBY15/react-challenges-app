import React, { useState } from "react";
import "./ChallengeContent.css";
import SolutionCodeBlock from "../SolutionCodeBlock/SolutionCodeBlock";
import PreviewModal from "../PreviewModal/PreviewModal"; // Import the modal component

interface SolutionFile {
  fileType: string;
  directory: string;
}

interface ContentElement {
  type: "p" | "h1" | "h2" | "ul" | "code";
  content?: string | string[];
  files?: SolutionFile[]; // Make files optional since not all types need it
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
          <>
            {element.files?.map((file, fileIndex) => (
              <SolutionCodeBlock key={fileIndex} fileType={file.fileType} directory={file.directory} />
            ))}
          </>
        );
      default:
        return null;
    }
  });
};

/**
 * The main component that handles rendering the challenge content based on the active tab.
 * It displays the challenge description, preview, test cases, and solution, with a modal for preview images.
 * 
 * @param {string} activeTab - The currently active tab ("Description", "Preview", "Test Cases", "Solution").
 * @param {ContentElement[]} description - The description content to be displayed when the "Description" tab is active.
 * @param {string} previewGif - The URL of the preview gif to be displayed when the "Preview" tab is active.
 * @param {ContentElement[]} testCases - The test cases to be displayed when the "Test Cases" tab is active.
 * @param {ContentElement[]} solution - The solution content to be displayed when the "Solution" tab is active.
 */
const ChallengeContent: React.FC<ChallengeContentProps> = ({
  activeTab,
  description,
  previewGif,
  testCases,
  solution,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="challenge-content">
      {activeTab === "Description" && renderContent(description)}
      {activeTab === "Preview" && (
        <>
          <img
            src={previewGif}
            alt="Preview"
            className="preview-gif cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
          {isModalOpen && <PreviewModal imageUrl={previewGif} onClose={() => setIsModalOpen(false)} />}
        </>
      )}
      {activeTab === "Test Cases" && renderContent(testCases)}
      {activeTab === "Solution" && renderContent(solution)}
    </div>
  );
};

export default ChallengeContent;
