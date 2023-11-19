// Breadcrumbs.js
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div className="breadcrumbs">
      <ul className="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            {index < breadcrumbs.length - 1 ? (
              <Link to={breadcrumb.link} className="breadcrumb-link">
                {breadcrumb.label}
              </Link>
            ) : (
              <span className="current">{breadcrumb.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
