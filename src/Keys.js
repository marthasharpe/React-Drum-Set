import React from 'react';
import keyData from './keyData';

const data = keyData;

const Keys = (props) => {
    let keys = data.map(key => {
                return (
                    <div
                    className="drum-pad"
                    id={key.id}
                    key={key.name}
                    onClick={props.playClip}>
                        <audio
                        src={key.file}
                        className="clip"
                        id={key.name}/>
                    {key.name}
                    </div>
                )
            });
    return(
        <div>
            {keys}
        </div>
    )
}

export default Keys;