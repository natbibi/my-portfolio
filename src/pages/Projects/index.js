import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Project, ProjectCards, ScrollToTop } from '../../components'
import axios from 'axios';

const Projects = () => {
    const [project, setProject] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await axios.get("https://nat-api.herokuapp.com/projects/")
                setProject(data)
                setLoading(false)
            } catch (err) {
                setError("Sorry, there's been error")
            }
        }
        fetchProjects()
    }, []);

    const handleSelect = (id) => {
        history.push(`projects/${(id)}`)
    }

    const prevProj = (id) => {
        if (id.id <= 1) {
            history.push(`/projects/7`)
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
            <section>
                {
                    <Switch>
                        {/* Render props*/}
                        <Route exact path={"/projects"} render={() => (
                            <>
                                <header className="intro-container">
                                    <h1>👩🏻‍💻 Projects</h1>
                                    <h5>A selection of my best work. Click for more details. More projects available on <a href={'./contact'}>Github.</a></h5>
                                </header>
                                <main className="main-projects">
                                    {loading ? <p>loading... please wait or refresh </p> :
                                        <div className="proj-wrapper">{renderProjects}</div>}
                                </main>
                            </>)} />

                        {/* Dynamic route params */}
                        <Route path={"/projects/:id"} render={({ match }) => (
                            <div className="projects-container">
                                {loading ? <p style={{textAlign: "center", marginTop: "3rem"}}>loading... please wait or refresh </p> :
                                    <div className="proj-nav">
                                        <button className="prev-button" onClick={() => prevProj(project[match.params.id - 1])}><i className="fas fa-chevron-left"></i></button>
                                        <ProjectCards projectData={project[match.params.id - 1]} handleSelect={() => { }} />
                                        <button className="next-button" onClick={() => nextProj(project[match.params.id])}><i className="fas fa-chevron-right"></i></button>
                                    </div>
                                }
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
