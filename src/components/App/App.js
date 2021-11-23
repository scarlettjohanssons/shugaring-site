import React, { Suspense } from 'react';
import Favicon from 'react-favicon';

import '../../styles/css/App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import About from '../List/About/About';
import Questions from '../List/Questions/Questions';
import Pricing from '../List/Pricing/Pricing';
import Contact from '../List/Contact/Contact';
import Footer from '../Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Favicon url='https://img.icons8.com/pastel-glyph/64/000000/spa-care.png' />
      <Menu />
      <Header />
      <About />
      <Questions />
      <Pricing />
      <Contact />
      <Footer />
      {/* <Home /> */}
    </div>
  );
}

export default App;
