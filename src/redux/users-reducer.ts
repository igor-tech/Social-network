import users from '../components/Users/Users';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';

export type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
export type UnFollowActionType = {
    type: 'UN_FOLLOW'
    userId: number
}
export type SetUsersActionType = {
    type: 'SET_USERS'
    users: Array<UserType>
}

export type UserType = {
    id: number
    photos: {small: string, large: string}
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }
}

let initialState = {
    users: [

    ]
}

type ActionsTypes = FollowActionType | UnFollowActionType | SetUsersActionType

export type UsersReducerInitialStateType = {
    users: Array<UserType>
}

const usersReducer = (state: UsersReducerInitialStateType = initialState, action: ActionsTypes): UsersReducerInitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
    return state;
}

export const followfAC = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollowfAC = (userId: number): UnFollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})


export default usersReducer;