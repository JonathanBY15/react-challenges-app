/**
 * CodeEditorMobile Component
 *
 * A responsive mobile version of the code editor interface, featuring a vertical split layout with a description pane, file explorer, code editor, and live preview. 
 * The layout is adjustable via drag-and-drop to customize the view.
 *
 * @component
 * @returns {JSX.Element} The rendered CodeEditorMobile component.
 *
 * @description
 * - Displays a vertical split layout with sections for challenge description, file explorer, code editor, and live preview.
 * - Allows users to drag and adjust the size of sections to personalize their view.
 * - Fetches challenge data on mount and displays it in the description pane.
 * - Utilizes Sandpack components for the code editor and live preview functionality.
 *
 * @state
 * @property {Challenge | null} challengeData - Stores the fetched challenge data, initially set to null.
 * @property {number[]} sizesVertical - Stores the current split sizes of the sections in the vertical layout.
 *
 * @function useStoredSizes
 * @param {string} key - The localStorage key for storing the split sizes.
 * @param {number[]} defaultSizes - The default sizes if no stored value exists.
 * @returns {number[], function} - Returns the current sizes and a function to update them, which also persists the new sizes in localStorage.
 *
 * @useEffect
 * @description Fetches challenge data from a JSON file on mount and updates the `challengeData` state.
 * 
 * @dependencies
 * - Sandpack components: SandpackProvider, SandpackLayout, SandpackFileExplorer, SandpackCodeEditor, SandpackPreview
 * - Third-party libraries: react-split, @codesandbox/sandpack-react, @codesandbox/sandpack-themes
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
