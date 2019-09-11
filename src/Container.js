import React from 'react';
import Display from './Display';
import Keys from './Keys';

class Container extends React.Component {
    state = {
        display: "Play the Drums!",
        audio: null
      }
    playClip = () => {
        this.setState({
            display: 'boom',
            audio: null
        })
    }
    render() {
        return (
            <div id="drum-machine">
                <Display display={this.state.display}/>
                <Keys playClip={this.playClip}/>
            </div>
    
        )
    }
}

export default Container;