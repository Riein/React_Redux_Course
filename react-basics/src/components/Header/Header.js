import React from 'react';
import classes from './Header.css'

const Header = ( props ) => {

    const assignedClasses =[];

    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (props.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }
    return (
        <div className={classes.Header}>
            <h1>Testing Applications</h1>
            <p className={assignedClasses.join(' ')}>Here we shall learn about the amazingness of React!</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Show Persons</button>
        </div>
    );
}

export default Header;