import React, { Component } from 'react';
import '../App.css';

class Person extends Component {
    constructor(props) {
        super();
    }

  render() {
    return (
      <div>
        <h1>Person Name</h1>
        <p>Name: {this.props.name}</p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Person;
