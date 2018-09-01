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
        <div className="project-fade-in">
          Projects
        </div>

        <div className="project-fade-in-2">
        </div>

        <div className="project-fade-in-3">

        </div>

      </div>
    );
  }
}

export default Projects;
