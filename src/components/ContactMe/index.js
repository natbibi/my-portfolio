import React from 'react';
import './style.css'

const ContactMe = () => {


    return (


        <main className="container">

            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <div className="icon">
                        <i className="fas fa-envelope-square"></i>
                        </div>
                    </div>
                </div>

                <div className="face face2">
                    <div className="content">
                        <h3>
                            <a href="mailto: natalie.pang@me.com" target="_blank">natalie.pang@me.com</a>
                        </h3>
                        <p>This is my personal email if you have questions, job opportunities, or just want to say hi!</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>

                <div className="face face2">
                    <div className="content">
                        <h3>
                            <a href="https://www.linkedin.com/in/natcodes/" target="_blank">/natcodes</a>
                        </h3>
                        <p>This is my linkedin profile. Connect with me or reach out to me here!</p>
                        {/* <p>This is where I follow my favourite topics and network with different social groups.</p> */}
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <div className="icon">
                            <i className="fa fa-github-square"></i>
                        </div>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <h3>
                            <a href="https://github.com/natbibi" target="_blank">@natbibi</a>
                        </h3>
                        <p>This is where I share code and work on projects. Follow my progress!</p>
                    </div>
                </div>
            </div>

      </main>


    )
}

export default ContactMe
