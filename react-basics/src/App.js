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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); // Slice with no arguments will copy the full array and returns a new one.
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Maxi", age: 17}, 
        {name: event.target.value, age: 29},
        {name: "Peter Pan", age: 23}
      ],
      otherState: 'some other value',
      showPersons: false
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
             click={() => this.deletePersonHandler(index)}
             name={person.name}
             age={person.age} />
          })}
          
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Testing Applications</h1>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Show Persons</button>
        
        {persons}
        
      </div>
    );
  }
}

export default App;
