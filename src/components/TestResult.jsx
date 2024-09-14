// src/components/TestResult.jsx
import React, { useState, useEffect } from 'react';
import gradedTestData from '../gradedTestData.json';
import { Typography, Box, Paper, Divider } from '@mui/material';

function TestResult() {
  const [testResults, setTestResults] = useState(null);

  useEffect(() => {
    // Simulate fetching test results
    setTestResults(gradedTestData);
  }, []);

  if (!testResults) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {testResults.testTitle}
      </Typography>
      <Typography variant="h6">
        Total Score: {testResults.totalScore} / {testResults.totalPoints}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Tutor Feedback: {testResults.tutor.overallFeedback}
      </Typography>
      <Divider sx={{ my: 2 }} />
      {testResults.questions.map((question, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6">
            Question {index + 1}: {question.question}
          </Typography>
          {question.type === 'MCQ' && (
            <>
              <Typography><strong>Your Answer:</strong> {question.learnerAnswerMCQ.join(', ')}</Typography>
              <Typography><strong>Correct Answer:</strong> {question.correctAnswerMCQ.join(', ')}</Typography>
              <Typography><strong>Explanation:</strong> {question.explanationMCQ}</Typography>
              <Typography><strong>Feedback:</strong> {question.tutorFeedback}</Typography>
              <Typography><strong>Score:</strong> {question.score} points</Typography>
            </>
          )}
          {/* Add similar blocks for other question types: Text, TrueFalse, FillInTheBlank, Matching */}
        </Paper>
      ))}
    </Box>
  );
}

export default TestResult;
