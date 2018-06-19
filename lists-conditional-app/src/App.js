import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';

class App extends Component {

  state = {
    value: "Hello World",
    textLength: 11
  };

  changeTextHandler = (event) => {
    console.log(event.target.value);
    let txt = event.target.value;
    this.setState({value: txt, textLength: txt.length});
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.changeTextHandler} value={this.state.value} />
        <ValidationComponent textLength={this.state.textLength} />
        <CharComponent character="h" />
      </div>
    );
  }
}

export default App;
