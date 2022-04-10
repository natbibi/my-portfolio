import React from 'react';
import { Skills } from '../../components'

const About = () =>
    <>
        <header className="intro-container">
            <h1>👋🏼 About Me</h1>
            <p style={{ fontSize: "16px", textAlign: "justify" }}>Hello! I am a Software Engineer with 1 year experience, specialising in full stack development with front-end focus. Prior to this, I was part of a small e-commerce business organising digital marketing, website design and copywriting. I am enthusiastic about branding and user experience, and I enjoy creating user-friendly and accessible apps for all. I wish to create technologies that can increasing automation, efficiency and communication; and be part of the industry that impacts and improves every single individual's lives.
            <br></br> <br></br>
            In my free time, I focus my attention on learning and discovering new interests. I recently started self-learning piano, which I love to sing pop songs along to. I thoroughly enjoy managing my investment portfolio and discovering companies. For sports, I really like to watch and train MMA, practice yoga, and hike. I am passionate about traveling, exploring new cultures, and food. Having visited 33 countries so far, I would love to see the rest of the world!
            </p>
        </header>
        <Skills />

    </>
export default About;
