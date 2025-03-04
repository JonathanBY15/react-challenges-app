/**
 * CodeEditor component to display a <ChallengeInfo>, code editor, file explorer, and live preview.
 * 
 * Fetches challenge data(json), displays the challenge name and description, renders a split code editor and file explorer, 
 * and provides a live preview of the code in the challenge.
 * 
 * There is a JSON file for each challenge in "react-challenges-app\src\data\challenge-data" that stores the data for that challenge.
 * 
 * @component
 * @returns {JSX.Element} The rendered CodeEditor component.
 */

import React, { useState, useEffect } from "react";
import ChallengeInfo, { Challenge } from "../ChallengeInfo/ChallengeInfo";
import "./CodeEditor.css";
import { SandpackProvider, SandpackLayout, SandpackFileExplorer, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
import { monokaiPro } from "@codesandbox/sandpack-themes";
import Split from "react-split";
import Navbar from "../Navbar/Navbar";

// Custom Hook to manage localStorage for split screen sizes
const useStoredSizes = (key: string, defaultSizes: number[]) => {
  const getStoredSizes = () => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultSizes;
  };

  const [sizes, setSizes] = useState(getStoredSizes());

  const handleDrag = (newSizes: number[]) => {
    setSizes(newSizes);
    localStorage.setItem(key, JSON.stringify(newSizes));
  };

  return [sizes, handleDrag] as const;
};

const CodeEditor = () => {
  const [challengeData, setChallengeData] = useState<Challenge | null>(null);
  const [sizesHorizontal, handleDragHorizontal] = useStoredSizes("split-sizes-horizontal", [20, 40, 40]);
  const [sizesVertical, handleDragVertical] = useStoredSizes("split-sizes-vertical", [70, 30]);

  // Fetch challenge data on mount
  useEffect(() => {
    fetch("/src/data/challenge-data/challenge1.json")
      .then((response) => response.json())
      .then((data) => setChallengeData(data))
      .catch((error) => console.error("Error fetching challenge data:", error));
  }, []);

  if (!challengeData) {
    return <div>Loading challenge...</div>;
  }

  // Files to be displayed in the Sandpack editor
  const files = {
    // "/src/App.js": {
    //   code: challengeData.solution[0].content,
    //   active: true,
    // },
  };

  return (
    <SandpackProvider files={files} theme={monokaiPro} template="react">
      <Navbar></Navbar>
      <SandpackLayout>
        <Split className="split" minSize={364} snapOffset={0} sizes={sizesHorizontal} onDragEnd={handleDragHorizontal}>
          <div className="challenge-description-window">
            {/* Challenge Description Pane */}
            <ChallengeInfo challenge={challengeData} />
          </div>
          <div className="explorer-editor-container">
            {/* Editor and File Explorer Panes */}
            <Split direction="vertical" minSize={200} snapOffset={0} sizes={sizesVertical} onDragEnd={handleDragVertical}>
              <SandpackCodeEditor closableTabs showTabs />
              <SandpackFileExplorer />
            </Split>
          </div>
          <div className="preview-container">
            {/* Live Preview Pane */}
            <SandpackPreview showNavigator showOpenInCodeSandbox={false} />
          </div>
        </Split>
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default CodeEditor;
