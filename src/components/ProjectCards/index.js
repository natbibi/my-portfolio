import React, { useState, useEffect } from 'react';

const ProjectCards = ({projectData}) => {
    
  
    return (
        <div className="project-container">
        <h3>{projectData.name}</h3>
        <h4>{projectData.github}</h4>
        </div>
    )
}

export default ProjectCards
