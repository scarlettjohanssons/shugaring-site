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
              <h1>Шугаринг та <br />воскова <br />епіляція</h1>
              <h2>Найкращий час-це час для себе</h2>
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
                <img src={Img1} alt={''} />
              </div>
              <div className="slider-m-img">
                <img src={Img4} alt={''} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
