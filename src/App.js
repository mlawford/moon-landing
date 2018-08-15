import React, { Component } from 'react';
import logo from './logo.svg';
import hex from './mpvl.svg';
import hexMini from './mpvl-mini.svg';
import octopus from './octopus-01.svg'
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      terms: ["Dogs","People", "Games", "Beer",]
    }
  }

  render() {
    return (
      <div className="App">

        <div className="orb">
        </div>
        <div className="orb2">
        </div>
        <div className="flex-container">
          <div className="logo-flex-container">
            <img src={hex} className="hex-logo"/>
            <img src={hexMini} className="hex-logo-orbit"/>
          </div>

          <div className="nav-flex-container">
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

          <div className="flex-title-container">
            <div className="title-fade-in">
              Hi,
            </div>
            <div className="title-fade-in-2">
              My name is Matt
            </div>
            <div className="title-fade-in-3">
            I like making things
            </div>

          </div>
          <div className="gradient-bar">
          </div>

        </div>
      </div>
    );
  }
}

export default App;
