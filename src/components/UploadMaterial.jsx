import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UploadMaterial() {
  const [file, setFile] = useState(null); // Mocking file upload
  const navigate = useNavigate(); // For navigation

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]); // Store the file in state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Navigate to test configuration page after upload
      navigate('/configure');
    } else {
      alert('Please upload a file');
    }
  };

  return (
    <div>
      <h2>Upload Learning Material</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileUpload} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadMaterial;
