export const toTime = (t:number):string => {
    const M = [
        { v: 1000, u: '秒' },
        { v: 60, u: '分' },
        { v: 60, u: '时' },
        { v: 24, u: '天' }
    ]
    let result = ''
    let i = 0
    while (M[i] && t >= M[i].v) {
        t = Math.floor(t / M[i].v)
        result = (M[i + 1] ? (t % M[i + 1].v) : t) + M[i].u + result
        i++
    }
    return result
}

export const format = (d = new Date(), fmt = 'yy年MM月dd日 hh:mm:ss'):string => {
    const c = { y: 'FullYear', yy: 'FullYear', M: 'Month+1', d: 'Date', h: 'Hours', m: 'Minutes', s: 'Seconds' }
    return fmt.replace(/([yMdhms])(\1*)/g, (pp, p, _p) => {
        if (_p && c[pp]) return d[`get${c[pp]}`]()
        const [k, n] = c[p].split(/\W/)
        return ('0'.repeat(pp.length - 1) + (d[`get${k}`]() + (n | 0))).slice(-2)
    })
}