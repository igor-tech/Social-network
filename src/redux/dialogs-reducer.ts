import {DialogPropsType, MessagePropsType} from '../App';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

type SendMessageAC = {
    type: 'SEND_MESSAGE'
}
type UpdateNewMessageBody = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}

type ActionsTypes = UpdateNewMessageBody | SendMessageAC


let initialState: InitialStateType = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yoo!'},
        {id: 4, message: 'Yoo!'},
        {id: 5, message: 'Yoo!'},
        {id: 6, message: 'Yoo!'},
        {id: 7, message: 'Yoo!'},
    ],
    dialogs: [
        {id: 1, name: 'Igor', link: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
        {
            id: 2,
            name: 'Arsen',
            link: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
        },
        {id: 3, name: 'Elisey', link: 'https://i.yapx.ru/Ra8I0.jpg'},
        {
            id: 4,
            name: 'Roma',
            link: 'https://vjoy.cc/wp-content/uploads/2020/10/foto-na-avu-dlya-parnej-prikolnye-krasivye-klassnye-foto-i-kartinki-11.jpg'
        },
        {id: 5, name: 'Ivan', link: 'https://vjoy.cc/wp-content/uploads/2020/10/1551596754_23.jpg'},
        {id: 6, name: 'David', link: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg'},
        {id: 7, name: 'Alex', link: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
    ],
    newMessageBody: ''
}

export type InitialStateType = {
    messages: Array<MessagePropsType>
    dialogs: Array<DialogPropsType>
    newMessageBody: string
}

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 8, message: body}]
            }
        default:
            return state;
    }
    return state;
}

export const sendMessageActionCreator = (): SendMessageAC => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBody => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;