import React, { useState, useEffect } from 'react';
import { Typography, RadioGroup, FormControlLabel, Radio, TextField, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

const Question = ({ question, onAnswer }) => {
  const [answers, setAnswers] = useState(question.matchingAnswers || {});

  useEffect(() => {
    // If the parent component sends new props, update local state
    setAnswers(question.matchingAnswers || {});
  }, [question.matchingAnswers]);

  const handleMCQChange = (event) => {
    onAnswer(event.target.value);
  };

  const handleTextChange = (event) => {
    onAnswer(event.target.value);
  };

  const handleTrueFalseChange = (event) => {
    onAnswer(event.target.value === 'true');
  };

  const handleMatchingChange = (leftTerm, event) => {
    const updatedAnswers = { ...answers, [leftTerm]: event.target.value };
    setAnswers(updatedAnswers);  // Update local state
    onAnswer(updatedAnswers);    // Propagate changes to the parent
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>{question.question}</Typography>

      {/* Handling MCQ */}
      {question.type === 'MCQ' && (
        <RadioGroup onChange={handleMCQChange}>
          {question.options.map((option, index) => (
            <FormControlLabel key={index} value={option.label} control={<Radio />} label={option.text} />
          ))}
        </RadioGroup>
      )}

      {/* Handling Text */}
      {question.type === 'Text' && (
        <TextField 
          variant="outlined" 
          fullWidth 
          multiline 
          rows={4} 
          onChange={handleTextChange} 
          placeholder="Write your answer here..." 
        />
      )}

      {/* Handling Fill-in-the-Blank */}
      {question.type === 'FillInTheBlank' && (
        <TextField 
          variant="outlined" 
          fullWidth 
          onChange={handleTextChange} 
          placeholder="Fill in the blank..." 
        />
      )}

      {/* Handling True/False */}
      {question.type === 'TrueFalse' && (
        <RadioGroup onChange={handleTrueFalseChange}>
          <FormControlLabel value="true" control={<Radio />} label="True" />
          <FormControlLabel value="false" control={<Radio />} label="False" />
        </RadioGroup>
      )}

      {/* Handling Matching */}
      {question.type === 'Matching' && (
        <div>
          {question.pairs?.map((pair, index) => (
            <FormControl fullWidth key={index} margin="normal">
              <InputLabel>{pair.left}</InputLabel>
              <Select
                value={answers[pair.left] || ''}
                label={pair.left}
                onChange={(event) => handleMatchingChange(pair.left, event)}
              >
                {pair.rightOptions?.map((option, optIndex) => (
                  <MenuItem key={optIndex} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        </div>
      )}
    </Box>
  );
};

export default Question;
