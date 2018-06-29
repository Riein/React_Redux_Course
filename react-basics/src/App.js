import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        {id: '1', name: "Jake", age: 10}, 
        {id: '2', name: "Denny", age: 90},
        {id: '3', name: "Wendys", age: 234}
      ]
    }
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // Slice with no arguments will copy the full array and returns a new one.
    const persons = [...this.state.persons]; // ES6 equivalent of the slice approach.
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons:persons} );
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
             age={person.age} 
             key={person.id}
             changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
          
        </div>
      );
    }

    let classes =[];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.person.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Testing Applications</h1>
        <p className={classes.join(' ')}>Here we shall learn about the amazingness of React!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Show Persons</button>
        
        {persons}
        
      </div>
    );
  }
}

export default App;
