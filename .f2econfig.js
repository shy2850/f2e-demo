const { argv } = process
const build = argv[argv.length - 1] === 'build'
const middle = require('./dist').default

const getModuleId = pathname => pathname.replace('src/', '')
module.exports = {
    livereload: !build,
    build,
    gzip: true,
    buildFilter: p => !p || /^(css|src|index\.html)\/?/.test(p),
    getModuleId,
    middlewares: [
        {
            middleware: 'template',
            test: /(index\.html|require\.js)$/
        },
        {
            middleware: 'typescript',
            getModuleId
        },
        middle
    ],
    bundles: [
        {
            test: /src\/(?!require).*\.[jt]sx?$/,
            dist: 'src/index.js'
        }
    ],
    output: require('path').join(__dirname, './output')
}
