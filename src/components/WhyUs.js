import React from 'react';
import './whyus.css';
import twowomenworkingImage from '../assets/images/Whychoseus/twowomenworking.png';
import bgImage from '../assets/images/Whychoseus/BGsvg.svg';

const WhyUs = () => {
  return (
    <>
      <div className="whyus">
        <div className="container">
          <div className="left">
            <div className="section-title">
              <p>Why Choose Us</p>
              <h2>Why We Are The <br /> Best Business <br /> Consulting Agency</h2>
            </div>
            <div className="usp">
              <div className="uspbox">
                <i className="fa-regular fa-thumbs-up fa-2xl"></i>
                <div className="usptext">
                  <h3>Process Excellence</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
              <div className="uspbox">
                <i className="fa-regular fa-light fa-hexagon fa-2xl"></i>
                <div className="usptext">
                  <h3>Strategic Planning</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
              <div className="uspbox">
                <i className="fa-regular fa-pen-nib fa-2xl"></i>
                <div className="usptext">
                  <h3>Experience Design</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
              <div className="uspbox">
                <i className="fa-regular fa-head-side-gear fa-2xl"></i>
                <div className="usptext">
                  <h3>Artificial Intelligence</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img className="whyusimg" src={twowomenworkingImage} alt="Two Women Working" />
          </div>
          <img className="bgimg" src={bgImage} alt="Background" />
        </div>
      </div>
    </>
  )
}

export default WhyUs