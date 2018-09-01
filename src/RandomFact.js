import React, { Component } from 'react';
import './App.css';


class RandomFact extends Component {
  constructor(props){
    super(props)
      this.state = {
        factText: ""
      }
  }

  componentDidMount(){
    setInterval(function(){
      this.changeFactText()
    },5000)
  }

  changeFactText = () => {
    this.setState({
      factText: "NEW"
    })
  }


  render() {
    return (
      <div>
        {this.state.factText}
      </div>
    );
  }
}

export default RandomFact;
