// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UploadMaterial from './components/UploadMaterial';
import ConfigureTest from './components/ConfigureTest';
import TestDisplay from './components/TestDisplay';
import TestResult from './components/TestResult';
import Home from './components/Home'; // New Home component
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'; // Import MUI components
import './App.css'; // You can still use your custom styles if needed

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              AI Tutor Prototype
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/upload">Upload Material</Button>
            <Button color="inherit" component={Link} to="/configure">Configure Test</Button>
            <Button color="inherit" component={Link} to="/test">Take Test</Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Updated Home route */}
          <Route path="/upload" element={<UploadMaterial />} />
          <Route path="/configure" element={<ConfigureTest />} />
          <Route path="/test" element={<TestDisplay />} />
          <Route path="/result" element={<TestResult />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
