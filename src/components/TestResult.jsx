// src/components/TestResult.jsx
import React, { useState, useEffect } from 'react';
import gradedTestData from '../gradedTestData.json';  // Mock graded test data
import { Typography, Box, Paper } from '@mui/material';

function TestResult() {
  const [testResults, setTestResults] = useState(null);

  useEffect(() => {
    // Simulate fetching test results (mocked for now)
    setTestResults(gradedTestData);
  }, []);

  if (!testResults) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>{testResults.testTitle}</Typography>
      <Typography variant="h6" gutterBottom>
        Total Score: {testResults.totalScore} / {testResults.totalPoints}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Tutor Feedback: {testResults.tutor.overallFeedback}
      </Typography>
      <hr />
      <div>
        {testResults.questions.map((question, index) => (
          <Paper 
            key={index} 
            elevation={3} 
            sx={{ mb: 4, p: 3, borderRadius: 2, backgroundColor: '#f5f5f5' }}
          >
            <Typography variant="h6" gutterBottom>
              Question {index + 1}: {question.question}
            </Typography>

            {/* Handling MCQ */}
            {question.type === 'MCQ' && (
              <>
                <Typography variant="body1"><strong>Your Answer:</strong> {question.learnerAnswerMCQ.join(', ')}</Typography>
                <Typography variant="body1"><strong>Correct Answer:</strong> {question.correctAnswerMCQ.join(', ')}</Typography>
                <Typography variant="body1"><strong>Explanation:</strong> {question.explanationMCQ}</Typography>
                <Typography variant="body1"><strong>Feedback:</strong> {question.tutorFeedback}</Typography>
                <Typography variant="body1"><strong>Score:</strong> {question.score} points</Typography>
              </>
            )}

            {/* Handling Text Type */}
            {question.type === 'Text' && (
              <>
                <Typography variant="body1"><strong>Your Answer:</strong> {question.learnerAnswerText || "No answer provided"}</Typography>
                <Typography variant="body1"><strong>Correct Answer:</strong> {question.correctAnswerText.join(', ')}</Typography>
                <Typography variant="body1"><strong>Feedback:</strong> {question.tutorFeedback}</Typography>
                <Typography variant="body1"><strong>Score:</strong> {question.score} points</Typography>
              </>
            )}

            {/* Handling True/False */}
            {question.type === 'TrueFalse' && (
              <>
                <Typography variant="body1"><strong>Your Answer:</strong> {question.learnerAnswerTrueFalse ? "True" : "False"}</Typography>
                <Typography variant="body1"><strong>Correct Answer:</strong> {question.correctAnswerTrueFalse ? "True" : "False"}</Typography>
                <Typography variant="body1"><strong>Explanation:</strong> {question.explanationTrueFalse}</Typography>
                <Typography variant="body1"><strong>Feedback:</strong> {question.tutorFeedback}</Typography>
                <Typography variant="body1"><strong>Score:</strong> {question.score} points</Typography>
              </>
            )}

            {/* Handling Fill-in-the-Blank */}
            {question.type === 'FillInTheBlank' && (
              <>
                <Typography variant="body1"><strong>Your Answer:</strong> {question.learnerAnswerFillInTheBlank || "No answer provided"}</Typography>
                <Typography variant="body1"><strong>Correct Answer:</strong> {question.correctAnswerFillInTheBlank.join(', ')}</Typography>
                <Typography variant="body1"><strong>Explanation:</strong> {question.explanationFillInTheBlank}</Typography>
                <Typography variant="body1"><strong>Feedback:</strong> {question.tutorFeedback}</Typography>
                <Typography variant="body1"><strong>Score:</strong> {question.score} points</Typography>
              </>
            )}

            {/* Handling Matching */}
            {question.type === 'Matching' && (
              <>
                <Typography variant="body1"><strong>Matches:</strong></Typography>
                {question.pairs.map((pair, pairIndex) => (
                  <Box key={pairIndex}>
                    <Typography variant="body1">
                      <strong>{pair.left}:</strong> Your Answer: {question.learnerAnswerMatching?.[pair.left] || "No match provided"} | Correct Answer: {question.correctAnswerMatching.find(item => item.left === pair.left)?.right}
                    </Typography>
                  </Box>
                ))}
                <Typography variant="body1"><strong>Feedback:</strong> {question.tutorFeedback}</Typography>
                <Typography variant="body1"><strong>Score:</strong> {question.score} points</Typography>
              </>
            )}
          </Paper>
        ))}
      </div>
    </Box>
  );
}

export default TestResult;
