import React from 'react';

import './CharComponent.css';

const CharComponent = (props) => {

    return (
        <div onClick={props.click} className="CharClass">
            {props.character}
        </div>
    );
};

export default CharComponent;