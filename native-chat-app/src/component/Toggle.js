import React from 'react';
import Message from '../model/Message';

export default class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
        const message = new Message('Heyo', this.state.isToggleOn);
        console.log(message.message + ': ' + message.hasSeenMessage);

    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
