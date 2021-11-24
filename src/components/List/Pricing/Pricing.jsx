import React from 'react';
import Title from '../../Title/Title';

const Pricing = () => {
  return (
    <section class="pricing-area ptb--70" id="pricing">
      {/* bg-theme */}
      <div class="container">
        <div class="section-title">
          <Title titleName='Pricing Plan' />
        </div>
        {/* <div class="pricing-list">
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
        </div> */}
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-2">Customer Name</div>
            <div class="col col-3">Amount Due</div>
          </li>
          <li class="table-row">
            <div class="col col-2" data-label="Customer Name">John Doe</div>
            <div class="col col-3" data-label="Amount">$350</div>
          </li>
          <li class="table-row">
            <div class="col col-2" data-label="Customer Name">Jennifer Smith</div>
            <div class="col col-3" data-label="Amount">$220</div>
          </li>
          <li class="table-row">
            <div class="col col-2" data-label="Customer Name">John Smith</div>
            <div class="col col-3" data-label="Amount">$341</div>
          </li>
          <li class="table-row">
            <div class="col col-2" data-label="Customer Name">John Carpenter</div>
            <div class="col col-3" data-label="Amount">$115</div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
