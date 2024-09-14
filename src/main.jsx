// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './theme'; // Import the theme
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // Normalize styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply baseline CSS */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
