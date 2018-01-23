import { dispatch } from '../store'
import { index, server } from './api'
import { toTime } from '../utils/Time'

export const initHello = () => index.data().then(data => dispatch(state => state.merge(data)))

server.runningtime().then((data: RunningTime) => {
    dispatch(state => state.setIn(['runningTime'], toTime(data.time)))
})