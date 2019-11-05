import * as types from '../constant/ActionType'



export const changeUsername = () => {
    return {
        type: types.CHANGE_USERNAME
    }
}

export const changePassword = () => {
    return {
        type: types.CHANGE_PASSWORD
    }
}

export const changeAvatar = () => {
    return {
        type: types.CHANGE_AVARTAR
    }
}

export const storeAvatarURL = url => {
    return {
        type: types.STORE_AVARTAR_URL,
        url
    }
}


