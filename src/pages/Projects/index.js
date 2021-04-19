import React from 'react';
import { ProjectCards } from '../../components'
import projectData from './data'

const Projects = () => {

    const Project = projectData.map((projectData) => (
        <ProjectCards key={projectData.id} projectData={projectData} />
    ))

    return (
        <>
        <h1>My Projects</h1>
        {Project}
        </>
    )
}

export default Projects;
