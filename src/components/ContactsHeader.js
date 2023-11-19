import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import './Contacts.css';
import imgBackgroundLines from '../assets/images/backgrounds/background-lines.svg';


const ContactsHeader = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Contacts', link: '/contacts' },
  ];

  return (
    <section className="contactheader">
      <img className="background-lines" src={imgBackgroundLines} alt="" />
      <div className="container">
        <div className="banner">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <h2>Let’s Connect</h2>
        </div>
      </div>
    </section>
  );
};

export default ContactsHeader;
