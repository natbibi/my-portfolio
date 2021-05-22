import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'


const ProjectCards = ({ projectData, handleSelect }) => {
  return (
    <main className="project-container">
      <div>
        <h3>{projectData.name}</h3>
        <p className="project-description">{projectData.description}</p>
        <p className="project-technologies">{projectData.technologies}</p>
        <button style={{display: projectData.display}} className="visit-website"><a href={projectData.netlify} target="_blank">See Live  <i className="fas fa-external-link-alt"></i></a></button>
        <button className="visit-repo"><a href={projectData.github} target="_blank">Source Code  <i className="fas fa-external-link-alt"></i></a></button>
      </div>

      <div>
        <img src={projectData.image} alt={projectData.alt} className="project-img" onClick={() => handleSelect(projectData.id)} />
      </div>

    </main >
  )
}

export default ProjectCards
