import React from 'react';

import './CharComponent.css';

const CharComponent = (props) => {

    return (
        <div className="CharClass">
            {props.character}
        </div>
    );
};

export default CharComponent;