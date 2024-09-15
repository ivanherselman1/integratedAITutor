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
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      navigate('/configure');
    } else {
      alert('Please upload a file first');
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Upload Learning Material
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" alignItems="center" mb={2}>
          <Button
            variant="contained"
            component="label"
            startIcon={<UploadFileIcon />}
            sx={{
              backgroundColor: '#3498db',
              color: 'white',
              width: '100%',        /* Ensure full width */
              padding: '12px',       /* Make the button larger */
              textAlign: 'center',   /* Center text alignment */
            }}
          >
            Choose File
            <input
              type="file"
              hidden
              onChange={handleFileUpload}
            />
          </Button>
        </Box>
        {file && (
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
            {file.name}
          </Typography>
        )}
        <Box mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: '100%',               /* Full width for submit button */
              backgroundColor: '#e74c3c',   /* Custom color for submit button */
              color: 'white',
              padding: '12px',              /* Padding for larger touch area */
            }}
          >
            Upload
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default UploadMaterial;
