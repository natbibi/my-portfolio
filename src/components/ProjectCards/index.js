import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'


const ProjectCards = ({ projectData }) => {


  return (
    <div className="project-container">
      <h3>{projectData.name}</h3>
      <div className="center-align">
      <img src={projectData.image}/>
      </div>
      <h4><a href={projectData.netlify}>Visit Website</a></h4>
      <h4><a href={projectData.github}>Visit Repo</a></h4>
    </div >
  )
}

export default ProjectCards
