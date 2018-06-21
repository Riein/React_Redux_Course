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

  deleteCharacterHandler = (charIndex) => {
    console.log(charIndex);
  }

  render() {

    var letters = this.state.value.split("");

    var charList = (
      <div>
        {letters.map((ch, index) => {
          return <CharComponent 
          click={() => this.deleteCharacterHandler(index)}
          character={ch} />
        })}
      </div>
    );

    return (
      <div className="App">
        <input onChange={this.changeTextHandler} value={this.state.value} />
        <ValidationComponent textLength={this.state.textLength} />
        {charList}
      </div>
    );
  }
}

export default App;
