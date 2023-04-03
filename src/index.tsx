import './index.css';
import React from 'react';
import {App} from './App';
import {Provider} from 'react-redux';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import {store} from './redux/redux-store';


const container = document.getElementById('root');
const root = createRoot(container!)
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

