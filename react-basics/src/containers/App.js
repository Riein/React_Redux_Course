import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';

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

    let persons = null;
    let btnClass ='';

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
        </div>
      );

      btnClass = classes.Red;
    }

    let assignedClasses =[];

    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
      <div className={classes.App}>
        <h1>Testing Applications</h1>
        <p className={assignedClasses.join(' ')}>Here we shall learn about the amazingness of React!</p>
        <button 
        className={btnClass}
        onClick={this.togglePersonsHandler}>Show Persons</button>
        
        {persons}
        
      </div>
    );
  }
}

export default App;
