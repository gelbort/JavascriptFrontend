import React from 'react';
import Project from './Project';
import SectionTitle from '../components/Generics/SectionTitle';
import './ProjectAndCase.css';

import GrowYourBusinessImage from '../assets/images/projectandcase/growyourbusiness.png';
import ResponsiveWebImage from '../assets/images/projectandcase/responsiveweb.png';
import EducateEmployeesImage from '../assets/images/projectandcase/educateemployees.png';
import BusinessInsightsImage from '../assets/images/projectandcase/businessinsights.png';

const ProjectAndCase = () => {
  return (
    <section className="project-and-case">
      <div className="container">
        <SectionTitle title="Project & case studies" description="Let's Look at Our Global Projects" />
        <div className="project-and-cases">
          <Project
            className="project"
            imageSrc={GrowYourBusinessImage}
            altText="Grow your business"
            title="Grow your business"
            link="business.html"
          />
          <Project
            className="project"
            imageSrc={ResponsiveWebImage}
            altText="Why your client needs a responsive website"
            title="Why your client needs a responsive website"
            link="responsiveweb.html"
          />
          <Project
            className="project"
            imageSrc={EducateEmployeesImage}
            altText="Educate your employees to get better results"
            title="Educate your employees to get better results"
            link="#"
          />
          <Project
            className="project"
            imageSrc={BusinessInsightsImage}
            altText="Business insights are an important piece of your business"
            title="Business insights are an important piece of your business"
            link="#"
          />
        </div>
        <div className="center-content">
          <a className="btn-black" href="projects.html">
            All recent projects <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectAndCase;
