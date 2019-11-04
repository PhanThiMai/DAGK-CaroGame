import { combineReducers } from 'redux'
import login from './login'
import game from './game'
import profile from './profile'


const rootReducer = combineReducers({
    login,
    game,
    profile
})

export default rootReducer;