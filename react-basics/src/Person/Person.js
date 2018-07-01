import React, { Component } from 'react';
import '../App.css';
import './Person.css';
import Radium from 'radium';


class Person extends Component {
    constructor(props) {
        super();
    }

  render() {

    const style = {
      '@media (min-width: 500px)': {
          width: '450px'
      }
    }
    return (
      <div className="Person" style={style}>
        <h1>Person Name</h1>
        <p onClick={this.props.click}>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Radium(Person);
