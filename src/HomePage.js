import React, { Component } from 'react';
import './App.css';


class HomePage extends Component {
  constructor(props){
    super(props)
      this.state = {

      }
  }

  render() {
    return (
      <div className="flex-title-container">
        <div className="title-fade-in">
          Hi,
        </div>
        <div className="title-fade-in-2">
          My name is Matt
        </div>
        <div className="title-fade-in-3">
        Thanks for visiting my website
        </div>

      </div>
    );
  }
}

export default HomePage;
