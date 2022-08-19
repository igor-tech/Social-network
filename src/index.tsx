import './index.css';
import {store} from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={store._state}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root'));
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
