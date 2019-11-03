import * as types from '../constant/ActionType'

export const handleClickSquare = (i, checkAround) => {
    return {
        type: types.HANDLE_CLICK_SQUARE,
        i, checkAround
    }
}

export const jumpTo = step => {
    return {
        type: types.JUMP_TO,
        step
    }
}

export const restart = () => {
    return {
        type: types.RESTART
    }
}

export const logout = () => {
    return {
        type: types.LOG_OUT
    }
}
