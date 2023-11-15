import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import './utils/fonts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/rent-a-car">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
