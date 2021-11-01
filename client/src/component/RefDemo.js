import React, { Component } from 'react'

export default class RefDemo extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    componentDidMount() {
        this.input.current.focus();
        console.log(this.input);
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.input} />
            </div>
        )
    }
}
