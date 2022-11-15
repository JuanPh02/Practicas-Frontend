import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Axios from 'axios'
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

Axios.defaults.baseURL = 'http://localhost:8000'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);