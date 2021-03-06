import React, { Component } from 'react';
import logo from './logo.svg';
import hex from './mpvl.svg';
import { Route, Switch, Redirect } from 'react-router'
import HomePage from './HomePage.js';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import RandomFact from './RandomFact.js';
import hexMini from './mpvl-mini.svg';
import hexMini2 from './mpvl-mini2.svg';
import octopus from './octopus-01.svg'
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      page: ""
    }
  }

  renderSwitch(page) {
    switch(page) {
      case 'about':
    return <About/>;
      case 'projects':
    return <Projects/>;
      case 'contact':
    return <Contact/>;
      default:
    return <HomePage/>;
    }
  }

  renderAbout = () => {
    this.setState({
       page: "about"
    })
  }

  renderProjects = () => {
    console.log(this.state);
    this.setState({
       page: "projects"
    })
  }

  renderContact = () => {
    this.setState({
       page: "contact"
    })
  }


  render() {
    return (
      <div className="App">

        <div className="orb">
        </div>

        <div id="orb-bg" className="orb2">
        </div>
        <div className="flex-container">
          <div className="logo-flex-container">
            <img src={hex} className="hex-logo"/>
            <img src={hexMini} className="hex-logo-orbit"/>
          </div>

          <div className="nav-flex-container">
            <div id="about"className="about-menu" onClick={this.renderAbout}>
              about
            </div>
            <div id="projects" className="projects-menu" onClick={this.renderProjects}>
              projects
            </div>
            <div id="contact" className="contact-menu" onClick={this.renderContact}>
              contact
            </div>
          </div>
          {this.renderSwitch(this.state.page)}
        </div>
        <div className="footer">

          Are you aware that: <RandomFact/>
        </div>
      </div>
    );
  }
}

export default App;
