import { Route, out } from 'f2e-serve'
import runningtime from './server/runtime'
const { JsonOut, ServerSent } = out
const route = new Route()

route.on('index.data', JsonOut(() => ({
    title: 'Hello',
    name: 'world'
})))

route.on('server.runningtime', ServerSent(runningtime))

route.on(/^[^\.]*$/, () => 'index.html')

export default conf => {
    return {
        onRoute (...arg) {
            return route.execute.apply(route, arg)
        }
    }
}