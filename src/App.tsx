import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import About from "../src/components/About";
import Home from "../src/components/Home";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Resume from "../src/components/Resume";
import "./App.css";

const App = () => {
  return (
    <Box className="App">
      <Header />
      <Box
        sx={{
          minHeight: "65vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
