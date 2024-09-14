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

  // Handle True/False Change
  const handleTrueFalseChange = (event) => {
    onAnswer(event.target.value === 'true'); // Convert string to boolean
  };

  // Handle Matching Change
  const handleMatchingChange = (leftTerm, event) => {
    onAnswer({ ...question.matchingAnswers, [leftTerm]: event.target.value });
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

      {/* Render Matching Question */}
      {question.type === 'Matching' && (
        <div>
          {question.pairs.map((pair, index) => (
            <div key={index}>
              <span>{pair.left}</span> {/* Display the country or term on the left */}
              <select onChange={(event) => handleMatchingChange(pair.left, event)}>
                <option value="">Select the matching capital</option>
                {pair.rightOptions.map((option, optIndex) => (
                  <option key={optIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      {/* Render True/False Question */}
      {question.type === 'TrueFalse' && (
        <div>
          <label>
            <input
              type="radio"
              name={`trueFalse-${question.id}`}
              value="true"
              onChange={handleTrueFalseChange}
            />
            True
          </label>
          <label>
            <input
              type="radio"
              name={`trueFalse-${question.id}`}
              value="false"
              onChange={handleTrueFalseChange}
            />
            False
          </label>
        </div>
      )}

      {/* Add more question types as needed */}
    </div>
  );
};

export default Question;
