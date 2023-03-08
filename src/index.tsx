import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/redux-store';


const rerenderEntireTree = () => {
    ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(() => {
    rerenderEntireTree()
})
