import React, { useState, useEffect } from "react";
import ChallengeInfo, { Challenge } from "../../ChallengeInfo/ChallengeInfo";
import "./CodeEditorMobile.css";
import { SandpackProvider, SandpackLayout, SandpackFileExplorer, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
import { monokaiPro } from "@codesandbox/sandpack-themes";
import Split from "react-split";

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

const CodeEditorMobile = () => {
  const [challengeData, setChallengeData] = useState<Challenge | null>(null);
  const [sizesVertical, handleDragVertical] = useStoredSizes("split-sizes-vertical-mobile", [70, 30]);

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
      <SandpackLayout>
        {/* Stacked vertically layout */}
        <div className="challenge-description-window">
          {/* Challenge Description Pane */}
          <ChallengeInfo challenge={challengeData} />
        </div>
        <div className="explorer-editor-container">
          {/* Editor and File Explorer Panes */}
          <Split direction="vertical" minSize={200} snapOffset={0} sizes={sizesVertical} onDragEnd={handleDragVertical}>
            <div className="editor-file-container">
              <SandpackCodeEditor closableTabs showTabs />
              <SandpackFileExplorer />
            </div>
          </Split>
        </div>
        <div className="preview-container">
          {/* Live Preview Pane */}
          <SandpackPreview showNavigator showOpenInCodeSandbox={false} />
        </div>
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default CodeEditorMobile;
