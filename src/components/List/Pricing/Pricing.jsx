import React, { useState } from 'react';
import Title from '../../Title/Title';
import { priceList, additionallyPriceList } from '../../../helper/priceList';

const Pricing = () => {

  const [isOpenMean, setIsOpenMean] = useState(false);
  const [isOpenAdditional, setIsOpenMeanAdditional] = useState(false);

  return (
    <section class="pricing-area ptb--70" id="pricing">
      {/* bg-theme */}
      <div class="container">
        <div class="section-title">
          <Title titleName='Pricing Plan' />
        </div>
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">Прайс</div>
            <div class="col col-2">Услуга</div>
            <div class="col col-3">Цена</div>
            <div class="table-open">
              <a
                href='#'
                className='table-open_btn'
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpenMean(!isOpenMean);
                }}
              >
                <i class={`${isOpenMean ? 'fa-arrow-circle-up' : 'fa-arrow-circle-down'} fa fa-2x`} aria-hidden="true"></i>
              </a>
            </div>
          </li>
          {isOpenMean &&
            <>
              {priceList.map(item => {
                return (
                  <li class="table-row" key={item.id}>
                    <div class="col col-2" data-label="Услуга"><span className='mobile-title'>Услуга</span>{item.service}</div>
                    <div class="col col-3" data-label="Цена"><span className='mobile-title'>Цена</span>{item.price}</div>
                  </li>
                )
              })}
            </>
          }
        </ul>
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">Дополнительно</div>
            <div class="col col-2">Услуга</div>
            <div class="col col-3">Цена</div>
            <div class="table-open">
              <a
                href='#'
                className='table-open_btn'
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpenMeanAdditional(!isOpenAdditional);
                }}
              >
                <i class={`${isOpenAdditional ? 'fa-arrow-circle-up' : 'fa-arrow-circle-down'} fa fa-2x`}></i>
              </a>
            </div>
          </li>
          {isOpenAdditional &&
            <>
              {additionallyPriceList.map(item => {
                return (
                  <li class="table-row" key={item.id}>
                    <div class="col col-2" data-label="Услуга"><span className='mobile-title'>Услуга</span>{item.service}</div>
                    <div class="col col-3" data-label="Цена"><span className='mobile-title'>Цена</span>{item.price}</div>
                  </li>
                )
              })}
            </>
          }
        </ul>
        <div className='price-content'>
          <p>
            Шугаринг это особое удовольствие, которое дарит вам наслаждение как во время процедуры, так и после нее. И я отвечу почему. Ведь это :
          </p>
          <div class="about-ft" style={{ 'marginBottom': '20px' }}>
            <p style={{ 'margin': '0px' }}>
              <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
              уход за кожей, пилинг
            </p>
            <p style={{ 'margin': '0px' }}>
              <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
              мгновенный результат, который имеет длительный эффект (несколько недель)
            </p>
            <p style={{ 'margin': '0px' }}>
              <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
              желаемое изменение самого волоса (он становится мягче, растет меньше и реже)
            </p>
            <p style={{ 'margin': '0px' }}>
              <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
              нет раздражений, зуда, прыщей и т.д.
            </p>
            <p style={{ 'margin': '0px' }}>
              <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
              меньше нежелательных запахов
            </p>
            <p style={{ 'margin': '0px' }}>
              <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
              удовольствие в личной жизни
            </p>
            <p style={{ 'margin': '0px' }}>
              <i class="fa fa-long-arrow-right" style={{ 'padding': '0px 10px' }}></i>
              вы уверены в себе и всегда готовы к самым приятным и чувственным моментам жизни.
            </p>
          </div>
          <p>
            Мы живем здесь и сейчас. Так зачем лишать себя этих приятных моментов , которых мы спокойно можем себе позволить?
          </p>
          <p>
            Жду всех вас у себя в студии красоты. Ведь красота – это уважение к себе. Именно тогда, когда вы любите себя, вы выглядите красивее всех. Моя цель – подарить каждому из вас то наслаждение, от которого все мы, девочки, получаем несказанное удовольствие, а именно гладкость кожи. Это дает возможность быть в гармонии не только с самим собой, а и ловить на себе восторженные взгляды от ваших близких, которые тоже получают удовольствие прикасаясь к ваше коже.  И это все эффект от простого ухода за собой любимой.
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
