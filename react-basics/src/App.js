import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        {name: "Jake", age: 10}, 
        {name: "Denny", age: 90},
        {name: "Wendys", age: 234}
      ]
    }
  }

  switchHandler = () => {
    console.log("clicked!");
    this.setState({
      persons: [
        {name: "Maxi", age: 17}, 
        {name: "MegaTron", age: 19},
        {name: "Peter Pan", age: 23}
      ]
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Testing Applications</h1>
        <button onClick={this.switchHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age = {this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age = {this.state.persons[2].age}>My Hobbies include kayaking</Person>
      </div>
    );
  }
}

export default App;
