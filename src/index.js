import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { app } from './firebase.config';
import { provider } from 'react-redux'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<provider app={app}>
    <App />
 </provider> 
  </React.StrictMode>
);


