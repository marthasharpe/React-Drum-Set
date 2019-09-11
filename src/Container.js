import React from 'react';
import Display from './Display';
import Keys from './Keys';
import keyData from './keyData';

let data = keyData;

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    background: "url(drum-set.jpg)",
    backgroundSize: "cover"
}

const keyContainer = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr"
}

class Container extends React.Component {
    state = {
        display: "Play the Drums!",
      }
    handleDisplay = (display) => {
        this.setState({
            display,
        })
    }
    render() {
        return (
            <div id="drum-machine" style={containerStyle}>
                <Display display={this.state.display}/>
                <div className="key-container" style={keyContainer}>
                    {data.map(key => (
                        <Keys
                            key={key.id}
                            id={key.id}
                            letter={key.letter}
                            src={key.src}
                            handleDisplay={this.handleDisplay}
                        />
                    ))}
                </div>
            </div>
    
        )
    }
}

export default Container;