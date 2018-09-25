import React from 'react';
import './App.css';
import Trex from './components/Trex/Trex'
import Weather from './components/Weather/Weather'
import profileimage from './images/profileimage.png';
import resume from './images/resume.png'
import email from './images/email.png'
import linkedin from './images/linkedin.png'
import github from './images/github.png'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div id="about" className="background-image">
          <div id="image-title-div">
            <div className="about-picture">
              <img className="julie" src={profileimage} alt="julie" />
            </div>
            <div className="name-title-div">
              <span className="name-div">Julie Cappa Hawn</span>
              <div className="title-div">
                <span className="title">Web Developer</span>
              </div>
              <div className="skills-div">
                <span className="skills-text">JavaScript • Node.js • React/Redux • React Native • MongoDB • HTML • CSS • BootStrap</span>
              </div>
              <div className="contact-buttons">
                <a href="mailto:juliechawn@gmail.com?Subject=Hello%20"><img className="icon" src={email} rel="noopener noreferrer" alt="email" /></a>
                <a href="https://www.linkedin.com/in/julie-cappa-hawn-07609435/" target="_blank" rel="noopener noreferrer"><img className="icon" src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/juliechawn" target="_blank" rel="noopener noreferrer"><img className="icon" src={github} alt="github" /></a>
                <a href="/files/JulieCHawnResume.pdf" download><img className="icon" src={resume} rel="noopener noreferrer" alt="resume" /></a>
              </div>
            </div>
          </div>
        </div>

        <div id="work">
          <div id="work-div-1">
          <div id="work-overlay">
            <div>
              <Trex />
            </div>
            <div id="work-blog">
              <div className="name-title-div">
                <span className="work-title">THESAURUS-REX</span>
                <div className="work-subtitle-div">
                  <span className="work-subtitle">A Friendly Dinosaur with a Big Vocabulary</span>
                </div>
                <div className="work-desc-div">
                  <span className="work-desc">JavaScript • React • Node.js • CSS</span>
                </div>
                {/* <div className="work-desc-div">
                  <span className="work-desc-text">Thesaurus-Rex</span>
                </div> */}
              </div>
            </div>
            </div>
          </div>
        </div>

        <div id="work">
          <div id="work-div-2">
          <div id="work-overlay">
              <div id="weather-app">
                <Weather />
            </div>
            <div id="work-blog">
              <div className="name-title-div">
                <span className="work-title">WEATHER APP</span>
                <div className="work-subtitle-div">
                  <span className="work-subtitle">Check the Weather Around the Globe</span>
                </div>
                <div className="work-desc-div">
                  <span className="work-desc">JavaScript • React/Redux • Node.js • CSS • BootStrap</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div id="footer">
          <div id="footer-div">
          <div id="image-title">
            {/* <span>Julie Hawn</span> */}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
