import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Project, ScrollToTop } from '../../components'
import axios from 'axios';

import projectData from './data'

const Projects = () => {
    const [project, setProject] = useState(projectData);
    console.log(project)
    // const [project, setProject] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         try {
    //             const { data } = await axios.get("https://nat-api.herokuapp.com/projects/")
    //             setProject(data)
    //             setLoading(false)
    //         } catch (err) {
    //             setError("Sorry, there's been error")
    //         }
    //     }
    //     fetchProjects()
    // }, []);

    const handleSelect = (id) => {
        navigate(`${(id)}`)
    }

    const renderProjects = project.map(p =>
        <Project projectData={p} key={p.id} handleSelect={handleSelect} />
    );

    const navigate = useNavigate();

    return (
        <>
            <section>
            <>
                <header className="intro-container">
                    <h1>👩🏻‍💻 Projects</h1>
                    <h5>A selection of my best work. Click for more details. More projects available on <a href={'./contact'}>Github.</a></h5>
                </header>
                <main className="main-projects">
                    {loading ? <p>loading... please wait or refresh </p> :
                        <div className="proj-wrapper">{renderProjects}</div>}
                </main>
            </>
            </section>

            <ScrollToTop />
        </>
    );
}

export default Projects;
