import React from 'react';
import './showcase.css'; 
import backgroundLines from '../assets/images/background-lines.svg'; // Adjust the path to your image
import showcaseImage from '../assets/images/showcaseimage.png'; 
import { Button } from './Generics/Button';

const Showcase = () => {
  return (
    <section className="showcase">
      <img className="background-lines" src={backgroundLines} alt="" />
      <div className="container">
        <div className="content">
          <h1>We Provide The Best Business Solutions</h1>
          <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
          {/* <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-solid fa-arrow-right"></i></a> */}
          <Button type="yellow" title="Get Consulting" url="/some-url" />
          <a className="btn-transparent" href="services.html">Learn More <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <img src={showcaseImage} alt="image of a man in a suit with a tablet" />
      </div>
    </section>
  );
};

export default Showcase;
