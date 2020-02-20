import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'this is some text from state',
            placeholder: 'placeholder',
        }
        this.greeting = this.props.greeting;
    }
    render() {
        return (
            <div>
                <h1>
                    {this.greeting}
                </h1>
                <h2>
                    {this.state.text}
                </h2>
                <input placeholder={this.state.placeholder}></input>
            </div>
        )
    }
}

export default App;