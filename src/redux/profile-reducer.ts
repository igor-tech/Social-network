import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

type AddPostActionType = {
    type: 'ADD-POST',
    newMessageBody: string
}

type SetUsersProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: any
}
type SetStatusActionType = {
    type: 'SET_STATUS'
    status: string
}

type ActionsTypes = AddPostActionType |  SetUsersProfileActionType | SetStatusActionType

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
    },
    status: ''
}

export type ProfileReducerInitialStateType = {
    posts: Array<PostsType>,
    newPostText: string,
    profile: ProfileUserType,
    status: string
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
                posts: [{id: Math.random(), description: action.newMessageBody, likesCount: 0}, ...state.posts],
                newPostText: ''
            }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }

        }
        default:
            return state
    }

}

export const addPostActionCreator = (newMessageBody: string): AddPostActionType => ({type: ADD_POST, newMessageBody})

export const setUserProfile = (profile: any): SetUsersProfileActionType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})

export const getProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    });
}

export const getStatusTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data))
    });
}
export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
        if ( response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

    });
}


export default profileReducer;