import {Dispatch} from 'redux';
import {authAPI, RequestLoginType} from '../api/api';
import {AppThunk} from './redux-store';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

type SetUserDataActionType = {
    type: 'SET_USER_DATA'
    data: {
        userId: number | null,
        email: string | null,
        login: string | null
        isAuth: boolean
    }
}


type ActionsTypes = SetUserDataActionType


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export type AuthReducerInitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null
    isAuth: boolean
}


const authReducer = (state: AuthReducerInitialStateType = initialState, action: ActionsTypes): AuthReducerInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.data.isAuth
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})


export const getAuthMe = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login, true))
        }})
}
export const loginTC = (data: RequestLoginType): AppThunk =>  async (dispatch) => {
    try {
        const result = await authAPI.login(data)
        if (result.resultCode === 0) {
            dispatch(getAuthMe())
        } else {
            return result
        }
    } catch (err) {

    }

}
export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    });
}


export default authReducer;