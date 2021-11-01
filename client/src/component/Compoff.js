import React, { Component } from 'react'

export default class Compoff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        // this.onIncrementHandler = this.onIncrementHandler.bind(this);
    };

    onIncrementHandler() {
        this.setState({
            count: this.state.count + 1,
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.onIncrementHandler()}>Click to increase</button>
                {this.state.count}
            </div>
        )
    }
}
