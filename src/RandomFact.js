import React, { Component } from 'react';
import './App.css';


class RandomFact extends Component {
  constructor(props){
    super(props)
      this.state = {
        factText: ""
      }
  }

  setInterval(function(){
    console.log('CHANGE');
  },1000)

  render() {
    return (
      <div>
        {this.state.factText}
      </div>
    );
  }
}

export default RandomFact;
