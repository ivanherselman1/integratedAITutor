// src/components/UploadMaterial.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

function UploadMaterial() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log('Selected File:', selectedFile);
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log('Uploaded File:', file);
      navigate('/configure');
    } else {
      alert('Please upload a file');
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Upload Learning Material
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Container to align the buttons horizontally */}
        <Box display="flex" justifyContent="center" alignItems="center" mb={2} gap={2}>
          <Button
            variant="contained"
            component="label"
            startIcon={<UploadFileIcon />}
          >
            Choose File
            <input
              type="file"
              hidden
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!file}  // Disable the button if no file is selected
          >
            Upload
          </Button>
        </Box>
        {file && (
          <Typography variant="body1" sx={{ mt: 2 }}>
            {file.name}
          </Typography>
        )}
      </form>
    </Box>
  );
}

export default UploadMaterial;
