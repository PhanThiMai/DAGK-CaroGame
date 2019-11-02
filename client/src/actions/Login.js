import * as types from '../constant/ActionType'

export const handleLogin = (token) => {
    return {
        type: types.HANDLE_LOGIN_MODAL,
        token
    }
}
