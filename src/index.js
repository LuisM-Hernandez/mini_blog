import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Render components to the index.html by the root element
ReactDOM.render(
  //React StrictMode - This those additional checks during development and gives us warnings on the console
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
