import {Dispatch} from 'redux';
import {authAPI, RequestLoginType} from '../api/api';
import {AppThunk} from './redux-store';
import {setInitializedAC} from './app-reducer';

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
                isAuth: action.data.isAuth,
                email: action.data.email,
                login: action.data.login,
                id: action.data.userId


            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})


export const getAuthMeTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.me()
        if (res.resultCode === 0) {
            let {id, email, login} = res.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    } catch (err) {
        throw new Error(err as string)
    } finally {
        dispatch(setInitializedAC(true))
    }

}
export const loginTC = (data: RequestLoginType): AppThunk =>  async (dispatch) => {
    try {
        const result = await authAPI.login(data)
        if (result.resultCode === 0) {
            await dispatch(getAuthMeTC())
        } else {
            return result.data
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