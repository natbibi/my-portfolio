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
                        <p>This is my personal email if you have questions or job opportunities.</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <div className="icon">
                            <i className="fa fa-twitter-square"></i>
                        </div>
                    </div>
                </div>

                <div className="face face2">
                    <div className="content">
                        <h3>
                            <a href="https://twitter.com/" target="_blank">@</a>
                        </h3>
                        <p>This is where I follow my favourite topics and network with different social groups.</p>
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
                        <p>This is where I share code and work on projects.</p>
                    </div>
                </div>
            </div>

      </main>


    )
}

export default ContactMe
