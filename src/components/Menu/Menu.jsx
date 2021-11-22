import React, { useState, useEffect } from 'react';
import Icon from '../../styles/images/logo.png';
import { pushRotate as Menus } from 'react-burger-menu';
import { HamburgerButton } from 'react-hamburger-button';
import Navbar from '../MobileMenu/Navbar';

const Menu = () => {

  const [scroll, setScroll] = useState(0);
  const [isChoosenMenu, setIsChoosenMenu] = useState('home');
  const [isOpenMenu, setIsOpenMenu] = useState(false);

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
                  <img src={Icon} alt='' />
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
                      <a name='home' href="#home">Home</a>
                    </li>
                    <li
                      onClick={(e) => setIsChoosenMenu(e.target.name)}
                      class={`${isChoosenMenu === 'about' ? 'active' : ''}`}
                    >
                      <a name='about' href="#about">About</a>
                    </li>
                    <li
                      onClick={(e) => setIsChoosenMenu(e.target.name)}
                      class={`${isChoosenMenu === 'price' ? 'active' : ''}`}
                    >
                      <a name='price' href="#pricing">Price</a>
                    </li>
                    <li
                      onClick={(e) => setIsChoosenMenu(e.target.name)}
                      class={`${isChoosenMenu === 'contact' ? 'active' : ''}`}
                    >
                      <a name='contact' href="#contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <Navbar />
            <div class="col-sm-12 col-xs-12 visible-sm visible-xs">
              {/* <HamburgerButton
                open={isOpenMenu}
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                width={18}
                height={15}
                strokeWidth={1}
                color='black'
                animationDuration={0.5}
              /> */}
              {/* <Menus
                isOpen={isOpenMenu}
                pageWrapId={'page-wrap'}
                outerContainerId={'outer-container'}
                right={true}
              >
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#pricing">Price</a>
                <a href="#contact">Contact</a>
              </Menus> */}
              {/* <div class="mobile_menu">
                <div class="slicknav_menu">
                  <a href="#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style={{ 'outline': 'none' }}>
                    <span class="slicknav_menutxt">MENU</span>
                    <span class="slicknav_icon">
                      <span class="slicknav_icon-bar"></span>
                      <span class="slicknav_icon-bar"></span>
                      <span class="slicknav_icon-bar"></span>
                    </span>
                  </a>
                  <ul class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{ 'display': 'none' }}>
                    <li class="active"><a href="#home" role="menuitem" tabindex="-1">Home</a></li>
                    <li><a href="#about" role="menuitem" tabindex="-1">About</a></li>
                    <li><a href="#features" role="menuitem" tabindex="-1">About</a></li>
                    <li><a href="#screenshot" role="menuitem" tabindex="-1">About</a></li>
                    <li><a href="#download" role="menuitem" tabindex="-1">About</a></li>
                    <li><a href="#pricing" role="menuitem" tabindex="-1">Price</a></li>
                    <li><a href="#review" role="menuitem" tabindex="-1">Price</a></li>
                    <li><a href="#contact" role="menuitem" tabindex="-1">Contact</a></li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Menu;
