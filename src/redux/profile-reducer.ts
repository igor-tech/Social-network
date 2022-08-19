import {PostPropsType} from '../App';
import {ActionsTypes, AddPostActionType, UpdateNewText} from './store';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state: any, action: ActionsTypes) => {
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