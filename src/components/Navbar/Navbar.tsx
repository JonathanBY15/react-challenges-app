import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar" onClick={() => navigate("/")}>
      LeetComponents
    </div>
  );
};

export default Navbar;
