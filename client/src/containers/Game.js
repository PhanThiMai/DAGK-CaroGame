import { connect } from 'react-redux'
import * as actions from '../actions/GameAction'
import { handleLogout } from '../actions/Login'
import Game from '../components/Home/Game'


const mapStateToProps = state => ({
    game: state.game
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleClickSquare: (i, checkAround) => {
            dispatch(actions.handleClickSquare(i, checkAround))
        },
        jumpTo: step => {
            dispatch(actions.jumpTo(step))
        },
        restart: () => {
            dispatch(actions.restart())
        },
        logout: () => {
            dispatch(handleLogout())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Game);

