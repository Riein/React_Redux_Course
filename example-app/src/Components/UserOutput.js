import React from 'react';

const UserOutput = (props) => {
    return (
        <div className="App">
        <p id="paragraph1">Hello {props.value} and welcome to the most awesome basic application ever!</p>
        <p id="paragraph2">{props.text2}{props.children}</p>
        </div>
    );
}


export default UserOutput;