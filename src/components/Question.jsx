// src/components/Question.jsx
import React from 'react';

const Question = ({ question, onAnswer }) => {

  // Handle MCQ
  const handleMCQChange = (option) => {
    onAnswer(option);
  };

  // Handle Text Input
  const handleTextChange = (event) => {
    onAnswer(event.target.value);
  };

  return (
    <div>
      <h3>{question.question}</h3>

      {/* Render MCQ */}
      {question.type === 'MCQ' && (
        <ul>
          {question.options.map((option, index) => (
            <li key={index}>
              <input
                type="radio"
                name={question.id}
                value={option.label}
                onChange={() => handleMCQChange(option.label)}
              />
              {option.text}
            </li>
          ))}
        </ul>
      )}

      {/* Render Text Question */}
      {question.type === 'Text' && (
        <textarea
          rows="4"
          cols="50"
          onChange={handleTextChange}
          placeholder="Write your answer here..."
        ></textarea>
      )}

      {/* Render Fill in the Blank */}
      {question.type === 'FillInTheBlank' && (
        <input
          type="text"
          onChange={handleTextChange}
          placeholder="Fill in the blank..."
        />
      )}

      {/* Add more question types as needed */}
    </div>
  );
};

export default Question;
