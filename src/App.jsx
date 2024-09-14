import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UploadMaterial from './components/UploadMaterial';
import ConfigureTest from './components/ConfigureTest';
import TestDisplay from './components/TestDisplay';
import TestResult from './components/TestResult';  // Import the TestResult component
import './App.css';  // Import your styles

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/upload">Upload Material</Link></li>
            <li><Link to="/configure">Configure Test</Link></li>
            <li><Link to="/test">Take Test</Link></li>
          </ul>
        </nav>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<div>Welcome to AI Tutor Prototype</div>} />
          <Route path="/upload" element={<UploadMaterial />} />
          <Route path="/configure" element={<ConfigureTest />} />
          <Route path="/test" element={<TestDisplay />} />
          <Route path="/result" element={<TestResult />} />  {/* New route for test results */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
