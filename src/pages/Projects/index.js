import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Project, ProjectCards, ScrollToTop, BackButton } from '../../components'
import projectData from './data'

const Projects = () => {
    const [project, setProject] = useState(projectData);

    const handleSelect = (id) => {
        history.push(`projects/${(id)}`)
        console.log(id)
    }

    const prevProj = (id) => {
        if (id.id <= 1) {
            history.push(`/projects/5`)
        } else {
            history.push(`/projects/${(id.id - 1)}`)
        }
    }

    const nextProj = (id) => {
        if (id === undefined) {
            history.push(`/projects/1`)
        } else {
            history.push(`/projects/${(id.id)}`)
        }
    }

    const renderProjects = project.map(p =>
        <Project projectData={p} key={p.id} handleSelect={handleSelect} />
    );

    const history = useHistory();

    return (
        <>
            {/* <header className="intro-container">
                <h1>👩🏻‍💻 Projects</h1>
                <h5>A selection of my best work. More available on <a href={'./contact'}>Github.</a></h5>
            </header> */}
            {/* <main className="projects-container">
                {renderProjects()}
            </main> */}

            <section>
                {
                    <Switch>
                        {/* Render props*/}
                        <Route exact path={"/projects"} render={() => (
                            <>
                                <header className="intro-container">
                                    <h1>👩🏻‍💻 Projects</h1>
                                    <h5>A selection of my best work. More available on <a href={'./contact'}>Github.</a></h5>
                                </header>
                                <main className="main-projects">
                                    <div className="proj-wrapper">{renderProjects}</div>
                                    {/* <p><i class="fas fa-chevron-right"></i></p> */}
                                </main>
                            </>)} />

                        {/* Dynamic route params */}
                        <Route path={"/projects/:id"} render={({ match }) => (
                            <div className="projects-container">
                                {/* <BackButton /> */}
                                <div className="proj-nav">
                                    <button className="prev-button" onClick={() => prevProj(project[match.params.id - 1])}><i class="fas fa-chevron-left"></i></button>
                                    <ProjectCards projectData={project[match.params.id - 1]} handleSelect={() => { }} />
                                    <button className="next-button" onClick={() => nextProj(project[match.params.id])}><i class="fas fa-chevron-right"></i></button>
                                </div>
                            </div>
                        )} />
                    </Switch>
                }
            </section>


            <ScrollToTop />
        </>
    );
}

export default Projects;
