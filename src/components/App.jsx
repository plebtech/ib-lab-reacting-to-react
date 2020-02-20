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
            hasLoaded: false,
        }
        this.greeting = this.props.greeting;
    }
    handleInputChange = (val) => {
        this.setState({ input: val });
    }
    // toggleHasLoaded() {
    //     hasLoaded = !hasLoaded;
    //     console.log(hasLoaded);
    toggleHasLoaded = () => {
        this.setState({ hasLoaded: !this.state.hasLoaded });
    }
    render() {
        if (this.state.hasLoaded) {
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
                    <div style={divPadding}><button onClick={this.toggleHasLoaded}>toggleHasLoaded</button></div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <h1>Loading..</h1>
                    <div style={divPadding}><button onClick={this.toggleHasLoaded}>toggleHasLoaded</button></div>
                </React.Fragment>
            )
        }
    }
}

export default App;