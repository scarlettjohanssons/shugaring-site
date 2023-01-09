import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div class="footer-area bg-theme ptb--10">
        <div class="container">
          <div class="footer-inner">
            <ul class="fsocial">
              <li><a href="https://www.facebook.com/katrinshugar/" target="_blank"><i class="fa fa-facebook"></i></a></li>
              <li><a href="https://t.me/KatrinKukobko" target="_blank"><i class="fa fa-telegram"></i></a></li>
              <li><a href="https://www.instagram.com/katerinakukobko/" target="_blank"><i class="fa fa-instagram"></i></a></li>
            </ul>
            <p class="copy-right">
              {`Copyright © ${(new Date().getFullYear())} | All rights reserved | This template is made by`} <a href="https://github.com/scarlettjohanssons" target="_blank">Illia</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
