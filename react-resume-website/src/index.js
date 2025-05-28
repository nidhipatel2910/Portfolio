import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';
import './App.module.css';
import './index.css'; // or './global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);