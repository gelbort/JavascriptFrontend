import React from 'react';
import './MeetOurTeam.css';
import kristinePalmerImage from '../assets/images/meetourteam/kristine-palmer.jpg'; 
import markAubriImage from '../assets/images/meetourteam/itay-verchik-6ZKGBzrDd3I-unsplash.jpg'; 
import kimberlyHansenImage from '../assets/images/meetourteam/kimberly-hansen.jpg'; 
import justinWillomanImage from '../assets/images/meetourteam/Justin-Willoman.png'; 

const TeamMember = ({ imgSrc, altText, name, role }) => (
  <div className="teambox">
    <img src={imgSrc} alt={altText} />
    <h4>{name}</h4>
    <p>{role}</p>
  </div>
);

const MeetOurTeam = () => (
  <section className="meetourteam">
    <div className="container">
      <div className="section-title">
        <p>Meet Our Team</p>
        <div className="inside">
          <h2>Experience Team Members</h2>
          <button className="btn-yellow">Browse Team<i className="fa-regular fa-arrow-up-right"></i></button>
        </div>
      </div>

      <div className="team">
        <TeamMember
          imgSrc={kristinePalmerImage}
          altText="Kristine Palmer CFO"
          name="Kristine Palmer"
          role="Chief Operating Officer"
        />
        <TeamMember
          imgSrc={markAubriImage}
          altText="Mark Aubri Senior Consultant"
          name="Mark Aubri"
          role="Senior Consultant"
        />
        <div className="teambox mobileteam">
          <TeamMember
            imgSrc={kimberlyHansenImage}
            altText="Kimberly Hansen Senior Consultant"
            name="Kimberly Hansen"
            role="Senior Consultant"
          />
        </div>
        <div className="teambox mobileteam">
          <TeamMember
            imgSrc={justinWillomanImage}
            altText="Justin Willoman Senior tech consultant"
            name="Justin Willoman"
            role="Senior Tech Consultant"
          />
        </div>
      </div>

      <div className="dots">
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
      </div>
    </div>
  </section>
);

export default MeetOurTeam;
