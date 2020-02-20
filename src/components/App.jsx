import React, { Component } from 'react';

const divPadding = {
    margin: '2% auto',
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'this is some text from state',
            placeholder: 'placeholder',
        }
        this.greeting = this.props.greeting;
    }
    handleInputChange = (val) => {
        this.setState({ input: val });
    }
    render() {
        return (
            <React.Fragment>
                <h1>
                    {this.greeting}
                </h1>
                <h2>
                    {this.state.text}
                </h2>
                <div><input
                    placeholder={this.state.placeholder}
                    value={this.state.input}
                    onChange={(e) => this.handleInputChange(e.target.value)}
                ></input></div>
                <div style={divPadding}><button>toggle hasLoaded</button></div>
            </React.Fragment>
        )
    }
}

export default App;