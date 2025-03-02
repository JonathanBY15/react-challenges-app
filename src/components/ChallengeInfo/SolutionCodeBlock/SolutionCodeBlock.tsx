/**
 * Component that fetches and displays code from a given file in a formatted way.
 * It uses SyntaxHighlighter to display the code with appropriate syntax highlighting.
 * 
 * @component
 * @param {SolutionCodeBlockProps} props - The props for the SolutionCodeBlock component.
 * @param {string} props.fileType - The file type (e.g., 'tsx', 'css', etc.).
 * @param {string} props.directory - The directory path to the file.
 * 
 * @returns {JSX.Element} A rendered code block with syntax highlighting.
 */

import React, { useEffect, useState } from "react";
import "./SolutionCodeBlock.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface SolutionCodeBlockProps {
  fileType: string;
  directory: string;
}

const languageMap: Record<string, string> = {
  tsx: "tsx",
  jsx: "javascript",
  js: "javascript",
  css: "css",
  html: "html",
  json: "json",
};

const SolutionCodeBlock: React.FC<SolutionCodeBlockProps> = ({ fileType, directory }) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    // Ensure directory starts with '/'
    const filePath = `/${directory}`;

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load file: ${filePath}`);
        }
        return response.text();
      })
      .then((text) => setCode(text))
      .catch((error) => console.error("Error fetching file:", error));
  }, [directory]);

  return (
    <div className="solution-code-block">
      <h3 className="solution-file-language">{fileType.toUpperCase()}</h3>
      <SyntaxHighlighter language={languageMap[fileType] || "plaintext"} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default SolutionCodeBlock;
