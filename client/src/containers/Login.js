import { connect } from 'react-redux'
import * as actions from '../actions/Login'
import Login from '../components/Login/Login'


const mapStateToProps = state => ({
    login: state.login
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: () => {
            dispatch(actions.handleLogin())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);

