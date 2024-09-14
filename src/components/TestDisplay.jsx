// src/components/TestDisplay.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import testData from '../testData.json';  // Import the mock test data
import Question from './Question';  // Component to display each question
import { Typography, Button, Box } from '@mui/material';

function TestDisplay() {
  const location = useLocation();
  const navigate = useNavigate();
  const { testTitle, numQuestions } = location.state || {};  // Get test title and number of questions from the state
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (!testTitle || !numQuestions) {
      navigate('/');  // If no test is configured, navigate back to home
    } else {
      // Slice the questions array based on the requested number of questions and available questions
      const availableQuestions = testData.questions.slice(0, Math.min(numQuestions, testData.questions.length));
      setQuestions(availableQuestions);
    }
  }, [testTitle, numQuestions, navigate]);

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    console.log("Submitted answers:", answers);
    // You can add grading logic here or send answers to a server
    navigate('/result');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {testTitle}
      </Typography>
      {questions.length > 0 ? (
        questions.map((question, index) => (
          <Box key={index} mb={4}>
            <Question
              question={question}
              onAnswer={(answer) => handleAnswer(question.id, answer)}
            />
          </Box>
        ))
      ) : (
        <Typography variant="h6">No questions available.</Typography>
      )}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Test
      </Button>
    </Box>
  );
}

export default TestDisplay;
