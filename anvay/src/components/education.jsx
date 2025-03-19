import React from 'react';
import './css/education.css';

const Education = () => {
  return (
    <section className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          <div className="education">
            <h3>Degree Title</h3>
            <h4>Institution Name</h4>
            <p>Duration</p>
            <p>Brief description of the degree and any notable achievements.</p>
          </div>
          <div className="education">
            <h3>Degree Title</h3>
            <h4>Institution Name</h4>
            <p>Duration</p>
            <p>Brief description of the degree and any notable achievements.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;