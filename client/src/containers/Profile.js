import { connect } from 'react-redux'
import * as actions from '../actions/GameAction'
import Profile from '../components/Profile/Profile'


const mapStateToProps = state => ({
    profile: state.profile
})

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(actions.logout())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);

