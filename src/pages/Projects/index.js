import React, { useState } from 'react';
import { ProjectCards } from '../../components'
import projectData from './data'

const Projects = () => {

    const Project = projectData.map((projectData) => (
        <ProjectCards key={projectData.id} className="project-container" projectData={projectData} />
    ))

    return (
        <>
            <h1>My Projects</h1>
            <div className="slider">
                {Project}
            </div>
        </>
    )
}

export default Projects;
