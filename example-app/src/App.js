import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {

  constructor() {
    super();
    this.state = {
      username: "SnailRacer"
    }
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Ready!</h1>
        <UserInput changed={this.usernameChangeHandler}/>
        <UserOutput value={this.state.username}>All of the sudden there's text</UserOutput>
        <UserOutput value={this.state.username} text2="Some very different text!"/>
      </div>
    );
  }
}

export default App;
