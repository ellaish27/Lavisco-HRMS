// frontend/src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes';
import { CssBaseline, CircularProgress } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    error: { main: '#e53e3e' },    // red
    success: { main: '#38a169' },  // green
    warning: { main: '#d69e2e' },  // yellow
    info: { main: '#3182ce' },     // blue
    secondary: { main: '#805ad5' } // purple
  }
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
      <BrowserRouter>
        <React.Suspense fallback={<CircularProgress />}>
          <AppRoutes />
        </React.Suspense>
      </BrowserRouter>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
