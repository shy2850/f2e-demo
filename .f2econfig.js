const { argv } = process
const build = argv[argv.length - 1] === 'build'
const middle = require('./dist').default
module.exports = {
    livereload: !build,
    build,
    gzip: true,
    useLess: true,
    buildFilter: p => !p || /^(css|src|index\.html)\/?/.test(p),
    middlewares: [
        {
            middleware: 'template',
            test: /index\.html?/
        },
        {
            middleware: 'typescript'
        },
        middle
    ],
    output: require('path').join(__dirname, '../f2e-output')
}
