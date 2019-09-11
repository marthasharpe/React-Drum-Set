import React from 'react';

const displayStyle = {
    border: ".5rem solid black",
    transition: "all .07s ease",
    margin: "1rem",
    width: "20rem",
    textAlign: "center",
    color: "white",
    background: "rgba(0,0,0,0.6)",
    textShadow: "0 0 .5rem black"
}

const Display = ({display}) => {
    return (
        <div id="display" style={displayStyle}>
            <h1>{display}</h1>
        </div>
    )
}

export default Display;