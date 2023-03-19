import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectCards = () => {
  const [project, setProject] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

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
      navigate(`${(id)}`)
  }

  const prevProj = (id) => {
    if (id.id <= 1) {
        navigate(`/8`)
    } else {
        navigate(`/${(id.id - 1)}`)
    }
}

const nextProj = (id) => {
    if (id === undefined) {
        navigate(`/1`)
    } else {
        navigate(`/${(id.id)}`)
    }
}

  return (
    <>
    {loading ? <p style={{textAlign: "center", marginTop: "3rem"}}>loading... please wait or refresh </p> :

    <div className="proj-nav">
      <button className="prev-button" onClick={() => prevProj(project[id.id - 1])}><i className="fas fa-chevron-left"></i></button>

        <main className="project-container">
            <div>
              <h3>{project[id - 1].name}</h3>
              <p className="project-description">{project[id - 1].description}</p>
              <p className="project-technologies">{project[id - 1].technologies}</p>
              <button style={{display: project[id - 1].display}} className="visit-website"><a href={project[id - 1].netlify} target="_blank">See Live  <i className="fas fa-external-link-alt"></i></a></button>
              <button className="visit-repo"><a href={project[id - 1].github} target="_blank">Source Code  <i className="fas fa-external-link-alt"></i></a></button>
            </div>

            <div>
              <img src={project[id - 1].image} alt={project[id - 1].alt} className="project-img" onClick={() => handleSelect(project[id - 1].id)} />
            </div>
        </main >

      <button className="next-button" onClick={() => nextProj(project[id.id])}><i className="fas fa-chevron-right"></i></button>
    </div>
      
    }
    </>
  )
}

export default ProjectCards
