import * as types from '../constant/ActionType'

const username = localStorage.getItem("username")

let initialState = {
    username: username || '',
    url: 'http://placehold.it/1000'
}

let profile = (state = initialState, action) => {

    switch (action.type) {
        case types.CHANGE_USERNAME:
            return {
                ...state,
                username: localStorage.getItem("username")
            }
        case types.STORE_AVARTAR_URL:
            return {
                ...state,
                url: action.url ? action.url : "http://placehold.it/1000"
            }
        default:
            return state
    }
}

export default profile;

