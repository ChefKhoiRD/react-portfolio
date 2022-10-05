// Imports
import React from 'react';
import selfie from './homeAssets/selfie1.png';
import homeBackground from './homeAssets/homebackground.png';
import myResume from './homeAssets/khoiresume.docx.pdf'
import './Home.css';

// Home page
const Home = () => {
    // Download resume on click
    const onButtonClick = () => {
        // Get PDF file
        fetch(myResume).then(res => {
            res.blob().then(blob => {
                // Create object of PDF file
                const fileURL = window.URL.createObjectURL(blob);

                // Set values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = myResume;
                alink.click();
            })
        })
    }

    return (
        <section className = 'homepage'>
                {/* Left side home page content */}
                <div className = 'home-content'>
                    <div className = 'images'>
                        <img className = 'home-selfie' src = {selfie} alt = 'me'></img>
                        <img  className = 'home-background' src = {homeBackground} alt = 'background'></img>
                    </div>
                    
                {/* Right side home page content */}   
                    <div className = 'home-introduction'>
                        <h1 className = 'hello'>
                            Hello!
                        </h1>
                        <h3 className = 'my-name'> 
                            My name is Khoi Vu
                        </h3>
                        <h4 className = 'description'>
                            Welcome to my portfolio
                        </h4>
                    </div>

                    {/* Resume section */}
                    <div className = 'home-resume'>
                        {/* Button */}
                        <button className = 'download-resume-button'>
                            <h2 className = 'download-text' onClick = {onButtonClick}> Download Resume </h2>
                        </button>
                    </div>
                </div>
        </section>
    )
}

// Export
export default Home;