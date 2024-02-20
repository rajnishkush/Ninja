import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HabitContextProvider from './context/HabitContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HabitContextProvider>
      <App />
    </HabitContextProvider>
  </React.StrictMode>
);
