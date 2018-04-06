import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        {name: "Jake"}, 
        {name: "Denny"},
        {name: "Wendys"}
      ]
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>Testing Applications</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[1].name}/>
        <Person name="Den"/>
        <Person name="Who Song" >My Hobbies include kayaking</Person>
      </div>
    );
  }
}

export default App;
