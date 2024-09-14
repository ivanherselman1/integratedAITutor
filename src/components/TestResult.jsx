import React, { useState, useEffect } from 'react';
import gradedTestData from '../gradedTestData.json';  // Mock graded test data

function TestResult() {
  const [testResults, setTestResults] = useState(null);

  useEffect(() => {
    // Fetch the graded test results (mocked for now)
    setTestResults(gradedTestData);
  }, []);

  if (!testResults) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{testResults.testTitle}</h2>
      <p><strong>Total Score:</strong> {testResults.totalScore} / {testResults.totalPoints}</p>
      <p><strong>Tutor Feedback:</strong> {testResults.tutor.overallFeedback}</p>
      <hr />
      
      <div>
        {testResults.questions.map((question, index) => (
          <div key={index}>
            <h4>Question {index + 1}: {question.question}</h4>

            {/* Handle different question types */}
            {question.type === 'MCQ' && (
              <>
                <p><strong>Your Answer:</strong> {question.learnerAnswerMCQ.join(', ')}</p>
                <p><strong>Correct Answer:</strong> {question.correctAnswerMCQ.join(', ')}</p>
                <p><strong>Explanation:</strong> {question.explanationMCQ}</p>
                <p><strong>Feedback:</strong> {question.tutorFeedback}</p>
                <p><strong>Score:</strong> {question.score} points</p>
              </>
            )}

            {question.type === 'Text' && (
              <>
                <p><strong>Your Answer:</strong> {question.learnerAnswerText}</p>
                <p><strong>Correct Answer:</strong> {question.correctAnswerText.join(', ')}</p>
                <p><strong>Explanation:</strong> {question.correctAnswerText}</p>
                <p><strong>Feedback:</strong> {question.tutorFeedback}</p>
                <p><strong>Score:</strong> {question.score} points</p>
              </>
            )}

            {question.type === 'TrueFalse' && (
              <>
                <p><strong>Your Answer:</strong> {question.learnerAnswerTrueFalse ? 'True' : 'False'}</p>
                <p><strong>Correct Answer:</strong> {question.correctAnswerTrueFalse ? 'True' : 'False'}</p>
                <p><strong>Explanation:</strong> {question.explanationTrueFalse}</p>
                <p><strong>Feedback:</strong> {question.tutorFeedback}</p>
                <p><strong>Score:</strong> {question.score} points</p>
              </>
            )}

            {question.type === 'FillInTheBlank' && (
              <>
                <p><strong>Your Answer:</strong> {question.learnerAnswerFillInTheBlank.join(', ')}</p>
                <p><strong>Correct Answer:</strong> {question.correctAnswerFillInTheBlank.join(', ')}</p>
                <p><strong>Explanation:</strong> {question.explanationFillInTheBlank}</p>
                <p><strong>Feedback:</strong> {question.tutorFeedback}</p>
                <p><strong>Score:</strong> {question.score} points</p>
              </>
            )}

            {question.type === 'Matching' && (
              <>
                <p><strong>Your Answer:</strong></p>
                <ul>
                  {question.learnerAnswerMatching.map((pair, i) => (
                    <li key={i}>{pair.left} {'->'} {pair.right}</li>
                  ))}
                </ul>
                <p><strong>Correct Answer:</strong></p>
                <ul>
                  {question.correctAnswerMatching.map((pair, i) => (
                    <li key={i}>{pair.left} {'->'} {pair.right}</li>
                  ))}
                </ul>
                <p><strong>Explanation:</strong> {question.explanationMatching}</p>
                <p><strong>Feedback:</strong> {question.tutorFeedback}</p>
                <p><strong>Score:</strong> {question.score} points</p>
              </>
            )}

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestResult;
