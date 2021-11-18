import React from 'react';

const Header = () => {

  return (
    <section className="slider-area background-image" id='home'>
      <div className="container">
        <div className="slider-content d-flex flex-center">
          <div className="col-md-8 col-sm-9 col-xs-12 d-flex flex-center">
            <div className="slider-nner">
              <h2>Perfect Landing Page <br />Best For Your App</h2>
              <p>The Best Template For Your Mobile App To Showcase And Acquire New Customers All Around The World.The Best Template That You Can Find Anywhere!</p>
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
