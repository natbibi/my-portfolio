import React from 'react';
import { SiPostgresql, SiMongodb, SiJest, SiFlask, SiDjango, SiAdobephotoshop } from "react-icons/si";

const Home = () =>
    <>
        <header className="intro-container">
            <h1>👋🏼 About Me</h1>
            <h5>Hello! I am a Business/Marketing grad currently training to be full-stack Software Engineer with futureproof. I discovered my biggest passions (so far) in piano 🎹,
            active investing 📈and yoga 🧘🏻‍♀️. I live to travel and love to see the world 🌍 (29 countries and counting!). </h5>
        </header>
        <main className="projects-container">
            {/* <h1 className="center-align">Skills</h1> */}

            <div className="tech-icons center-align">
                <div className="tech-icon"><i className="fab fa-html5"></i>html</div>
                <div className="tech-icon"><i className="fab fa-css3-alt"></i>css</div>
                {/* <div className="tech-icon"><i className="fab fa-bootstrap"></i>bootstrap</div> */}
                {/* <div className="tech-icon"><i className="fab fa-python"></i>python</div> */}
                <div className="tech-icon"><i className="fab fa-node-js"></i>node.js</div>
                <div className="tech-icon"><i className="fab fa-react"></i>react</div>
                <div className="tech-icon"><i className="fab fa-docker"></i>docker</div>
                <div className="tech-icon"><SiPostgresql />postgres</div>
                <div className="tech-icon"><SiMongodb />mongodb</div>
                {/* <div className="tech-icon"><SiFlask />flask</div>
                <div className="tech-icon"><SiDjango />django</div> */}
                <div className="tech-icon"><SiJest />jest</div>
                <div className="tech-icon"><SiAdobephotoshop />photoshop</div>
            </div>
        </main>
    </>
export default Home;
