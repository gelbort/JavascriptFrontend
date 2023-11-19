import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import img_logotype from '../assets/images/Logotype.svg';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <button className="btn-menubars">
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
        <div className="logotype">
          <Link to="/">
            <img src={img_logotype} alt="crito logotype" />
          </Link>
        </div>
        <div className="contactbar">
          <div className="content-box">
            <i className="fa-light fa-phone-volume"></i>
            +46 (8) 121 470 50
          </div>
          <div className="content-box">
            <i className="fa-regular fa-envelope"></i>
            info@crito.com
          </div>
          <div className="content-box last">
            <i className="fa-regular fa-location-dot"></i>
            Sveavägen 31, 111 34 STOCKHOLM
          </div>
        </div>
        <div className="socialmediabar">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="menu">
          <nav>
            <NavLink exact to="/" activeclassname="active">
              Home
            </NavLink>
            <NavLink to="/services" activeclassname="active">
              Service
            </NavLink>
            <NavLink to="/News" activeclassname="active">
              News
            </NavLink>
            <NavLink to="/Contacts" activeclassname="active">
              Contact
            </NavLink>
          </nav>
          <NavLink className="btn-yellow btn-login" to="/login">
            Login <i className="fa-regular fa-arrow-up-right"></i>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
