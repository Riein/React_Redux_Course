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

  render() {
    return (
      <div className="App">
        <h1>Ready!</h1>
        <UserInput />
        <UserOutput  value={this.state.username} />
      </div>
    );
  }
}

export default App;
