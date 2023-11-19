import React, { useState } from 'react';
import backgroundwavylines from '../assets/images/backgrounds/background-wavy-lines.svg';
import './newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(input);
    setIsValidEmail(isValid);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    validateEmail(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidEmail) {
      console.log('Email is valid:', email);
    } else {
      console.log('Invalid email. Please enter a valid email address.');
    }
  };

  return (
    <div className="newsletter">
      <img className="background" src={backgroundwavylines} alt="" />
      <div className="container">
        <h2>Get News Updates by signing up</h2>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            onChange={handleInputChange}
            placeholder={isValidEmail ? 'username@domain.com' : 'Please enter a valid email'}
            className={isValidEmail ? '' : 'error'}
          />
          <button type="submit" className="btn-yellow">
            Subscribe<i className="fa-regular fa-arrow-up-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
