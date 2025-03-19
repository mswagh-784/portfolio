import React from 'react';
import './css/experience.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          <div className="experience">
            <h3>Job Title</h3>
            <h4>Company Name</h4>
            <p>Duration</p>
            <p>Key responsibilities and achievements.</p>
          </div>
          <div className="experience">
            <h3>Job Title</h3>
            <h4>Company Name</h4>
            <p>Duration</p>
            <p>Key responsibilities and achievements.</p>
          </div>
          <div className="experience">
            <h3>Job Title</h3>
            <h4>Company Name</h4>
            <p>Duration</p>
            <p>Key responsibilities and achievements.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;