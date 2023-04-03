import axios from 'axios';
import {ProfileUserType} from '../redux/profile-reducer';
import {UserType} from '../redux/users-reducer';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5ac2a7b2-aadc-4e75-a12b-b46cdeb2e186',
    }
});

// API
export const usersAPI = {
    getUsers(pageNumber: number = 1, pageSize: number = 10) {
        return instance.get<ResponseGetUsersType>(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unFollow(userId: number) {
        return instance.delete<GeneralResponseType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post<GeneralResponseType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}
export const authAPI = {
    me() {
        return instance.get<GeneralResponseType<AuthMeResponseType>>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(data: RequestLoginType) {
        return instance.post<GeneralResponseType<{ userId: string }>>('auth/login', data)
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete<GeneralResponseType>('auth/login')
            .then(response => {
                return response.data
            })
    },
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<{ url: string }>('security/get-captcha-url')
            .then(res => {
                return res.data
            })
    }
}
export const profileAPI = {
    getProfile(id: string) {
        return instance.get<ProfileUserType>(`profile/${id}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: string) {
        return instance.get<string>('profile/status/' + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status: string) {
        return instance.put<GeneralResponseType>('profile/status/', {status: status})

    },
    uploadPhoto(file: File) {
        let formData = new FormData()
        formData.append('image', file)

        return instance.put<GeneralResponseType<{ photos: { small: string, large: string } }>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    saveProfile(newProfile: ProfileUserType) {
        return instance.put<GeneralResponseType>('profile', newProfile)
    }
}

//types
export type GeneralResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}
export type ResponseGetUsersType = {
    items: UserType[]
    totalCount: number
    error: null | string
}
export type AuthMeResponseType = {
    id: number
    email: string
    login: string
}
export type RequestLoginType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}
export type ResponseLoginType<T = {}> = {
    data: T
    fieldsErrors: []
    messages: [string]
    resultCode: number
}


//enum
export enum ResultCodeEnum {
    SUCCESS = 0,
    ERROR = 1,
    CAPTCHA = 10
}