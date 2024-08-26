import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Projects from "./componets/Projects";
import Skills from "./componets/Skills";
import Resume from "./componets/Resume";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="nav" element={<Navbar />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="MySkills" element={<Skills />} />
          <Route path="Resume" element={<Resume />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
