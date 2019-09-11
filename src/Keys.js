import React from 'react';

const keyStyle = {
    border: ".5rem solid black",
    borderRadius: "50%",
    transition: "all .07s ease",
    padding: "1rem",
    margin: "1rem",
    height: "4rem",
    width: "4rem",
    textAlign: "center",
    color: "white",
    background: "rgba(0,0,0,0.6)",
    textShadow: "0 0 .5rem black"
}

class Keys extends React.Component {
    
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = (e) => {
        if(e.keyCode === this.props.letter.charCodeAt()) {
            this.audio.play()
            this.audio.currentTime = 0
            this.props.handleDisplay(this.props.id)
        }
    }

    handleClick = () => {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
    }
    
    render(){
        return (
            <div
                className="drum-pad"
                style={keyStyle}
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