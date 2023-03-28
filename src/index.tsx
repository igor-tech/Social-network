import './index.css';
import React from 'react';
import {App} from './App';
import {Provider} from 'react-redux';
import store from './redux/redux-store';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container!)
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

