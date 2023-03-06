import {Dispatch} from 'redux';
import {AuthMeApi} from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

type SetUserDataActionType = {
    type: 'SET_USER_DATA'
    data: {
        userId: number,
        email: string,
        login: string
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
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string): SetUserDataActionType => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
})



export const getAuthMe = () => (dispatch: Dispatch) => {
    AuthMeApi.AuthMe().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login))
        }
    });

}


export default authReducer;