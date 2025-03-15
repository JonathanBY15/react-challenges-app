/**
 * CodeEditorMobile component to display a <ChallengeInfo>, code editor, file explorer, and live preview.
 * 
 * Fetches challenge data(json), displays the challenge name and description, renders a split code editor and file explorer, 
 * and provides a live preview of the code in the challenge.
 * 
 * There is a JSON file for each challenge in "react-challenges-app\src\data\challenge-data" that stores the data for that challenge.
 * 
 * @component
 */

import React, { useState, useEffect } from "react";
import ChallengeInfo, { Challenge } from "../../ChallengeInfo/ChallengeInfo";
import "./CodeEditorMobile.css";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackFileExplorer,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { monokaiPro } from "@codesandbox/sandpack-themes";
import Split from "react-split";

// Custom Hook to persist split sizes in localStorage
const useStoredSizes = (key: string, defaultSizes: number[]) => {
  const getStoredSizes = () => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultSizes;
  };

  const [sizes, setSizes] = useState<number[]>(getStoredSizes());

  const handleDrag = (newSizes: number[]) => {
    setSizes(newSizes);
    localStorage.setItem(key, JSON.stringify(newSizes));
  };

  return [sizes, handleDrag] as const;
};

const CodeEditorMobile: React.FC = () => {
  const [challengeData, setChallengeData] = useState<Challenge | null>(null);

  // Vertical stack sizes
  const [sizesVertical, handleDragVertical] = useStoredSizes(
    "split-sizes-vertical-mobile",
    [25, 10, 25, 40] // Equal split initially
  );

  useEffect(() => {
    fetch("/src/data/challenge-data/challenge1.json")
      .then((response) => response.json())
      .then((data) => setChallengeData(data))
      .catch((error) => console.error("Error fetching challenge data:", error));
  }, []);

  if (!challengeData) {
    return <div>Loading challenge...</div>;
  }

  return (
    <div className="mobile-container">
      <SandpackProvider theme={monokaiPro} template="react">
        <SandpackLayout>
          {/* Single vertical Split for all sections */}
          <Split
            direction="vertical"
            minSize={170}
            snapOffset={0}
            sizes={sizesVertical}
            onDragEnd={handleDragVertical}
            className="split-vertical"
          >
            {/* Challenge Description */}
            <div className="challenge-description-window">
              <ChallengeInfo challenge={challengeData} />
            </div>

            {/* File Explorer */}
            <div className="file-explorer-container">
              <SandpackFileExplorer />
            </div>

            {/* Code Editor */}
            <div className="editor-container">
              <SandpackCodeEditor closableTabs showTabs />
            </div>

            {/* Preview */}
            <div className="preview-container">
              <SandpackPreview showNavigator showOpenInCodeSandbox={false} />
            </div>
          </Split>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

export default CodeEditorMobile;
