import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import anvay from '../assets/projects/ANVAY.png';
import aomd from '../assets/projects/aomd.jpg';
import gk from '../assets/projects/gk.jpg';
import './css/projects.css';

function Projects() {
  const projects = [
    {
      title: 'Project Anvay',
      description: 'Some representative placeholder content for the first project.',
      image: anvay,
    },
    {
      title: 'Project AOMD',
      description: 'Some representative placeholder content for the second project.',
      image: aomd,
    },
    {
      title: 'Project GK',
      description: 'Some representative placeholder content for the third project.',
      image: gk,
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="project-item">
              <img src={project.image} className="img-fluid" alt={project.title} />
              <div className="overlay">
                <div className="overlay-content">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
