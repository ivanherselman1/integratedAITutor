// src/components/Question.jsx
import React from 'react';
import { Typography, RadioGroup, FormControlLabel, Radio, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Question = ({ question, onAnswer }) => {

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
    onAnswer({ ...question.matchingAnswers, [leftTerm]: event.target.value });
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {question.question}
      </Typography>

      {question.type === 'MCQ' && (
        <RadioGroup onChange={handleMCQChange}>
          {question.options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option.label}
              control={<Radio />}
              label={option.text}
            />
          ))}
        </RadioGroup>
      )}

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

      {question.type === 'FillInTheBlank' && (
        <TextField
          variant="outlined"
          fullWidth
          onChange={handleTextChange}
          placeholder="Fill in the blank..."
        />
      )}

      {question.type === 'Matching' && (
        <div>
          {/* Safely checking if pairs and rightOptions exist */}
          {question.pairs?.map((pair, index) => (
            <FormControl fullWidth key={index} margin="normal">
              <InputLabel>{pair.left}</InputLabel>
              <Select
                value={question.matchingAnswers?.[pair.left] || ''}
                label={pair.left}
                onChange={(event) => handleMatchingChange(pair.left, event)}
              >
                {/* Safely checking if rightOptions exist */}
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

      {question.type === 'TrueFalse' && (
        <RadioGroup onChange={handleTrueFalseChange}>
          <FormControlLabel value="true" control={<Radio />} label="True" />
          <FormControlLabel value="false" control={<Radio />} label="False" />
        </RadioGroup>
      )}
    </div>
  );
};

export default Question;
