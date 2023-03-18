import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5ac2a7b2-aadc-4e75-a12b-b46cdeb2e186'
    }
});


export const usersAPI = {
    getUsers(pageNumber: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(data: RequestLoginType) {
        return instance.post('auth/login', {...data})
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(id: string) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: string) {
        return instance.get('profile/status/' + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status: string) {
        return instance.put('profile/status/', {status: status})

    }
}

export type RequestLoginType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}