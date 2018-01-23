
const F = (...arg) => fetch.apply(null, arg).then(res => res.json())
const ES = (url) => {
    let fns = []
    let n = {then: fn => (fns.push(fn), n)}
    new EventSource(url).onmessage = ({ data }) => {
        let res = JSON.parse(data)
        fns.map(fn => fn(res))
    }
    return n
}

export const index = {
    data: () => F('/index.data')
}

export const server = {
    runningtime: () => ES('/server.runningtime')
}