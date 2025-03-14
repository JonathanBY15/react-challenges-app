import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    // Outer navbar div
    <div className="navbar flex items-center justify-between">
      {/* LeetComponents with React logo */}
      <span className="flex items-center" onClick={() => navigate("/")}>
        {/* React logo div */}
        <div className="p-2 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 relative mr-1">
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-40 blur-lg"></div>
          <FaReact className="text-white text-md relative z-10" />
        </div>
        <span className="text-white hidden sm:inline ml-2 text-lg">LeetComponents</span>
      </span>
      
      {/* Auth link */}
      <span className="ml-4 text-white" onClick={() => navigate("/auth")}>Auth</span>
    </div>
  );
};

export default Navbar;
