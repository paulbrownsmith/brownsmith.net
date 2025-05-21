import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import About from "../src/components/About";
import Home from "../src/components/Home";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Resume from "../src/components/Resume";
import Portfolio from "../src/components/Portfolio";
import Article1 from "./components/Articles/Article1";
import Article2 from "./components/Articles/Article2";
import Article3 from "./components/Articles/Article3";
import Article4 from "./components/Articles/Article4";
import Article5 from "./components/Articles/Article5";
import Article6 from "./components/Articles/Article6";
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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/portfolio/user-fiendly-cross-domain-ui"
            element={<Article2 />}
          />
          <Route path="/portfolio/material-ui" element={<Article1 />} />
          <Route
            path="/portfolio/user-testing-waitrose"
            element={<Article3 />}
          />
          <Route
            path="/portfolio/accessibility-in-gov-uk"
            element={<Article5 />}
          />
          <Route
            path="/portfolio/tailwindcss-insights"
            element={<Article4 />}
          />
          <Route path="/portfolio/imported-files-ui" element={<Article6 />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
