import React from "react";
import { SiRedux, SiPostgresql, SiMongodb, SiJest, SiFlask, SiDjango, SiAdobephotoshop } from "react-icons/si";

const Skills = () => {

  return (
    <>
    {/* <header className="intro-container">
        <h1>My Skills</h1>
        <h5></h5>
    </header> */}

    <main className="projects-container" style={{ paddingTop: "0" }}>
        <div className="tech-icons center-align">
            <div className="tech-icon"><i className="fab fa-html5"></i>html</div>
            <div className="tech-icon"><i className="fab fa-css3-alt"></i>css</div>
            <div className="tech-icon"><i className="fab fa-js-square"></i>javascript</div>
            {/* <div className="tech-icon"><i className="fab fa-bootstrap"></i>bootstrap</div> */}
            {/* <div className="tech-icon"><i className="fab fa-python"></i>python</div> */}
            <div className="tech-icon"><i className="fab fa-node-js"></i>node.js</div>
            <div className="tech-icon"><i className="fab fa-react"></i>react</div>
            <div className="tech-icon"><SiRedux />redux</div>
            <div className="tech-icon"><i className="fab fa-docker"></i>docker</div>
            <div className="tech-icon"><SiPostgresql />postgres</div>
            <div className="tech-icon"><SiMongodb />mongodb</div>
            {/* <div className="tech-icon"><SiFlask />flask</div> */}
            {/* <div className="tech-icon"><SiDjango />django</div> */}
            <div className="tech-icon"><SiJest />jest</div>
            <div className="tech-icon"><SiAdobephotoshop />photoshop</div>
        </div>
    </main>
</>
  );
}

export default Skills;