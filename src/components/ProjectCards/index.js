import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'


const ProjectCards = ({projectData}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* <Carousel.Item>
          <img
            className="d-block w-50 project-container"
            src="https://www.online-image-editor.com/styles/2019/images/power_girl.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item>
          <img
            className="d-block w-75 project-container"
            src="https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2015/04/avengers_age_of_ultron_2015_movie-wide.jpg?itok=AfpdPfYV"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-50 project-container"
            src="https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2015/04/avengers_age_of_ultron_2015_movie-wide.jpg?itok=AfpdPfYV"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    );
}
  
//     return (
//         <div className="project-container">
//         <h3>{projectData.name}</h3>
//         <h4>{projectData.github}</h4>
//         </div>
//     )
// }

export default ProjectCards
