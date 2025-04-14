import { Typography, Box } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import About from "../src/components/About";
import Home from "../src/components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">TEST</header> */}
      <Box
        sx={{
          minHeight: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: 2,
          flexDirection: "column",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "80px",
          }}
          alt="Mountain"
          src="/images/mountain.jpeg"
        />
        <Box component="h1" sx={{ mt: 0 }}>
          {/* <Typography component="span" variant="h4">Paul Brownsmith - </Typography>
          <Typography component="span" variant="h4" sx={{ color: 'text.secondary' }}>UI/UX Engineer</Typography> */}
        </Box>
      </Box>
      <p>JLKJLKJLK</p>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
