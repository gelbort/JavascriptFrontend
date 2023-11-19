import React, { useState } from 'react';
import './contactform.css';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [yourMessage, setYourMessage] = useState('');

  const validate = (element) => {
    const errorMessages = {
      fullName_required: "Please enter your full name",
      email_required: "Please enter your email address",
      email_invalid: "Please enter a valid email address",
      yourMessage_required: "Please enter your message",
    };

    if (!validateLength(element.value, 1)) {
      document.getElementById(`${element.id}`).classList.add('error');
      document.getElementById(`${element.id}-error`).innerHTML = errorMessages[element.id + "_required"];
    } else {
      let result = false;

      switch (element.type) {
        case 'text':
          result = validateLength(element.value);
          break;

        case 'email':
          result = validateEmail(element.value);
          break;
      }

      if (!result) {
        document.getElementById(`${element.id}`).classList.add('error');
        document.getElementById(`${element.id}-error`).innerHTML = errorMessages[element.id + "_invalid"];
      } else {
        document.getElementById(`${element.id}`).classList.remove('error');
        document.getElementById(`${element.id}-error`).innerHTML = "";
      }
    }
  };

  const handleFullNameChange = (e) => {
    const input = e.target.value;
    setFullName(input);
    validate({ id: 'fullName', type: 'text', value: input });
  };

  const handleEmailChange = (e) => {
    const input = e.target.value;
    setEmail(input);
    validate({ id: 'email', type: 'email', value: input });
  };

  const handleYourMessageChange = (e) => {
    const input = e.target.value;
    setYourMessage(input);
    validate({ id: 'yourMessage', type: 'text', value: input });
  };

  const validateLength = (value, minLength = 2) => {
    return value.length >= minLength;
  };

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          message: yourMessage,
        }),
      });

      if (response.status === 200) {
        
        window.alert(`Thank you, ${fullName}! Your message has been sent.`);
      } else {
        window.alert('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      window.alert('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <>
        <div className="contactparent container">
      <div className="contactcards">
        <div className="contacticon">
          <i className="testbtn fa-solid fa-location-dot fa-xl"></i>
        </div>
        <div className="contacttext">
          <h4>Visit us</h4>
          <br />
          <p>Sveavägen 31</p>
          <p>111 34 STOCKHOLM</p>
        </div>
      </div>
      <div className="contactcards">
        <div className="contacticon">
          <i className="testbtn fa-solid fa-phone fa-xl"></i>
        </div>
        <div className="contacttext">
          <h4>Call us</h4>
          <br />
          <p>+46 (8) 121 470 50</p>
          <p>+46 (8) 121 470 51</p>
        </div>
      </div>
      <div className="contactcards">
        <div className="contacticon">
          <i className="testbtn fa-solid fa-envelope fa-xl"></i>
        </div>
        <div className="contacttext">
          <h4>Email us</h4>
          <br />
          <div className="emaillinks">
            <a href="mailto:info@crito.com">info@crito.com</a>
            <a href="mailto:support@crito.com">support@crito.com</a>
          </div>
        </div>
      </div>
    </div>
      <div className="container contactform">
        <h2>Leave us a message <br />for any information.</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label" htmlFor="fullName"></label>
            <input
              className="form-input"
              type="text"
              id="fullName"
              title="fullName"
              name="firstName"
              placeholder="Name*"
              tabIndex="1"
              value={fullName}
              onChange={handleFullNameChange}
            />
            <span className="error-message" id="fullName-error"></span>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email"></label>
            <input
              className="form-input"
              type="email"
              id="email"
              title="Email"
              name="email"
              placeholder="Email*"
              tabIndex="2"
              value={email}
              onChange={handleEmailChange}
            />
            <span className="error-message" id="email-error"></span>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="yourMessage"></label>
            <textarea
              form="input"
              rows="5"
              name="yourMessage"
              id="yourMessage"
              placeholder="Your Message*"
              tabIndex="3"
              value={yourMessage}
              onChange={handleYourMessageChange}
            ></textarea>
            <span className="error-message" id="yourMessage-error"></span>
          </div>
          <button className="btn-yellow button" type="submit" tabIndex="4">
            Send Message <i className="fa-regular fa-arrow-up-right"></i>
          </button>
        </form>
      </div>
      <div className="google-maps" style={{ width: '100%', height: '620px', border: '0' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.7792237185604!2d18.05943557670118!3d59.336639710435996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6799554e87%3A0x6562d2c842903003!2sSveav%C3%A4gen%2031%2C%20111%2034%20Stockholm!5e0!3m2!1sen!2sse!4v1696368219648!5m2!1sen!2sse"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactForm;
