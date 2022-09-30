// Imports
import React from 'react';
import './About.css';

// About page
function About() {
    return (
        <section className = 'about'>
            <div className = 'page-content'>
                <div className = 'about-content'>
                    <h1 className = 'about-header'>
                        About Me
                    </h1>
                    <h3 className = 'aboutme'>
                        My name is Khoi Vu, I am 22 and based out of Salt Lake City, Utah. 
                        <br />
                        <br />
                        I am working on becoming a Fullstack Web Developer at the Trilogy Web 
                        Development Boot Camp through the University of Utah. There, I learned to work with
                        HTML5, CSS3, Javascript, jQuery, Bootstrap, SQL, MongoDB, and React.
                        <br />
                        <br />
                        My strengths lie in working on Front End Development but I am still confident in working 
                        with Back End technologies.
                    </h3>
                </div>
            </div>
        </section>
    )
}

// Export
export default About;