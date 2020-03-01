import React from 'react'
import { render } from 'react-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './reducers/rootReducer'
import App from './App'

const rootElement = document.getElementById('root');
const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
