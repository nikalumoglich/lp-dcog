import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutUs from './components/AboutUs';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/index.html" element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
