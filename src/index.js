import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './components/App.jsx';

let element = (
    'this is a string, passed as a property'
);

ReactDOM.render(
    <App greeting={element} />,
    document.getElementById('root')
);