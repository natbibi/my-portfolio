import React, { useState } from 'react';
import { ProjectCards } from '../../components'
import projectData from './data'

const Projects = () => {
    const [project, setProject] = useState(projectData);


    const renderProjects = () => {
        return project.map(p =>
            <ProjectCards projectData={p} key={p.id} />
        );
    }

    return (
        <>
            <heading className="intro-container">
                <h1>👩🏻‍💻 Projects</h1>
                <h5>A selection of my best work. More available on <a href={'./contact'}>Github.</a></h5>
            </heading>
            <main className="projects-container">
                {renderProjects()}
            </main>
        </>
    );
};

export default Projects;
