import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import './Contacts.css';  // Import the same CSS file
import imgBackgroundLines from '../assets/images/backgrounds/background-lines.svg';

const NewsHeader = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'News', link: '/news' },  
  ];

  return (
    <section className="contactheader"> {/* Use the same class as ContactsHeader */}
      <img className="background-lines" src={imgBackgroundLines} alt="" />
      <div className="container">
        <div className="banner">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <h2>News & Articles</h2>
        </div>
      </div>
    </section>
  );
};

export default NewsHeader;
