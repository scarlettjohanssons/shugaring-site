import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import './styles/css/typography.css';
import './styles/css/slicknav.min.css';
import './styles/css/responsive.css';
// import './styles/css/owl.carousel.min.css';
// import './styles/css/jquery.mb.YTPlayer.min.css';
// import './styles/css/jquery-ui.css';
// import './styles/css/font-awesome.min.css';
// import './styles/css/bootstrap.min.css';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
