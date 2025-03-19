import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/hero_section.css';
import profileImage from '../assets/mohit.jpg'; // Replace with your actual image path

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={profileImage} alt="Profile" className="images" />
      <div className="text-info">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm [Your Name], a passionate developer with experience in building web applications.
          I love to create beautiful and functional websites. Explore my projects and get in touch!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;