import React from 'react'
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import {create} from 'react-test-renderer';


describe('profile status', () => {
    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatusWithHooks status={'Hello world'} updateStatus={() => {}}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    })
    test('after creation <input> shouldn"t be displayed', () => {
        const component = create(<ProfileStatusWithHooks status={'Hello world'} updateStatus={() => {}}/>)
        const root = component.root
        expect(() => {
            root.findByType('input')
        }).toThrow()
    })
    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatusWithHooks status={'Hello world'} updateStatus={() => {}}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('Hello world')
    })

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatusWithHooks status={'Hello world'} updateStatus={() => {}}/>)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('Hello world')
    })
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatusWithHooks status={'Hello world'} updateStatus={mockCallback}/>)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        const input = root.findByType('input')
        input.props.onBlur()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})