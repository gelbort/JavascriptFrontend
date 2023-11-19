import React from 'react';
import './AboutCompany.css'; 

const YourComponentName = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="samantha">
          <img src="/images/aboutcompany/samantha-brown-small.jpg" alt="" />
          <div className="text-block">
            <div className="name">
              <h3>Samantha Brown,</h3>
              <h4>Founder</h4>
            </div>
            <p>"Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit."</p>
          </div>
        </div>

        <div className="infobox">
          <h4>About Company</h4>
          <h2>We Are Business Consulting & Credit Repair Experts</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati?
            Ex esse error voluptates iure vel totam eos. <br />
            <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci
            accusantium libero provident voluptate amet.
          </p>
          <div className="btn">
            <a className="btn-black" href="about.html">
              Learn more<i className="fa-solid fa-arrow-right"></i>
            </a>
            <a className="btn-transparent" href="services.html">
              <i className="fa-sharp fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourComponentName;
