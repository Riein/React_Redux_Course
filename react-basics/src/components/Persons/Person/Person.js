import React, { Component } from 'react';
import classes from './Person.css';



class Person extends Component {

    componentWillMount() {
      console.log('[Person.js] Inside componentWillMount');
    }
  
    componentDidMount() {
      console.log('[Person.js] Inside componentDidMount');
    }

  render() {

    return (
      <div className={classes.Person} >
        <h1>Person Name</h1>
        <p onClick={this.props.click}>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
