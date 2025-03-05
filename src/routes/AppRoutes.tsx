import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../components/MainPage/MainPage";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import Navbar from "../components/Navbar/Navbar";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/code" element={<CodeEditor />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
