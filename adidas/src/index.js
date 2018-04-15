import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div className="wrapper">
      <App />
    </div>
  </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
