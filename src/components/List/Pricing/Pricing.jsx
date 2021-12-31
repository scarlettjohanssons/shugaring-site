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
                  <div class="col col-2">Услуга</div>
                  <div class="col col-3">Цена</div>
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
                  <div class="col col-2" data-label="Услуга"><span className='mobile-title'>Услуга</span>{item.service}</div>
                  <div class="col col-3" data-label="Цена"><span className='mobile-title'>Цена</span>{item.price}</div>
                </li>
              )
            })}
          </div>
        </ul>
        <div className='price-content'>
          <p>
            Шугаринг это особое удовольствие, которое дарит вам наслаждение как во&nbsp;время процедуры, так и&nbsp;после нее. И&nbsp;я&nbsp;отвечу почему. Ведь это:
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
            Мы&nbsp;живем здесь и&nbsp;сейчас. Так зачем лишать себя этих приятных моментов,
            которые мы&nbsp;спокойно можем себе позволить?
          </p>
          <p>
            Жду всех вас у&nbsp;себя в&nbsp;студии красоты. Ведь красота&nbsp;&mdash; это уважение к&nbsp;себе.
            Именно тогда, когда вы&nbsp;любите себя, вы&nbsp;выглядите красивее всех. Моя цель&nbsp;&mdash;
            подарить каждому из&nbsp;вас то&nbsp;наслаждение, от&nbsp;которого все&nbsp;мы, девочки, получаем
            несказанное удовольствие, а&nbsp;именно&nbsp;&mdash; гладкость кожи. Это дает возможность быть в&nbsp;
            гармонии не&nbsp;только с&nbsp;самим собой, а&nbsp;и&nbsp;ловить на&nbsp;себе восторженные взгляды от&nbsp;
            ваших близких, которые тоже получают удовольствие, прикасаясь к&nbsp;ваше коже. И&nbsp;это все&nbsp;&mdash;
            эффект от&nbsp;простого ухода за&nbsp;собой любимой.
          </p>
          <p>
            Помни: ты&nbsp;красива и&nbsp;ты&nbsp;отлично справляешься!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
