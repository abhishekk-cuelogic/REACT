import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'

class App extends Component {

  state={
    names:[
      "Abhi",
      "Damon"
    ]
  }

  onclickHandler=()=>{
    this.setState({
      names:[
        "Harry",
        "Abhi"
      ]
    })
    //console.log("Clicked!!!");
  }

  changeHandler=(event)=>{
    this.setState({
      names:[
        event.target.value,
        event.target.value
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <UserInput 
        change={this.changeHandler}
        />
        <UserOutput name={this.state.names[0]}
          clk={this.onclickHandler}
          value={this.state.names[0]}
        />
        <UserOutput name={this.state.names[1]}
        value={this.state.names[1]}/>
      </div>
    );
  }
}

export default App;
