import * as types from '../constant/ActionType'

const token = localStorage.getItem("token");

let initialState = {
    isLogin: (token !== null) ? true : false
}

let login = (state = initialState, action) => {

    switch (action.type) {
        case types.HANDLE_LOGIN:
            return {
                ...state,
                isLogin: true
            }
        case types.HANDLE_LOG_OUT:
            localStorage.removeItem("token");
            localStorage.removeItem("username")
            return {
                ...state,
                isLogin: false
            }
        default:
            return state
    }
}

export default login;

