import React from 'react';
import './css/skills.css';
import './resume_download'
import ResumeDownload from './resume_download';

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">Specialization</h2>
        <div className="skills-grid">
          <div className="skill">
            <i className="fab fa-js-square"></i>
            <h3>JavaScript</h3>
            <p>Proficient in ES6+, React, and Node.js</p>
          </div>
          <div className="skill">
            <i className="fab fa-python"></i>
            <h3>Python</h3>
            <p>Experienced with Django, Flask, and data analysis</p>
          </div>
          <div className="skill">
            <i className="fab fa-html5"></i>
            <h3>HTML5</h3>
            <p>Skilled in semantic HTML and accessibility</p>
          </div>
          <div className="skill">
            <i className="fab fa-css3-alt"></i>
            <h3>CSS3</h3>
            <p>Expert in CSS3, Flexbox, Grid, and animations</p>
          </div>
        </div>
        <ResumeDownload />
      </div>
    </section>
  );
};

export default Skills;