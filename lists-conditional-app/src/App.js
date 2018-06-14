import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    value: "Hello World"
  };

  changeTextHandler = (event) => {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.changeTextHandler} value={this.state.value} />
      </div>
    );
  }
}

export default App;
