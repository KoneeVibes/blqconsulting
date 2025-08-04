import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { AppContextProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeProvider
        theme={theme}
      >
        <App />
      </ThemeProvider>
    </AppContextProvider>
  </React.StrictMode>
);

