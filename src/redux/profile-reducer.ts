

type AddPostActionType = {
    type: 'ADD-POST'

}
type UpdateNewText = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type ActionsTypes = AddPostActionType | UpdateNewText

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

type PostsType = {
    id: number,
    description: string,
    likesCount: number
}

export type ProfileReducerInitialStateType = {
    posts: Array<PostsType>,
    newPostText: string
}

const profileReducer = (state: ProfileReducerInitialStateType = initialState , action: ActionsTypes): ProfileReducerInitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, description: state.newPostText, likesCount: 0}],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
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