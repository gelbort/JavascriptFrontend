import React from 'react';

const BrandImage = ({ src, alt, url }) => (
  <a href={url}>
    <img className="mySlides" src={src} alt={alt} />
  </a>
);

export default BrandImage;
