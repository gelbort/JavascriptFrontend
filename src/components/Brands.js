import React from 'react';
import BrandImage from './BrandImage';

import paperzLogo from '../assets/images/brands/paperz.svg';
import dorfusLogo from '../assets/images/brands/dorfus.svg';
import martinoLogo from '../assets/images/brands/martino.svg';
import squareLogo from '../assets/images/brands/square.svg';
import gobonaLogo from '../assets/images/brands/gobona.svg';

const BrandsSection = () => {
  const brands = [
    { src: paperzLogo, alt: 'Paperz logotype', url: '#' },
    { src: dorfusLogo, alt: 'Dorfus logotype', url: '#' },
    { src: martinoLogo, alt: 'Martino logotype', url: '#' },
    { src: squareLogo, alt: 'Square logotype', url: '#' },
    { src: gobonaLogo, alt: 'Gobona logotype', url: '#' },
  ];

  return (
    <section className="brands">
      <div className="container">
        <div className="brands-desktop">
          {brands.map((brand, index) => (
            <BrandImage key={index} src={brand.src} alt={brand.alt} url={brand.url} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
