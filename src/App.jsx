import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UploadMaterial from './components/UploadMaterial';
import ConfigureTest from './components/ConfigureTest';
import TestDisplay from './components/TestDisplay';
import TestResult from './components/TestResult';
import Home from './components/Home'; // Import the Home component
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'; // Material UI components
import './App.css'; // Custom styles

function App() {
  return (
    <Router>
      {/* AppBar for Navigation */}
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            {/* Main Title */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              AI Tutor Prototype
            </Typography>
            
            {/* Navigation Buttons */}
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/upload">Upload Material</Button>
            <Button color="inherit" component={Link} to="/configure">Configure Test</Button>
            <Button color="inherit" component={Link} to="/test">Take Test</Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Container for page content */}
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          {/* Define Routes for each page */}
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/upload" element={<UploadMaterial />} /> {/* Upload page */}
          <Route path="/configure" element={<ConfigureTest />} /> {/* Configure Test page */}
          <Route path="/test" element={<TestDisplay />} /> {/* Test Display page */}
          <Route path="/result" element={<TestResult />} /> {/* Test Results page */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
