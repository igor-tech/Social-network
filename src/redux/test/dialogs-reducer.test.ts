import {DialogsContainerType, dialogsReducer} from '../dialogs-reducer';

describe('dialogsReducer', () => {
    const initialState: DialogsContainerType = {
        messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'How are you?' },
        ],
    };
    it('should add a new message when called with SEND_MESSAGE action', () => {
        const newMessageBody = 'This is a new message';
        const action = ({type: 'dialogs/SEND_MESSAGE', newMessageBody} as const);
        const newState = dialogsReducer(initialState, action);
        expect(newState.messages.length).toEqual(3);
        expect(newState.messages[2].message).toEqual(newMessageBody);
    });
});