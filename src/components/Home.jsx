// src/components/Home.jsx
import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box textAlign="center">
      <Typography variant="h2" gutterBottom>
        Welcome to AI Tutor Prototype
      </Typography>
      <Typography variant="h5" gutterBottom>
        Enhance your learning experience with our intelligent tutoring system.
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="primary" component={Link} to="/upload" sx={{ mr: 2 }}>
          Get Started
        </Button>
        <Button variant="outlined" color="primary" component={Link} to="/configure">
          Configure a Test
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
