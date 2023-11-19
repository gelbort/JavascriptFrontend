import React from 'react';
import './OurServices.css';
import ServiceBox from './ServiceBox';
import { Button } from './Generics/Button';

const OurServices = () => {
    

    const services = [
        { title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/"},
        { title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/"},
        { title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/"},
        { title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/"},

    ];
    
  return (
    <section style={{ backgroundColor: '#f0efe9' }} className="ourservices">
      <div className="container">
        <div className="section-title">
          <p>Our Services</p>
          <h2>We Provide The Best<br /> Service For Consulting</h2>
        </div>

        <div className="infobox">
            {
                services.map ((service, index) => (
                    <ServiceBox key={index} title={service.title} description={service.description} url={service.url} />
                ))}

        </div>
        <div className="center-content">
          <Button type="transparent" title="Browse Services" url="/services" />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
