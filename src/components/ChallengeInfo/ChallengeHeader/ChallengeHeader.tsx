/**
 * Displays the header for a coding challenge, including its id(challenge number), name, and difficulty level.
 * The difficulty badge dynamically applies a CSS class based on the difficulty level.
 * 
 * Uses useElementWidth to track width of header and assign responsive classes.
 *  
 * @component
 * @param {number} id - The unique identifier for the challenge (challenge number).
 * @param {string} name - The name of the challenge.
 * @param {"Easy" | "Medium" | "Hard"} difficulty - The difficulty level of the challenge.
 * @returns {JSX.Element} The rendered challenge header component.
 */

import React, { useRef } from "react";
import { PiFire } from "react-icons/pi";
import useElementWidth from "../../../hooks/useElementWidth";
import "./ChallengeHeader.css";

interface ChallengeHeaderProps {
  id: number;
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const ChallengeHeader: React.FC<ChallengeHeaderProps> = ({ id, name, difficulty }) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const width = useElementWidth(headerRef);

  // Determine header class based on width
  let sizeClass = "large-header"; // Default
  if (width < 350) sizeClass = "ex-small-header";
  else if (width < 388) sizeClass = "small-header";
  else if (width < 455) sizeClass = "medium-header";

  return (
    <div ref={headerRef} className={`challenge-header ${sizeClass}`}>
      <h1>
        {id}. {name}
      </h1>
      <span className={`badge badge-${difficulty.toLowerCase()}`}>
        <PiFire /> {difficulty}
      </span>
    </div>
  );
};

export default ChallengeHeader;
