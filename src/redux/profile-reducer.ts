import {PostPropsType, ProfilePageType} from '../App';
import {ActionsTypes, AddPostActionType, UpdateNewText} from './store';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, description: 'Hi, how are you?', likesCount: 12},
        {id: 2, description: 'It is my first post', likesCount: 20},
        {id: 3, description: 'Bla VALl BLA', likesCount: 25},
        {id: 4, description: 'YOO', likesCount: 10},
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState , action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostPropsType = {
                id: 5,
                description: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state

    }

    return state;
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): UpdateNewText => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export default profileReducer;