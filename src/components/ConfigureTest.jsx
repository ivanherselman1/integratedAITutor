import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ConfigureTest() {
  const [testTitle, setTestTitle] = useState('');
  const [numQuestions, setNumQuestions] = useState(5); // Default to 5 questions
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, simply navigate to the test page after configuration
    navigate('/test', { state: { testTitle, numQuestions } });
  };

  return (
    <div>
      <h2>Configure Test</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Test Title:
          <input
            type="text"
            value={testTitle}
            onChange={(e) => setTestTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Number of Questions:
          <input
            type="number"
            value={numQuestions}
            onChange={(e) => setNumQuestions(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Configure</button>
      </form>
    </div>
  );
}

export default ConfigureTest;
