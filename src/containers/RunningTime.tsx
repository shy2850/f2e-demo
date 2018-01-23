import * as React from 'react'
import { connect } from '../store'

const RunningTime = ({ time, className }) => <i className={className}>{time}</i>

export default connect((getState) => {
    const state = getState()
    return {
        time: state.getIn(['runningTime'])
    }
})(RunningTime)
