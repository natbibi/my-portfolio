import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'


const ProjectCards = ({ projectData }) => {


  return (
    <div className="project-container">
      <div>
        <h3>{projectData.name}</h3>
        <button className="visit-website"><a href={projectData.netlify} target="_blank">Visit Website  <i className="fas fa-external-link-alt"></i></a></button>
        <button className="visit-repo"><a href={projectData.github} target="_blank">Visit Repo  <i className="fas fa-external-link-alt"></i></a></button>
      </div>

      <div>
        <img src={projectData.image} className="project-img" />
      </div>

    </div >
  )
}

export default ProjectCards
