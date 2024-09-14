// src/components/ConfigureTest.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Box } from '@mui/material';

function ConfigureTest() {
  const [testTitle, setTestTitle] = useState('');
  const [numQuestions, setNumQuestions] = useState(5);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/test', { state: { testTitle, numQuestions } });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Configure Test
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Test Title"
            variant="outlined"
            fullWidth
            value={testTitle}
            onChange={(e) => setTestTitle(e.target.value)}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Number of Questions"
            type="number"
            variant="outlined"
            fullWidth
            value={numQuestions}
            onChange={(e) => setNumQuestions(e.target.value)}
            required
            inputProps={{ min: 1 }}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Configure
        </Button>
      </form>
    </Box>
  );
}

export default ConfigureTest;
