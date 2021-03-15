import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//bootstrap js
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js/dist/umd/popper.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Your css
import './sass/app.sass'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

