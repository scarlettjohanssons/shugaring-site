import React from 'react';
import googlePlaces from 'google-maps-reviews';
import { Icon } from '@iconify/react';
import Title from '../../Title/Title';

const Contact = () => {
  return (
    <section class="ptb--70" id="contact">
      <div class="section-title text-black">
        <Title titleName='Contact US' />
        {/* <h2>Contact US</h2> */}
      </div>
      <div class="contact-flex-container">
        <div class="contact-address">
          <h4 class="contact-title">Address</h4>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p> */}
          <ul>
            <li class="h-addres">
              <i class="addres-icon fa fa-home"></i>
              <a href='https://goo.gl/maps/ZXwZms5ZQYMrTNwL8' target="_blank">Киев, ул. Металлистов 9</a>
            </li>
            <li>
              <i class="addres-icon fa fa-phone"></i>
              <a href="tel:+380973909127">+38 097 390 9127</a>
              <a style={{ 'marginLeft': '10px' }} href="https://t.me/KatrinKukobko" target="_blank"><i class="fa fa-telegram"></i></a>
              {/* <a style={{ 'marginLeft': '10px' }} href="https://t.me/KatrinKukobko" target="_blank"><Icon icon="fa-brands:viber" /></a> */}
            </li>
            <li>
              <i class="addres-icon fa fa-envelope"></i>
              <a href='mailto:marulik1311@gmail.com'>marulik1311@gmail.com</a>
            </li>
          </ul>
        </div>
        <div class="contact-map" style={{ 'padding': '0px' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.576750575444!2d30.44673521573133!3d50.448983879475165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdf9cb998ed1%3A0xfead7fd131c2f074!2z0KjRg9Cz0LDRgNC40L3QsyDQuCDQstC-0YHQutC-0LLQsNGPINGN0L_QuNC70Y_RhtC40Y8!5e0!3m2!1sru!2sua!4v1637162156649!5m2!1sru!2sua"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
          >
          </iframe>
        </div>
        {/* <div class="contact-form">
          <h4 class="contact-title">Get In Touch</h4>
          <form action="#">
                  <input type="text" class="input" name="name" placeholder="Your Name *">
                  <input type="email" class="input" name="email" placeholder="Your Email address*">
                  <input type="text" class="input" name="subject" placeholder="Your Subject*">
                  <input type="text" class="input" name="name" placeholder="Your Message*">
                  <textarea name="msg" class="input" id="msg" placeholder="Your Message*"></textarea>
                  <input type="submit" id="send" value="Send">
              </form>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
