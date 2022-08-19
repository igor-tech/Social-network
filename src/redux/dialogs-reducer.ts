import {ActionsTypes} from './store';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type SendMessageAC = {
    type: 'SEND_MESSAGE'
}
export type UpdateNewMessageBody = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}

const dialogsReducer = (state: any, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({id: 8, message: body})
            state.newMessageBody = ''
            return state
        default:
            return state
    }
    return state
}

export const sendMessageActionCreator = (): SendMessageAC => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBody => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;