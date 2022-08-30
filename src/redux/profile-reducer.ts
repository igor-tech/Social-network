const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewText = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type SetUsersProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: any
}

type ActionsTypes = AddPostActionType | UpdateNewText | SetUsersProfileActionType

type PostsType = {
    id: number,
    description: string,
    likesCount: number
}
let initialState = {
    posts: [
        {id: 1, description: 'Hi, how are you?', likesCount: 12},
        {id: 2, description: 'It is my first post', likesCount: 20},
        {id: 3, description: 'Bla VALl BLA', likesCount: 25},
        {id: 4, description: 'YOO', likesCount: 10},
    ],
    newPostText: '',
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 7,
        photos: {
            small: '',
            large: ''
        }
    }
}

export type ProfileReducerInitialStateType = {
    posts: Array<PostsType>,
    newPostText: string,
    profile: ProfileUserType
}

export type ProfileUserType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
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
export const setUserProfile = (profile: any): SetUsersProfileActionType => ({type: SET_USER_PROFILE, profile})

export default profileReducer;