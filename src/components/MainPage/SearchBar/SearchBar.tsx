/**
 * SearchBar Component
 *
 * A responsive search bar component with filtering options for difficulty levels and challenge types.
 * Supports both mobile and desktop views with dropdown selections.
 *
 * @component
 * @returns {JSX.Element} The rendered SearchBar component.
 *
 * @description
 * - Provides a search input for challenges.
 * - Allows filtering by difficulty (Easy, Medium, Hard).
 * - Allows filtering by challenge type (Build, Fix, Style, Refactor).
 * - Uses dropdowns for filtering on desktop and a mobile-friendly filter menu.
 *
 * @state
 * @property {boolean} isDifficultyOpen - Controls the visibility of the difficulty dropdown.
 * @property {boolean} isChallengeTypeOpen - Controls the visibility of the challenge type dropdown.
 * @property {boolean} isFilterOpen - Controls the visibility of the mobile filter menu.
 * @property {string[]} selectedDifficulties - Stores selected difficulty levels.
 * @property {string[]} selectedTypes - Stores selected challenge types.
 *
 * @function toggleDifficulty
 * @param {string} difficulty - The difficulty level to toggle.
 * @description Adds or removes the selected difficulty from the state.
 *
 * @function toggleType
 * @param {string} type - The challenge type to toggle.
 * @description Adds or removes the selected challenge type from the state.
 *
 * @useEffect
 * @description Closes dropdowns when clicking outside of them.
 */


import { useState, useEffect, useRef } from "react";
import { MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { PiFire } from "react-icons/pi";
import { FaCogs } from "react-icons/fa";

const SearchBar: React.FC = () => {
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);
  const [isChallengeTypeOpen, setIsChallengeTypeOpen] = useState(false);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // For mobile filter toggle

  const difficultyRef = useRef<HTMLDivElement>(null);
  const challengeTypeRef = useRef<HTMLDivElement>(null);

  // Function that toggles difficulty filters (Check and uncheck difficulties)
  const toggleDifficulty = (difficulty: string) => {
    setSelectedDifficulties((prev) =>
      prev.includes(difficulty)
        ? prev.filter((item) => item !== difficulty)
        : [...prev, difficulty]
    );
  };

  // Function that toggles challenge type filters (Check and uncheck challenge types)
  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]
    );
  };

  // Close dropdowns if click is outside
  useEffect(() => {
    const closeDropdowns = (e: MouseEvent) => {
      if (
        difficultyRef.current && !difficultyRef.current.contains(e.target as Node) &&
        challengeTypeRef.current && !challengeTypeRef.current.contains(e.target as Node)
      ) {
        setIsDifficultyOpen(false);
        setIsChallengeTypeOpen(false);
        setIsFilterOpen(false); // Close filter dropdown
      }
    };
    document.addEventListener("mousedown", closeDropdowns);
    return () => document.removeEventListener("mousedown", closeDropdowns);
  }, []);

  return (
    <div className="relative w-full max-w-7xl flex items-center bg-[#00000057] text-white p-4 shadow-md rounded-lg gap-4">
      {/* Search Input */}
        <div className="flex-grow flex items-center bg-[#ffffff10] px-4 py-2 rounded-lg">
            <MdSearch className="text-gray-300 text-sm md:text-xl" />
            <input
            type="text"
            placeholder="Search challenges..."
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none ml-2 w-full text-xs md:text-lg"
            />
        </div>

        {/* Filter Button on Mobile */}
        <div className="relative block lg:hidden" ref={difficultyRef}>
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Prevent the click from propagating to the document
                    setIsFilterOpen(!isFilterOpen);
                }}
                aria-expanded={isFilterOpen ? "true" : "false"}
                className="flex items-center gap-2 px-3 py-2 bg-[#ffffff10] rounded-lg cursor-pointer hover:bg-[#ffffff20] transition"
                >
                <IoFilter className="text-[#a8a8a8] text-sm md:text-xl" />
                <MdKeyboardArrowDown className={`transform transition-transform duration-500 ${isFilterOpen ? "-rotate-180" : ""}`} />
            </button>

            {/* Combined Filter Dropdown */}
            <div
            className={`absolute top-full right-0 mt-2 w-64 bg-[#4e4e4e10] p-4 rounded-lg shadow-lg flex flex-col gap-2 z-10 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out`}
            style={{
                transform: isFilterOpen ? "translateY(0)" : "translateY(-20px)", // Slide in/out effect
                opacity: isFilterOpen ? 1 : 0,
                height: isFilterOpen ? "auto" : "0", // Transition height
            }}
            >
            <div>
                <h3 className="text-sm font-light">Difficulty</h3>
                {["Easy", "Medium", "Hard"].map((difficulty) => (
                <label key={difficulty} className="flex items-center gap-2 cursor-pointer text-xs lg:text-base font-extralight">
                    <input
                    type="checkbox"
                    className="accent-[#3a3a3a]"
                    checked={selectedDifficulties.includes(difficulty)}
                    onChange={() => toggleDifficulty(difficulty)}
                    />
                    {difficulty}
                </label>
                ))}
            </div>

            <div>
                <h3 className="text-sm font-light">Challenge Type</h3>
                {["Build a component", "Fix a component", "Style a component", "Refactor a component"].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer text-xs lg:text-base font-extralight">
                    <input
                    type="checkbox"
                    className="accent-[#3a3a3a]"
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleType(type)}
                    />
                    {type}
                </label>
                ))}
            </div>
        </div>
      </div>

      {/* Difficulty Button (Desktop View) */}
      <div className="relative hidden lg:block" ref={difficultyRef}>
        <button
          onClick={() => setIsDifficultyOpen(!isDifficultyOpen)}
          aria-expanded={isDifficultyOpen ? "true" : "false"}
          className="flex items-center gap-2 px-3 py-2 bg-[#ffffff10] rounded-lg cursor-pointer hover:bg-[#ffffff20] transition"
        >
          <PiFire className="text-[#a8a8a8] text-xl" /> {/* Fire icon for difficulty */}
          <span>Difficulty</span>
          <MdKeyboardArrowDown className={`transform transition-transform duration-500 ${isDifficultyOpen ? "-rotate-180" : ""}`} />
        </button>

        {/* Difficulty Dropdown */}
        <div
          className={`absolute top-full left-0 mt-2 w-48 bg-[#4e4e4e10] p-4 rounded-lg shadow-lg flex flex-col gap-2 z-10 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out`}
          style={{
            transform: isDifficultyOpen ? "translateY(0)" : "translateY(-20px)", // Slide in/out effect
            opacity: isDifficultyOpen ? 1 : 0,
            height: isDifficultyOpen ? "auto" : "0", // Transition height
          }}
        >
          {["Easy", "Medium", "Hard"].map((difficulty) => (
            <label key={difficulty} className="flex items-center gap-2 cursor-pointer text-sm lg:text-base">
              <input
                type="checkbox"
                className="accent-[#3a3a3a]"
                checked={selectedDifficulties.includes(difficulty)}
                onChange={() => toggleDifficulty(difficulty)}
              />
              {difficulty}
            </label>
          ))}
        </div>
      </div>

      {/* Challenge Type Button (Desktop View) */}
      <div className="relative hidden lg:block" ref={challengeTypeRef}>
        <button
          onClick={() => setIsChallengeTypeOpen(!isChallengeTypeOpen)}
          aria-expanded={isChallengeTypeOpen ? "true" : "false"}
          className="flex items-center gap-2 px-3 py-2 bg-[#ffffff10] rounded-lg cursor-pointer hover:bg-[#ffffff20] transition"
        >
          <FaCogs className="text-[#a8a8a8] text-xl" /> {/* Cogs icon for challenge type */}
          <span>Challenge Type</span>
          <MdKeyboardArrowDown className={`transform transition-transform duration-500 ${isChallengeTypeOpen ? "-rotate-180" : ""}`} />
        </button>

        {/* Challenge Type Dropdown */}
        <div
          className={`absolute top-full left-0 mt-2 w-64 bg-[#4e4e4e10] p-4 rounded-lg shadow-lg flex flex-col gap-2 z-10 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out`}
          style={{
            transform: isChallengeTypeOpen ? "translateY(0)" : "translateY(-20px)", // Slide in/out effect
            opacity: isChallengeTypeOpen ? 1 : 0,
            height: isChallengeTypeOpen ? "auto" : "0", // Transition height
          }}
        >
          {["Build a component", "Fix a component", "Style a component", "Refactor a component"].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer text-sm lg:text-base">
              <input
                type="checkbox"
                className="accent-[#3a3a3a]"
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
