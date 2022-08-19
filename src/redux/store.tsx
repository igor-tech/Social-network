import {StatePropsType} from '../App';

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';


export type AddPostActionType = {
    type: 'ADD-POST'

}
export type SendMessageAC = {
    type: 'SEND_MESSAGE'

}
export type UpdateNewMessageBody = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    body: string
}
export type UpdateNewText = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewText | UpdateNewMessageBody | SendMessageAC

export type StoreType = {
    _state: StatePropsType
    _callSubscriber: (state: any) => void
    subscribe: (observer: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionsTypes) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, description: 'Hi, how are you?', likesCount: 12},
                {id: 2, description: 'It is my first post', likesCount: 20},
                {id: 3, description: 'Bla VALl BLA', likesCount: 25},
                {id: 4, description: 'YOO', likesCount: 10},
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },
        sideBarPage: {
            friends: [
                {id: 1, name: 'igor', link: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 2, name: 'Ivan', link: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg'},
                {id: 3, name: 'David', link: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sideBarPage = sidebarReducer(this._state.sideBarPage, action)
        this._callSubscriber(this._state)
    },
}

export default store;


