import React, { Component } from 'react'

export default class ClassComponet extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.name = this.name
    }
    render() {
        return (
            <div>
                <div>{this.state.count}
                </div >
                <button style={{ width: '200px', height: '20px' }} onClick={() => this.setState({ count: this.state.count + 1 })}>{this.name}</button>
            </div >
        )
    }
}
