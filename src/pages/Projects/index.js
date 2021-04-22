import React, { useState } from 'react';
import { ProjectCards } from '../../components'
import projectData from './data'

const Projects = () => {
    const [project, setProject] = useState(projectData);


    const renderProjects = () => {
        return project.map(p =>
          <ProjectCards projectData={p} key={p.id}/>
        );
      }

    return (
        <main aria-label="main">
            <h1>Projects</h1>
            <div className="projects-container">
             { renderProjects ()}
             </div>
        </main>
    );
};

export default Projects;
