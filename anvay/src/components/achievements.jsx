import React from 'react';
import './css/achievements.css';

const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement">
            <h3>Achievement Title</h3>
            <p>Description of the achievement.</p>
          </div>
          <div className="achievement">
            <h3>Achievement Title</h3>
            <p>Description of the achievement.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;