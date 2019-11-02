import * as types from '../constant/ActionType'

const token = localStorage.getItem("usertoken");

let initialState = {
    isLogin: token && true
}

let login = (state = initialState, action) => {

    switch (action.type) {
        case types.HANDLE_LOGIN:
            return {
                isLogin: action.token && true
            }
        default:
            return state
    }
}

export default login;

