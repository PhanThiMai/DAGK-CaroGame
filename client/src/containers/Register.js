import { connect } from 'react-redux'
import * as actions from '../actions/Login'
import Register from '../components/Register/Register'


const mapStateToProps = state => ({
    login: state.login
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: (token) => {
            dispatch(actions.handleLogin(token))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);

