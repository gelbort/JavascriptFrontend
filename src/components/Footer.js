import React from 'react';
import './footer.css';
import footerbgimg from '../assets/images/backgrounds/background-lines-white-right.svg';

const Footer = () => {
  return (
    <footer>
      <section className="topfooter">
      <img className="footerbgimg" src={footerbgimg} alt="" />
        <div className="container">
          <div className="test">
            <div className="critofooter">
              <img src="/images/logotype-white.svg" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates!
                Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
              </p>
            </div>
            <div className="footerbox company">
              <h3>Company</h3>
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Works</a>
              <a href="#">Career</a>
            </div>
            <div className="footerbox help">
              <h3>Help</h3>
              <a href="#">Customer Support</a>
              <a href="#">Delivery Details</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="footerbox Resources">
              <h3>Resources</h3>
              <a href="#">Free eBooks</a>
              <a href="#">Development Tutorial</a>
              <a href="#">How to - Blog</a>
              <a href="#">YouTube Playlist</a>
            </div>
            <div className="footerbox link">
              <h3>Link</h3>
              <a href="#">Free eBooks</a>
              <a href="#">Development Tutorial</a>
              <a href="#">How to - Blog</a>
              <a href="#">YouTube Playlist</a>
            </div>
          </div>
        </div>
      </section>

      <div className="container two">
        <div>
          <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
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
      </div>
    </footer>
  );
};

export default Footer;
