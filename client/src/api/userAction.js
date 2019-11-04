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
            return res.data
        }).catch(error => console.log(error));
}


export const updateProfile = (user) => {
    return API
        .post(`/users/me`, {
            user
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data.username)
            return res.data
        }).catch(res => {
            console.log(res)
        }
        )
}

