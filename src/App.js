import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import About from './pages/About';
import './App.css';

const App = () => (
  <Router>
    <header>
      <nav>
        <Link to="/" className="logo">InsideTheLines</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/episodes">Episodes</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 InsideTheLines. All rights reserved.</p>
      </div>
    </footer>
  </Router>
);

export default App;

