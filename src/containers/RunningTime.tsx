import * as React from 'react'
import { connect } from '../store'

const RunningTime = ({ time, className }) => <i className={className}>服务器运行时长: {time}</i>

export default connect((getState) => {
    const state = getState()
    return {
        time: state.getIn(['runningTime'])
    }
})(RunningTime)
