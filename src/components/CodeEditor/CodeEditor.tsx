import { SandpackProvider, SandpackLayout, SandpackFileExplorer, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
import { monokaiPro } from "@codesandbox/sandpack-themes";
import Split from "react-split";
import "./CodeEditor.css";
import { useState } from "react";

// Utility function to manage localStorage for sizes
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
    const files = {};
    const [sizesHorizontal, handleDragHorizontal] = useStoredSizes("split-sizes-horizontal", [20, 40, 40]);
    const [sizesVertical, handleDragVertical] = useStoredSizes("split-sizes-vertical", [70, 30]);

    return (
        <SandpackProvider files={files} theme={monokaiPro} template="react">
            <div className="editor-nav">Challenge #1: Shopping Cart</div>
            <SandpackLayout>
                <Split className="split" sizes={sizesHorizontal} onDragEnd={handleDragHorizontal}>
                    <div className="challenge-description-container">
                        !! THIS IS THE CHALLENGE DESCRIPTION!!
                    </div>
                    <div className="explorer-editor-container">
                        <Split direction="vertical" sizes={sizesVertical} onDragEnd={handleDragVertical}>
                            <SandpackCodeEditor closableTabs showTabs />
                            <SandpackFileExplorer />
                        </Split>
                    </div>
                    <div className="preview-container">
                        <SandpackPreview showNavigator showOpenInCodeSandbox={false} />
                    </div>
                </Split>
            </SandpackLayout>
        </SandpackProvider>
    );
};

export default CodeEditor;
