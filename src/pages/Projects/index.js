import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { ProjectCards, ScrollToTop } from '../../components'
import projectData from './data'

const Projects = () => {
    const [project, setProject] = useState(projectData);

    const handleSelect = (id) => {
        history.push(`projects/${(id)}`)
        console.log(id)
    }

    const renderProjects = project.map(p =>
        <ProjectCards projectData={p} key={p.id} handleSelect={handleSelect} />
    );

    const history = useHistory();

    return (
        <>
            <header className="intro-container">
                <h1>👩🏻‍💻 Projects</h1>
                <h5>A selection of my best work. More available on <a href={'./contact'}>Github.</a></h5>
            </header>
            {/* <main className="projects-container">
                {renderProjects()}
            </main> */}

            <section>
                {
                    <Switch>
                        {/* Render props*/}
                        <Route exact path={"/projects"} render={() => (<div className="projects-container">{renderProjects}</div>)} />
                        {/* Dynamic route params */}

                        <Route path={"/projects/:id"} render={({ match }) => (
                            <div className="projects-container">
                                {/* <button className="album-nav" onClick={() => prevAlbum(project[match.params.id - 1])}>prev</button> */}
                                <ProjectCards projectData={project[match.params.id - 1]} handleSelect={() => { }} />
                                {/* <button className="album-nav" onClick={() => nextAlbum(project[match.params.id])}>next</button> */}
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
