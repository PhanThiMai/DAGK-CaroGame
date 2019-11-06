import API from './axios.config'

export const register = (username, password) => {
    return API
        .post(`/users/register`, {
            username,
            password,
        })
        .then(res => {
            if (res.data) {
                const { username } = res.data.data;
                const { token, type } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("username", username)

                return type;
            }
            return res
        }).catch(res => {
            console.log("TCL :  err after then")
            console.log(res)
        }
        )
}


export const login = (username, password) => {
    return API
        .post(`/users/login`, {
            username,
            password,
        })
        .then(res => {
            if (res.data) {
                const { username } = res.data.data;
                const { token, type } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("username", username)

                return type;
            }
            return res
        }).catch(res => {
            console.log(res)
        }
        )
}


export const getUser = () => {
    return API
        .get(`/users/me`)
        .then(res => {
            if (res.data) {
                return res.data.users
            }
            return false
        }).catch(error => console.log(error));
}


export const updateProfile = (user) => {
    return API
        .post(`/users/me`, {
            user,
            type: 0
        })
        .then(res => {
            return res.data.type
        }).catch(res => {
            console.log(res)
        }
        )
}

export const updatePassword = (user) => {
    return API
        .post(`/users/me`, {
            user,
            type: 1
        })
        .then(res => {
            return res.data.type
        }).catch(res => {
            console.log(res)
        }
        )
}


export const updateAvatar = (user) => {
    return API
        .post(`/users/me`, {
            user,
            type: 2
        })
        .then(res => {
            console.log(res.data.type)
            return res.data.type
        }).catch(res => {
            console.log(res)
        }
        )
}


