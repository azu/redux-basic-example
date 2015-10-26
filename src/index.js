import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';

let rootElement = document.getElementById('root');
render(
        <App />,
    rootElement
);
