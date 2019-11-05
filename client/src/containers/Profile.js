import { connect } from 'react-redux'
import * as actions from '../actions/ProfileAction'
import Profile from '../components/Profile/Profile'
import { handleLogout } from '../actions/Login'


const mapStateToProps = state => ({
    profile: state.profile
})

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(handleLogout())
        },
        changeUsername: () => {
            dispatch(actions.changeUsername())
        },
        storeAvatarURL: (url) => {
            dispatch(actions.storeAvatarURL(url))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);

