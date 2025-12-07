import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutUs from './components/AboutUs';
import './index.css';
/*import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'AW-17707388272'
}
TagManager.initialize(tagManagerArgs)*/

const script = document.createElement('script');

script.src = "https://www.googletagmanager.com/gtag/js?id=AW-17707388272";
script.async = true;

document.body.appendChild(script);

const script2 = document.createElement('script');

script2.type = 'text/javascript';

script2.text = `
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'AW-17707388272');
  window.gtag = gtag;
`;

document.body.appendChild(script2);

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
