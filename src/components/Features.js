import React from 'react';
import './features.css';

const Features = () => (
  <section className="features">
    <div className="container">
      <div className="section-title">
        <p>Features</p>
        <h2>Our Accounting is trusted by thousands of companies</h2>
        <div className="featbtn">
          <a className="btn-yellow btn-login" href="feature.html">
            Learn more <i className="fa-regular fa-arrow-up-right"></i>
          </a>
        </div>
      </div>

      <div className="allfeat">
        <div className="featurebox businessadvice">
          <i className="fa-regular fa-handshake fa-2x"></i>
          <h4>Business Advice</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="featurebox financialadvice">
          <i className="fa-regular fa-chart-mixed-up-circle-dollar fa-2x"></i>
          <h4>Financial Advice</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="featurebox startupadvice">
          <i className="fa-regular fa-lightbulb-on fa-2x"></i>
          <h4>Startup Business</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="featurebox riskmanagement">
          <i className="fa-sharp fa-regular fa-head-side-gear fa-2x"></i>
          <h4>Risk Management</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
