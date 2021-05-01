import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './style.css'


const Project = ({ projectData, handleSelect }) => {
  return (
      <>
      <div className="proj-container">
        <h5>{projectData.name}</h5>
        <img src={projectData.image} alt={projectData.alt} className="proj-img" onClick={() => handleSelect(projectData.id)} />
      </div>
      </>
  )
}

export default Project
