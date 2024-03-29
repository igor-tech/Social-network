import {authAPI, RequestLoginType, ResultCodeEnum, securityAPI} from '../api/api';
import {AppThunk} from './redux-store';
import {setInitializedAC} from './app-reducer';

let initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
    captcha: null as null | string
}

export const authReducer = (state: initialStateAuthReducerType = initialState, action: AuthActionsTypes): initialStateAuthReducerType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
            return {
                ...state,
                isAuth: action.isAuth,
                email: action.email,
                login: action.login,
                id: action.userId
            }
        case 'auth/GET_CAPTCHA_URL':
            return {
                ...state,
                captcha: action.captcha
            }
        default:
            return state
    }
}

//action creators
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'auth/SET_USER_DATA', userId, email, login, isAuth
} as const)
export const getCaptchaUrl = (captcha: string) => ({type: 'auth/GET_CAPTCHA_URL', captcha} as const)

//thunk
export const initializedTC = (): AppThunk => async dispatch => {
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
export const loginTC = (data: RequestLoginType): AppThunk => async dispatch => {
    try {
        const res = await authAPI.login(data)
        if (res.resultCode === ResultCodeEnum.SUCCESS) {
            await dispatch(initializedTC())
        } else if (res.resultCode === ResultCodeEnum.CAPTCHA) {
            await dispatch(getCaptchaUrlTC())
            return res.messages.length && res.messages[0]
        } else if (res.resultCode === ResultCodeEnum.ERROR) {
            return res.messages.length && res.messages[0]
        }

    } catch (err) {
        throw new Error(err as string)
    }
}
export const logoutTC = (): AppThunk => async dispatch => {
    try {
        const res = await authAPI.logout()
        if (res.resultCode === ResultCodeEnum.SUCCESS) {
            dispatch(setAuthUserData(null, null, null, false))
        }

    } catch (err) {
        throw new Error(err as string)
    }
}
export const getCaptchaUrlTC = (): AppThunk => async dispatch => {
    try {
        const res = await securityAPI.getCaptchaUrl()
        const captcha = res.url
        dispatch(getCaptchaUrl(captcha))
    } catch (err) {
        throw new Error(err as string)
    }
}

//types
export type initialStateAuthReducerType = typeof initialState
export type AuthActionsTypes =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof getCaptchaUrl>
