import React from 'react';
import Typical from 'react-typical'
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('./about')
    }

    return (
        <>
            <header className="intro-container center-align" style={{ height: "70vh" }}>
                <h1 style={{ fontSize: "70px" }}>Hi, I'm <span style={{ color: "hotpink", fontWeight: "bolder" }}>Natalie</span></h1>
                <h5 style={{ fontSize: "25px" }}> <Typical
                    steps={[
                        'full-stack software engineer 💻', 1000,
                        'earth explorer 🌍', 1000,
                        'food enthusiast 🍱', 1000,
                        'mixed martial artist 🥊', 1000,
                    ]}
                    loop={Infinity}
                    wrapper="p"
                />
                </h5>
                <button style={{ color: "rgb(131, 36, 255)", marginRight: "0" }} className="see-more" onClick={handleClick}>know more</button>
            </header>
        </>
    )

}

export default Home;