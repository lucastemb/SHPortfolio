import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutMe from './AboutMe';
import Experience from './Experience'
import reportWebVitals from './reportWebVitals';
import Leadership from './Leadership';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutMe />
    <Experience/>
    <Leadership/>
  </React.StrictMode>
);

