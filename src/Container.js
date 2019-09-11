import React from 'react';
import Display from './Display';
import Keys from './Keys';
import keyData from './keyData';

let data = keyData;

class Container extends React.Component {
    state = {
        display: "Play the Drums!",
        audio: null
      }
    playClip = () => {
        this.setState({
            display: "boom",
            audio: console.log("boom")
        })
    }
    render() {
        return (
            <div id="drum-machine">
                <Display display={this.state.display}/>
                {data.map(key => (
                    <Keys
                        playClip={this.playClip}
                        key={key.id}
                        name={key.name}
                        file={key.file}
                    />
                ))}
            </div>
    
        )
    }
}

export default Container;