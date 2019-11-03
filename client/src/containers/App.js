import { connect } from 'react-redux'
import App from '../App'


const mapStateToProps = state => ({
    store: state.game
})


export default connect(mapStateToProps, null)(App);

