import React from 'react';
import './App.css';
import Trex from './components/Trex/Trex'
import Weather from './components/Weather/Weather'
import profileimage from './images/profileimage.png';

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
              <span className="name-div">JULIE HAWN</span>
              <div className="title-div">
                <span className="title">Web Developer</span>
              </div>
              <div className="skills-div">
                <span className="skills-text">JavaScript Node.js React/Redux MongoDB HTML CSS BootStrap</span>
              </div>
              <div>
                <span>juliechawn@gmail.com</span>
              </div>
              <div className="contact-buttons">
                <button className="w3-padding-large w3-margin-top w3-margin-bottom" id="button">Download Resume</button>
              </div>
            </div>
          </div>
        </div>

        <div id="work">
          <div id="work-div">
            <div id="work-picture">
              <Trex />
            </div>
            <div id="work-blog">
            <div className="name-title-div">
              <span className="work-title">THESAURUS-REX</span>
              <div className="title-div">
                <span className="work-subtitle">A Friendly Dinosaur with a Big Vocabulary</span>
              </div>
              <div className="skills-div">
                <span className="work-desc">Built with the React</span>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div id="work">
          <div id="work-div">
            <div id="work-picture">
            <div id="weather-app">
              <Weather />
              </div>
            </div>
            <div id="work-blog">
            <div className="name-title-div">
              <span className="work-title">Weather App</span>
              <div className="title-div">
                <span className="work-subtitle">A Friendly Dinosaur with a Big Vocabulary</span>
              </div>
              <div className="skills-div">
                <span className="work-desc">Built with the React</span>
              </div>
            </div>
            </div>
          </div>
        </div>




      </div>
    );
  }
}

export default App;
