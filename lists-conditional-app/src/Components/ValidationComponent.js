import React from 'react';

const ValidationComponent = (props) => {
    let text = "";

    if (props.textLength < 5) {
        text = "Text too short";
    } else {
        text = "Text long enough";
    }

    return (
        <div>
            {text}
        </div>
    );
};

export default ValidationComponent;