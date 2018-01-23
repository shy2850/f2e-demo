const begin = Date.now()

const runtime = function (): RunningTime {
    return { time: Date.now() - begin }
}
export default runtime