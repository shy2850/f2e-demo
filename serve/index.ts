import {
    Route,
    out
} from 'f2e-serve'

const {
    JsonOut,
    ServerSent
} = out

const route = new Route()
route.on('index.html', JsonOut(() => ({a: 1, b: 2})))

export default conf => {
    return {
        onRoute (...arg) {
            return route.execute.apply(route, arg)
        }
    }
}