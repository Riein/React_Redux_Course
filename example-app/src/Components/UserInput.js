import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
      <div className="App">
        <input onChange={props.changed} value={props.value}/>
      </div>
    );
}

export default UserInput;