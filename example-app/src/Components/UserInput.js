import React, { Component } from 'react';

class UserInput extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.props.changed}/>
      </div>
    );
  }
}

export default UserInput;