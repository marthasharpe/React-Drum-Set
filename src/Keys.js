import React from 'react';
import './Keys.css'

class Keys extends React.Component {
    
    componentDidMount() {
        this.audioContext = new AudioContext();
        this.audioContext.resume();
        document.addEventListener('keydown', this.handleKeydown);
        const drumPads = document.querySelectorAll('.drum-pad');
        drumPads.forEach(pad => pad.addEventListener('transitionend', this.removeTransition))
    }

    componentWillUnmount() {
        this.audioContext.close();
        document.removeEventListener('keydown', this.handleKeydown);
    }

    removeTransition = (e) => {
        if(e.propertyName !== 'transform') return;
        this.key.classList.remove('playing');
    }
    
    handleKeydown = (e) => {
        if(e.keyCode === this.props.letter.charCodeAt()) {
            this.audio.play();
            this.audio.currentTime = 0;
            this.props.handleDisplay(this.props.id);
            this.key.classList.add('playing');
        }
    }

    handleClick = () => {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
        this.key.classList.add('playing');
    }
    
    render(){
        return (
            <div
                className="drum-pad"
                ref={ref => this.key = ref}
                id={this.props.id}
                onClick={this.handleClick}
                >
                <audio
                    ref={ref => this.audio = ref}
                    className="clip"
                    id={this.props.letter}
                    src={this.props.src}
                    />
                <h2>{this.props.letter}</h2>
            </div>
        );
    }
}

export default Keys;