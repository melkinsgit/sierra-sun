import React from 'react'
import { render } from 'react-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './reducers/rootReducer'
import participantList from "./reducers/participant-list";
import App from "./app/app";

const rootElement = document.getElementById('root');
const defaultState = {};
// const store = createStore(participantList, defaultState);

render(
        <App />,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
