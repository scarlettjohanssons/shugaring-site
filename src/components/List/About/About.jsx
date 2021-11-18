import React from 'react';
import Image1 from '../../../styles/images/about.jpg';

const About = () => {
  return (
    <section class="about-area ptb--110" id="about">
      <div class="container">
        <div class="row" style={{ 'justifyContent': 'space-between' }}>
          <div class="col-md-5 hidden-sm hidden-xs">
            <div class="about-left-thumb">
              <img src={Image1} alt="mobile screen" />
            </div>
          </div>
          <div class="about_content col-md-offset-1 col-sm-12 col-xs-12">
            <div class="about-content">
              <span>Meet Appson.</span>
              <h2>Work the way you live</h2>
              <p>Lorem ipsum dolor sit amet, consectetr adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
              <div class="about-ft">
                <div class="ft-single">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
