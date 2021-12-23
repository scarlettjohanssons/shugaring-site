import React from 'react';
import Title from '../../Title/Title';

const Contact = () => {
  return (
    <section class="ptb--10" id="contact">
      <Title titleName='Contact US' />
      <div class="contact-flex-container">
        <div class="contact-address">
          <h4 class="contact-title">Адрес</h4>
          <p>5 минут от метро Шулявская </p>
          <ul>
            <li class="h-addres">
              <i class="addres-icon fa fa-home"></i>
              <a href='https://goo.gl/maps/ZXwZms5ZQYMrTNwL8' target="_blank">Киев, ул. Металлистов 9</a>
            </li>
            <li>
              <i class="addres-icon fa fa-phone"></i>
              <a href="tel:+380973909127">+38 097 390 9127</a>
              <a style={{ 'marginLeft': '10px' }} href="https://t.me/KatrinKukobko" target="_blank"><i class="fa fa-telegram"></i></a>
              <a style={{ 'marginLeft': '10px' }} href="https://t.me/KatrinKukobko" target="_blank"><i class="fab fa-viber"></i></a>
            </li>
            <li>
              <i class="addres-icon fa fa-envelope"></i>
              <a href='mailto:mkg1980@ukr.net'>mkg1980@ukr.net</a>
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
      </div>
    </section>
  );
};

export default Contact;
