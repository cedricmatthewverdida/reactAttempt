import "./App.css";
import React, { useState } from "react";
import Table from "./Pages/Table";
import Home from "./Pages/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
   
    

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
