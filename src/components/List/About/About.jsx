import React from 'react';
import Image1 from '../../../styles/images/face.jpg';
import Title from '../../Title/Title';
import { aboutList } from '../../../helper/questionsTextConfig';

const About = () => {
  return (
    <section class="about-area ptb--10" id="about">
      <div class="container">
        <Title titleName='About' />
        <div class="about-content">
          <p>
            Иметь гладкую шелковистую кожу&nbsp;&mdash; это неотъемлимое желание любой представительницы слабого пола.
            Для достижения этой цели используют много разных способов. Самый распространенный из&nbsp;них это эпиляция
            воском и&nbsp;сахарной пастой. Еще их&nbsp;называют ваксинг и&nbsp;шугаринг.
          </p>
          <p>
            В&nbsp;наше время и&nbsp;с&nbsp;нашим ритмом жизни эти способы знают почти все. Они стали на&nbsp;столько популярны, что
            людей, которые не&nbsp;попробовали осталось очень мало. Многие знают и&nbsp;убеждены, что это самый гуманный,
            щадящий и&nbsp;естественный вид эпиляции. Вы&nbsp;скажете &laquo;Так это&nbsp;же больно!&raquo; Хочу вас убедить в&nbsp;обратном.
            Если вы&nbsp;попали в&nbsp;руки к&nbsp;опытному квалифицированому мастеру, который знает свое дело, то&nbsp;вам нечего
            бояться. Опытный мастер всегда подберет правильную технику, необходимый материал и&nbsp;будет работать
            в&nbsp;том ритме, в&nbsp;котором будет удобно клиенту, а&nbsp;болевые ощущения приближены к&nbsp;минимуму или даже к
            нулю.
          </p>
          <p>
            Очень важно найти &laquo;своего&raquo; мастера, &laquo;свою&raquo; студию. А&nbsp;тем более в&nbsp;таком достаточно
            интимном процессе, как шугаринг. Еще не&nbsp;нашли?
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
              <h4 className='about-content__title'>Тогда давайте знакомиться</h4>
              <p>
                Меня зовут Екатерина. Я&nbsp;&mdash; сертифицированный мастер восковой и&nbsp;сахарной эпиляции.
                Работаю с&nbsp;удовольствием и&nbsp;приглашаю всех девочек к&nbsp;себе на&nbsp;процедуру красоты. Я
                очень люблю свою работу и&nbsp;обожаю делать кожу гладкой. Ведь именно после процедуры
                красоты мы&nbsp;становимся уверенней в&nbsp;себе и&nbsp;любим себя еще больше. Ко&nbsp;всем своим
                гостьям, которые приходят ко&nbsp;мне я&nbsp;отношусь с&nbsp;особой заботой и&nbsp;внимательностью.
                Я&nbsp;ведь тоже девочка и&nbsp;знаю как должно все произойти, чтобы было удобно и&nbsp;спокойно.
                Поэтому стараюсь чтобы:
              </p>
              {aboutList && (
                <div className="question-ft">
                  <ol>
                    {aboutList.map(item => (
                      <li key={item.id}>
                        <p style={{ 'margin': '0px' }}>
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
