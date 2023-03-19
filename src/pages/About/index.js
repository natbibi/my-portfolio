import React from 'react';
import { Skills } from '../../components'
import selfie from '../../../public/images/selfie.png'

const About = () =>
    <>
        <header className="intro-container">
            <h1>👋🏼 natalie pang - full stack software engineer</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start"}}>
                <img src={selfie} alt="selfie of Natalie" className="img-selfie" />
                <p style={{ width: "50%", fontSize: "13px" }}><strong>As a Full Stack Software Engineer with two years of experience,</strong> I have gained expertise in developing user-friendly and accessible applications. Prior to this, I played a vital role in a small e-commerce business where I was responsible for organizing digital marketing, website design, and copywriting. My enthusiasm for branding and user experience reflects in my work, and I strive to create technologies that enhance automation, efficiency, and communication, positively impacting individuals' lives.   
                <br></br> <br></br>
                <strong>Apart from my professional endeavors,</strong> I am a lifelong learner and always eager to explore new interests. I spend my free time managing my investment portfolio, discovering new companies, and keeping up-to-date with the latest technology trends. Additionally, I enjoy engaging in physical activities such as bouldering, gym, yoga, and hiking. 
                <br></br> <br></br>
                <strong>I am also an avid traveler,</strong> having visited 35 countries so far, and passionate about exploring different cultures and cuisines. I aspire to continue traveling and experiencing the world, enriching my perspective and knowledge.
                </p>
            </div>
        </header>
            <Skills />

    </>
export default About;
