import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import NavBar from './Pages/Home/NavBar';
import Home from "./Pages/Home/Homescreen"
import Resume from  "./Pages/Home/Resume"


function App() {
    useEffect(() => {
        document.title = "Andrew Ge - Aspiring ML Engineer";
    }, []);

  return (
      <Router>
          <Routes>
              <Route path="/resume" element={<Resume />} /> {/* No NavBar on the Resume page */}
              <Route path="/" element={<><NavBar /><Home /></>} /> {/* Show NavBar on Home page */}
              {/* Add other routes here */}
          </Routes>
      </Router>
  );
}

export default App;
