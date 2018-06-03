import React, { Component } from 'react';

class UserOutput extends Component {
  render() {
    return (
      <div className="App">
        <p id="paragraph1">Hello {this.props.value} and welcome to the most awesome basic application ever!</p>
        <p id="paragraph2">Or is it?</p>
      </div>
    );
  }
}

export default UserOutput;