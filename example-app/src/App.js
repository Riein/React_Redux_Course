import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ready!</h1>
        <UserInput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
