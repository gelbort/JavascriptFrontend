import React from 'react';

export const Button = ({ type, title, url }) => {
  const getButtonClassName = () => {
    switch (type) {
      case 'yellow':
        return 'btn-yellow';
      case 'black':
        return 'btn-black';
      default:
        return 'btn-transparent';
    }
  };

  return (
    <a className={getButtonClassName()} href={url}>
      {title}
      <i className="fa-solid fa-arrow-right"></i>
    </a>
  );
};
