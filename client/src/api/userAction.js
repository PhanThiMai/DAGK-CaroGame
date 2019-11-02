import API from './axios.config'

export const register = (username, password) => {
    return API
        .post(`/user/register`, {
            username,
            password,
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
}


export const login = (username, password) => {
    return API
        .post(`/user/login`, {
            username,
            password,
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
}

