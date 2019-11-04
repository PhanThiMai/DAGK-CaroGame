import * as types from '../constant/ActionType'

const username = localStorage.getItem("username")

let initialState = {
    username: username || ''
}

let profile = (state = initialState, action) => {

    switch (action.type) {
        case types.CHANGE_USERNAME:
            return {
                ...state,
                username: localStorage.getItem("username")
            }
        default:
            return state
    }
}

export default profile;

