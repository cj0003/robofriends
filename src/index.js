import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Hello from './Hello.js'; 
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import Card from './card';
// import CardList from './CardList';
import App from './containers/App';
// import { HelloCheckProps } from './Hello.js' ;
// import {robots} from './robots'; //destructuring because its not default

const root = ReactDOM.createRoot( document.getElementById('root'));
root.render(
  // <CardList robots={robots}/>,
  <App />,
  // <React.StrictMode>
  //   <h1>hello world from index.js</h1>

   
  // </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
