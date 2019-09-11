import React from 'react';

const Keys = (props) => {
    return (
        <div
        className="drum-pad"
        id={props.id}
        key={props.name}
        onClick={props.playClip}>
            <audio
            src={props.file}
            className="clip"
            id={props.name}/>
        {props.name}
        </div>
    );
}

export default Keys;