import React from 'react';
import Img1 from '../../styles/images/159749.svg';
import Img4 from '../../styles/images/582462.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  },
};

const Header = () => {

  return (
    <section className="slider-area background-image" id='home'>
      <div className="container">
        <div className="slider-content d-flex flex-center">
          <div className="col-md-8 col-sm-9 col-xs-12 d-flex flex-center">
            <div className="slider-nner">
              <h2>Шугаринг та <br />воскова <br />епіляція</h2>
              <h1>Найкращий час-це час для себе</h1>
            </div>
          </div>
          <div className="top-img col-md-4 hidden-sm hidden-xs">
            <Carousel
              swipeable={false}
              responsive={responsive}
              infinite={true}
              arrows={false}
              autoPlay={true}
              customTransition={'transform 500ms linear'}
            >
              <div className="slider-m-img">
                <img src={Img1} />
              </div>
              <div className="slider-m-img">
                <img src={Img4} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
