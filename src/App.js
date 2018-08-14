import React, { Component } from 'react';
import logo from './logo.svg';
import hex from './mpvl.svg';
import hexMini from './mpvl-mini.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="orb">
        </div>
        <div className="orb2">
        </div>
        <img src={hex} className="hex-logo"/>
        <img src={hexMini} className="hex-logo-orbit"/>

        <div className="hex-logo">
        </div>

        <div className="title-fade-in">
          matthew lawford
        </div>
        <div className="about-menu">
          about
        </div>

        <div className="projects-menu">
          projects
        </div>

        <div className="contact-menu">
          contact
        </div>
      </div>
    );
  }
}

export default App;
