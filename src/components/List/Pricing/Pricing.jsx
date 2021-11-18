import React from 'react';

const Pricing = () => {
  return (
    <section class="pricing-area ptb--120 bg-theme" id="pricing">
      {/* bg-theme */}
      <div class="container">
        <div class="section-title">
          <h2>Pricing Plan</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
        </div>
        <div class="pricing-list">
          <div class="row pricing-list">
            <div class="col-md-4 col-xs-12">
              <div class="pricing-item text-center">
                <div class="prc-head bg-theme-white">
                  <span>Basic</span>
                  <h4>$50/m</h4>
                </div>
                <ul class="prc-list">
                  <li>10 User</li>
                  <li>50 Email Accounts</li>
                  <li>100 MB Disk Space</li>
                  <li>2 Subdomains</li>
                  <li>Free Updates</li>
                  <li>Support  24/7</li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-xs-12">
              <div class="pricing-item text-center">
                <div class="prc-head bg-theme-white">
                  <span>PREMIUM</span>
                  <h4>$150/m</h4>
                </div>
                <ul class="prc-list">
                  <li>10 User</li>
                  <li>50 Email Accounts</li>
                  <li>100 MB Disk Space</li>
                  <li>2 Subdomains</li>
                  <li>Free Updates</li>
                  <li>Support  24/7</li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-xs-12">
              <div class="pricing-item text-center">
                <div class="prc-head bg-theme-white">
                  <span>UNLIMITED</span>
                  <h4>$250/m</h4>
                </div>
                <ul class="prc-list">
                  <li>10 User</li>
                  <li>50 Email Accounts</li>
                  <li>100 MB Disk Space</li>
                  <li>2 Subdomains</li>
                  <li>Free Updates</li>
                  <li>Support  24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
