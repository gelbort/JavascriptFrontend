import React from 'react';
import './project.css';

const Project = ({ imageSrc, altText, title, link, style, imageStyle, titleStyle, readmoreStyle, hoverReadmoreStyle }) => {
  return (
<a href={link} style={style} className="project">
      <img src={imageSrc} alt={altText} style={imageStyle} />
      <h3 style={titleStyle}>{title}</h3>
      <div style={readmoreStyle} className={`readmore ${hoverReadmoreStyle}`}>
        Read more <i className="fa-solid fa-arrow-up-right"></i>
      </div>
    </a>
  );
};

export default Project;
