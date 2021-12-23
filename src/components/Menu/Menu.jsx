import React, { useState, useEffect } from 'react';
import Navbar from '../MobileMenu/Navbar';

const Menu = () => {

  const [scroll, setScroll] = useState(0);
  const [isChoosenMenu, setIsChoosenMenu] = useState('home');

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header class='header-area header_fix'>
      <div class="container">
        <div class="row">
          <div class="menu-area">
            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class="logo">
                <a href="index.html">
                  <p>
                    Студия
                  </p>
                  <p>
                    гладкой кожи
                  </p>
                </a>
              </div>
            </div>
            <div class="col-md-9 hidden-xs hidden-sm">
              <div class="main-menu">
                <nav class="nav-menu">
                  <ul>
                    <li
                      name='home'
                      onClick={(e) => setIsChoosenMenu(e.target.name)}
                      class={`${isChoosenMenu === 'home' ? 'active' : ''}`}
                    >
                      <a name='home' href="#home">На верх</a>
                    </li>
                    <li
                      onClick={(e) => setIsChoosenMenu(e.target.name)}
                      class={`${isChoosenMenu === 'about' ? 'active' : ''}`}
                    >
                      <a name='about' href="#about">О себе</a>
                    </li>
                    <li
                      onClick={(e) => setIsChoosenMenu(e.target.name)}
                      class={`${isChoosenMenu === 'questions' ? 'active' : ''}`}
                    >
                      <a name='questions' href="#questions">Вопросы и ответы</a>
                    </li>
                    <li
                      onClick={(e) => setIsChoosenMenu(e.target.name)}
                      class={`${isChoosenMenu === 'price' ? 'active' : ''}`}
                    >
                      <a name='price' href="#pricing">Цены</a>
                    </li>
                    <li
                      onClick={(e) => setIsChoosenMenu(e.target.name)}
                      class={`${isChoosenMenu === 'contact' ? 'active' : ''}`}
                    >
                      <a name='contact' href="#contact">Контакты</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  )
};

export default Menu;
