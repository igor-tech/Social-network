import ReactDOM, {render, unmountComponentAtNode} from 'react-dom';
import React from 'react'
import {act} from 'react-dom/test-utils';
import {Hello} from './Test';
import {App} from './App';
import {Provider} from 'react-redux';
import store from './redux/redux-store';

let container: any = null;
beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // подчищаем после завершения
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Provider store={store}><App/></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
})
it('renders with or without a name', () => {
    act(() => {

        render(<Hello/>, container);
    });
    expect(container.textContent).toBe('Hey, stranger');
    act(() => {
        render(<Hello name="Jenny"/>, container);
    });
    expect(container.textContent).toBe('Hello, Jenny!');

    act(() => {
        render(<Hello name="Margaret"/>, container);
    });
    expect(container.textContent).toBe('Hello, Margaret!');
});


