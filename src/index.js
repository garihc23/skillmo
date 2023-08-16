import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { ZustandProvider } from 'zustand';

ReactDOM.render(
  <React.StrictMode>
    {/* <ZustandProvider> */}
    <App />
    {/* </ZustandProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
