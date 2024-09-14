import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import testData from '../testData.json';  // Mock test data
import Question from './Question';  // Import Question component

function TestDisplay() {
  const location = useLocation();
  const navigate = useNavigate();
  const { testTitle, numQuestions } = location.state;  // Get test title and number of questions
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});  // Store answers here

  useEffect(() => {
    // Load a slice of test data based on numQuestions
    setQuestions(testData.questions.slice(0, numQuestions));
  }, [numQuestions]);

  // Function to handle answer selection
  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });  // Store the answer in the state
    console.log("Updated answers:", answers);  // Logging answers to verify
  };

  const handleSubmit = () => {
    // For now, just log the answers to the console
    console.log("Submitted answers:", answers);
    
    // Navigate to the TestResult page
    navigate('/result');
  };

  return (
    <div>
      <h2>{testTitle}</h2>
      {/* Render each question using the Question component */}
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          onAnswer={(answer) => handleAnswer(question.id, answer)}
        />
      ))}
      {/* Button to submit the test */}
      <button onClick={handleSubmit}>Submit Test</button>
    </div>
  );
}

export default TestDisplay;
