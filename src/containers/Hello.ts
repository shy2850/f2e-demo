import { connect } from '../store'
import { initHello } from '../actions/Hello'
import Hello from '../components/Hello'

// react-redux unsupport
setTimeout(initHello, 3000)

const mapStateToProps = (getState) => {
    const state = getState()
    return {
        title: state.getIn(['title']),
        name: state.getIn(['name'])
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hello)
