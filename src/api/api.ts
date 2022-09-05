import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '876667d1-cb51-4a2c-9f6e-1ef726d54f5f'
    }
});


export const usersApi = {
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


export const AuthMeApi = {
    AuthMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

export const ProfileApi = {
    Profile(id: string) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            })
    }
}
