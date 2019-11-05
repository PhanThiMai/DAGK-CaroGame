import * as types from '../constant/ActionType'

const username = localStorage.getItem("username")
const url = localStorage.getItem("avatar")

let initialState = {
    username: username || '',
    url: url ? url : 'http://placehold.it/1000'
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
                url: action.url ? action.url : state.url
            }
        default:
            return state
    }
}

export default profile;

