import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import './styles/css/typography.css';
import './styles/css/slicknav.min.css';
import './styles/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
