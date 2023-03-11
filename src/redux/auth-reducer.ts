import {Dispatch} from 'redux';
import {authAPI, RequestLoginType} from '../api/api';
import {AppThunk} from './redux-store';
import {setInitializedAC} from './app-reducer';

let initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
            return {
                ...state,
                isAuth: action.isAuth,
                email: action.email,
                login: action.login,
                id: action.userId
            }
        default:
            return state
    }
}

//action creators
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'auth/SET_USER_DATA', userId, email, login, isAuth
} as const)

//thunk
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
export const loginTC = (data: RequestLoginType): AppThunk => async (dispatch) => {
    try {
        const result = await authAPI.login(data)
        if (result.resultCode === 0) {
            await dispatch(getAuthMeTC())
        } else {
            return result.data
        }
    } catch (err) {
        throw new Error(err as string)
    }
}
export const logoutTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.logout()
        if (res.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    } catch (err) {
        throw new Error(err as string)
    }
}

//types
type initialStateType = typeof initialState
type ActionsTypes =
    | ReturnType<typeof setAuthUserData>
