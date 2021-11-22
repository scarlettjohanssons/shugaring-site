import React from 'react';

const Header = () => {

  return (
    <section className="slider-area background-image" id='home'>
      <div className="container">
        <div className="slider-content d-flex flex-center">
          <div className="col-md-8 col-sm-9 col-xs-12 d-flex flex-center">
            <div className="slider-nner">
              <h1>СТУДИЯ</h1>
              <h2>Шугаринг и <br />восковая <br />эпиляция</h2>
              <h1>Лучшее время-это время для себя</h1>
            </div>
          </div>
          <div className="col-md-4 hidden-sm hidden-xs">
            <div className="slider-m-img">
              <img />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
