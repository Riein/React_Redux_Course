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
        <p onClick={this.props.click}>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} />
      </div>
    );
  }
}

export default Person;
