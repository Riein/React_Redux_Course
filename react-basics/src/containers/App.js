import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Header from '../components/Header/Header';

class App extends PureComponent {
  constructor(props) {
    super(props);

    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        {id: '1', name: "Jake", age: 10}, 
        {id: '2', name: "Denny", age: 90},
        {id: '3', name: "Wendys", age: 234}
      ],
      otherState: 'some other value',
      showPersons: false
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWIllMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update App.js] inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate (nextProps, nextState) {
    console.log('[Update App.js] inside componentWillUpdate', nextProps)
  }

  componentDidUpdate () {
    console.log('[Update App.js] inside componentDidUpdate');
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

    if (this.state.showPersons) {
      persons = 
          <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;

    }

    return (
      <div className={classes.App}>
        <Header showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        clicked={this.togglePersonsHandler}/>

        {persons}
        
      </div>
    );
  }
}

export default App;
