// src/components/Home.jsx

import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for Home component

function Home() {
  return (
    <Box className="home-container">
      <Typography variant="h2" className="typing-effect" gutterBottom>
        Welcome to AI Tutor Prototype
      </Typography>
      <Typography variant="h5" gutterBottom>
        Enhance your learning experience with our intelligent tutoring system.
      </Typography>
      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/upload"
          sx={{ backgroundColor: '#3498db', color: 'white', marginRight: '8px' }}
        >
          Get Started
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/configure"
          sx={{ backgroundColor: '#e74c3c', color: 'white' }}
        >
          Configure a Test
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
