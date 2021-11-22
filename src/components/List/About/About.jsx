import React from 'react';
import Image1 from '../../../styles/images/face.jpg';

const About = () => {
  return (
    <section class="about-area ptb--110" id="about">
      <div class="container">
        <div class="about-content">
          <p>
            Иметь гладкую шелковистую кожу – это неотъемлимое желание любой предоставительницы слабого пола.
            Для достижения этой цели используют много разных способов. Самый распространенный из них это эпиляция
            воском и сахарной пастой. Еще их называют ваксинг и шугаринг.
          </p>
          <p>
            В наше время и с нашим ритмом жизни эти способы знают почти все. Они стали на столько популярны, что
            людей, которые не попробовали осталось очень мало. Многие знают и убеждены, что это самый гуманный,
            щадящий и естественный вид эпиляции. Вы скажите "Так это же больно!" Хочу вас убедить в обратном.
            если вы попали в руки к опытному квалифицированому мастеру, который знает свое дело, то вам нечего
            бояться. Опытный мастер всегда подберет правильную технику,необходимый материал и будет работать
            в том ритме, в котором будет удобно клиенту, а болевые ощущения приближены к минимуму или даже к
            нулю.
          </p>
          <p>
            Очень важно найти "своего" мастера, "свою" студию. А тем более в таком достаточно
            интимном процессе, как шугаринг. Еще не нашли?
          </p>
        </div>
        <div class="row" style={{ 'justifyContent': 'space-between' }}>
          <div class="col-md-4 hidden-sm hidden-xs">
            <div class="about-left-thumb">
              <img src={Image1} alt="mobile screen" />
            </div>
          </div>
          <div class="about_content col-md-offset-1 col-sm-12 col-xs-12">
            <div class="about-content">
              <span>Тогда давайте знакомиться</span>
              <p>
                Меня зовут Екатерина. Я - сертифицированный мастер восковой и сахарной эпиляции.
                Работаю с удовольствием и приглашаю всех девочек к себе на процедуру красоты. Я
                очень люблю свою работу и обожаю делать кожу гладкой. Ведь именно после процедуры
                красоты мы становимся уверенней в себе и любим себя еще больше. Ко всем своим
                гостьям, которые приходят ко мне я отношусь с особой заботой и внимательностью.
                Я ведь тоже девочка и знаю как должно все произойти, чтобы было удобно и спокойно.
                Поэтому стараюсь чтобы:
              </p>
              <div class="about-ft">
                <p style={{ 'margin': '0px' }}>
                  <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
                  обстановка была комфортная
                </p>
                <p style={{ 'margin': '0px' }}>
                  <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
                  чистота кабинета неоспорима
                </p>
                <p style={{ 'margin': '0px' }}>
                  <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
                  качество косметики на высшем уровне, а расходники только одноразовые
                </p>
                <p style={{ 'margin': '0px' }}>
                  <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
                  конфиденциальность гарантирована
                </p>
                <p style={{ 'margin': '0px' }}>
                  <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
                  для каждого свой подход, ведь мы с вами все разные и индивидуальны
                </p>
                <p style={{ 'margin': '0px' }}>
                  <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
                  качественно выполнена работа
                </p>
                <p style={{ 'margin': '0px' }}>
                  <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
                  в приоритете не скорость, а безболезненность. Если для комфорта клиента нужно
                  работать медленнее, я это сделаю
                </p>
                <p style={{ 'margin': '0px' }}>
                  <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
                  всегда порекомендую домашний уход именно за Вашей кожей. Необходимая
                  косметика всегда есть в наличии
                </p>
                {/* </div> */}
                {/* <div class="ft-single">
                  <div class="icon"><i class="fa fa-desktop"></i></div>
                  <div class="ft-info">
                    <h4>Fully Responsive Design.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do enim ad minim veniam,</p>
                  </div>
                </div>
                <div class="ft-single">
                  <div class="icon"><i class="fa fa-android"></i></div>
                  <div class="ft-info">
                    <h4>Android Platform.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do enim ad minim veniam,</p>
                  </div>
                </div>
                <div class="ft-single">
                  <div class="icon"><i class="fa fa-headphones"></i></div>
                  <div class="ft-info">
                    <h4>Strategy Solutions.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do enim ad minim veniam,</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
