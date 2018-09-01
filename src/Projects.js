import React, { Component } from 'react';
import './App.css';


class Projects extends Component {
  constructor(props){
    super(props)
      this.state = {
        currentProject: ""
      }
  }

  render() {
    return (
      <div className="flex-title-container">
        <div className="projects-fade-in">
          Projects
        </div>

        <div className="projects-fade-in-2">
          Placeholder 1
        </div>

        <div className="projects-fade-in-3">
          Placeholder 2
        </div>

        <div className="projects-fade-in-4">
          Placeholder 3
        </div>

      </div>
    );
  }
}

export default Projects;
