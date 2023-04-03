import {profileAPI, ResultCodeEnum} from '../api/api';
import {AppThunk} from './redux-store';
import {InputsProfileData} from '../components/Profile/ProfileInfo/ProfileDataForm';

let initialState = {
    posts: [
        {id: 1, description: 'It is my first post', likesCount: 20},
        {id: 2, description: 'Hi, how are you?', likesCount: 12},
        {id: 3, description: 'Hey, i write this post', likesCount: 25},
        {id: 4, description: 'YOO, subscribers!', likesCount: 10},
    ],
    newPostText: '',
    profile: {} as ProfileUserType,
    status: ''
}

export const profileReducer = (state: ProfileReducerInitialStateType = initialState, action: ProfileActionsTypes): ProfileReducerInitialStateType => {
    switch (action.type) {
        case 'profile/ADD_POST':
            return {
                ...state,
                posts: [{id: Math.random(), description: action.newMessageBody, likesCount: 0}, ...state.posts],
                newPostText: ''
            }
        case 'profile/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'profile/SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'profile/DELETE_POST':
            return {
                ...state,
                posts: [...state.posts].filter(p => p.id !== action.postId)
            }
        case 'profile/SET_PHOTOS':
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case 'profile/SET_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

//actions creators
export const addPostAC = (newMessageBody: string) => ({type: 'profile/ADD_POST', newMessageBody} as const)
export const deletePostAC = (postId: number) => ({type: 'profile/DELETE_POST', postId} as const)
export const setUserProfileAC = (profile: ProfileUserType) => ({type: 'profile/SET_USER_PROFILE', profile} as const)
export const setStatusAC = (status: string) => ({type: 'profile/SET_STATUS', status} as const)
export const savePhotosAC = (photos: { small: string, large: string }) => ({
    type: 'profile/SET_PHOTOS',
    photos
} as const)
export const saveProfileAC = (profile: InputsProfileData) => ({type: 'profile/SET_PROFILE', profile} as const)

//thunk
export const getProfileTC = (userId: string): AppThunk => async dispatch => {
    try {
        const res = await profileAPI.getProfile(userId)
        dispatch(setUserProfileAC(res))
    } catch (err) {
        console.warn(err as string)
    }

}
export const getStatusTC = (userId: string): AppThunk => async dispatch => {
    try {
        const res = await profileAPI.getStatus(userId)
        debugger
        dispatch(setStatusAC(res))
    } catch (err) {
        console.warn(err as string)
    }
}
export const updateStatusTC = (status: string): AppThunk => async dispatch => {
    try {
        const res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === ResultCodeEnum.SUCCESS) {
            dispatch(setStatusAC(status))
        }
    } catch (err) {
        console.warn(err as string)
    }
}
export const savePhotoTC = (file: File): AppThunk => async dispatch => {
    try {
        const res = await profileAPI.uploadPhoto(file)
        if (res.resultCode === ResultCodeEnum.SUCCESS) {
            dispatch(savePhotosAC(res.data.photos))
        }
    } catch (err) {
        console.warn(err as string)
    }

}
export const saveProfileTC = (newProfile: InputsProfileData): AppThunk<Promise<string | void>> => async (dispatch, getState) => {
    let userId = getState().auth.id
    try {
        const res = await profileAPI.saveProfile(newProfile)
        if (res.data.resultCode === ResultCodeEnum.SUCCESS) {
            return await dispatch(getProfileTC(userId!.toString()))
        } else {
            return res.data.messages[0]
        }
    } catch (err) {
        console.warn(err as string)
    }
}

// types
export type ProfileActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof savePhotosAC>
    | ReturnType<typeof saveProfileAC>

export type ProfileUserType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription?: string,
    aboutMe: string,
    fullName: string,
    contacts?: contactsType,
    photos: PhotosType

}
type contactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileReducerInitialStateType = {
    posts: Array<PostsType>,
    newPostText: string,
    profile: ProfileUserType
    status: string
}
type PostsType = {
    id: number,
    description: string,
    likesCount: number
}
