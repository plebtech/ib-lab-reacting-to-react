import React, { Component } from 'react';

// css (applied to button div via classStyle) to let input/button breathe.
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
            // input: not set initially, added via input handler.
        }
        this.greeting = this.props.greeting;
    }
    // called by eventListener on input field, updates state on change.
    handleInputChange = (val) => {
        this.setState({ input: val });
    }
    // toggled by button, binary switch for render().
    toggleHasLoaded = () => {this.setState({ hasLoaded: !this.state.hasLoaded });}
    // illustrates how built-in componentDidMount() can override initialized values (hasLoaded bool).
    componentDidMount() {this.setState({ hasLoaded: true });}
    // renders one of two fragments, depending on state bool hasLoaded (controlled by button).
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