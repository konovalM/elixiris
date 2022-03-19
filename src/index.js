import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './components/Homepage/Homepage';
import About from "./components/About/About";

ReactDOM.render(
  <React.StrictMode>
      {/*<Homepage />*/}
      <About/>
  </React.StrictMode>,
  document.getElementById('root')
);

