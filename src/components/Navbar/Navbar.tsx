import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <span onClick={() => navigate("/")}>LeetComponents</span>
      <span onClick={() => navigate("/auth")}>Auth</span>
    </div>
  );
};

export default Navbar;