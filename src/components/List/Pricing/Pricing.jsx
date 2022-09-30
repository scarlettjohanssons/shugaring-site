import React, { useState, useRef } from 'react';
import Title from '../../Title/Title';
import { priceList, listUnderPrice } from '../../../helper/priceList';

const Pricing = () => {

  const [isOpenMean, setIsOpenMean] = useState(false);

  const ref = useRef();

  const handleClick = () => {
    const wrapper = ref.current;
    wrapper.classList.toggle('is-table-open');
  }

  return (
    <section class="pricing-area ptb--10" id="pricing">
      <div class="container">
        <Title titleName='Pricing Plan' />
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">Прайс</div>
            {isOpenMean === false ? (
              <div class="col col-2">Прайс</div>
            ) : (
                <>
                  <div class="col col-2">Послуга</div>
                  <div class="col col-3">Ціна</div>
                </>
              )}
            <div class="table-open">
              <a
                href='#'
                className='table-open_btn'
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpenMean(!isOpenMean);
                  handleClick();
                }}
              >
                <i class={`${isOpenMean ? 'fa-arrow-circle-up' : 'fa-arrow-circle-down'} fa fa-2x`} aria-hidden="true"></i>
              </a>
            </div>
          </li>
          <div className='wrapper' ref={ref}>
            {priceList.map(item => {
              return (
                <li class="table-row" key={item.id}>
                  <div class="col col-2" data-label="Услуга"><span className='mobile-title'>Послуга</span>{item.service}</div>
                  <div class="col col-3" data-label="Цена"><span className='mobile-title'>Ціна</span>{item.price}</div>
                </li>
              )
            })}
          </div>
        </ul>
        <div className='price-content'>
          <p>
            Шугаринг це особливе задоволення, яке дарує вам насолоду як під час процедури, так і після неї. І&nbsp;я&nbsp;відповім чому. Адже це:
          </p>
          {listUnderPrice && (
            <div className="question-ft">
              <ol>
                {listUnderPrice.map(item => (
                  <li key={item.id}>
                    <p style={{ 'margin': '0px' }}>
                      {item.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          )}
          <p>
            Ми живемо тут і зараз. Так навіщо позбавляти себе цих приємних моментів,
            які ми спокійно можемо собі дозволити?
          </p>
          <p>
            Чекаю всіх вас у себе в студії краси. Адже краса&nbsp;&mdash; це повага до себе.
            Саме тоді, коли ви любите себе, ви виглядаєте найкрасивіше. Моя мета&nbsp;&mdash;
            подарувати кожному з вас ту насолоду, від якої ми, дівчатка, отримуємо
            Невимовне задоволення, а саме &nbsp;&mdash; гладкість шкіри. Це дає можливість бути &nbsp;
            в гармонії не тільки з собою, а й ловити на собі захоплені погляди від
            ваших близьких, які теж отримують задоволення, торкаючись вашої шкіри. І&nbsp;це все&nbsp;&mdash;
            ефект від простого догляду за собою улюбленою.
          </p>
          <p>
            Пам'ятай: ти красива і ти чудово справляєшся!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
