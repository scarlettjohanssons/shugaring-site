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
            Шугаринг это особое удовольствие, которое дарит вам наслаждение как во время процедуры, так и после нее. И я отвечу почему. Ведь это :
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
            Мы живем здесь и сейчас. Так зачем лишать себя этих приятных моментов , которые мы спокойно можем себе позволить?
          </p>
          <p>
            Жду всех вас у себя в студии красоты. Ведь красота – это уважение к себе. Именно тогда, когда вы любите себя, вы выглядите красивее всех. Моя цель – подарить каждому из вас то наслаждение, от которого все мы, девочки, получаем несказанное удовольствие, а именно – гладкость кожи. Это дает возможность быть в гармонии не только с самим собой, а и ловить на себе восторженные взгляды от ваших близких, которые тоже получают удовольствие, прикасаясь к ваше коже.  И это все – эффект от простого ухода за собой любимой.
          </p>
          <p>
            Помни: ты красива и ты отлично справляешься!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
