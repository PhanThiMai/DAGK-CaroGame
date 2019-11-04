import * as types from '../constant/ActionType'

const token = localStorage.getItem("usertoken");
const username = localStorage.getItem("username")

let initialState = {
    isLogin: token && true,
    username: username || ''
}

let profile = (state = initialState, action) => {

    switch (action.type) {
        case types.LOG_OUT:
            localStorage.removeItem("usertoken")
            return {
                ...state,
                isLogin: false
            }
        default:
            return state
    }
}

export default profile;

