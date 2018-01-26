const { argv } = process
const build = argv[argv.length - 1] === 'build'
const middle = require('./dist/serve').default

const getModuleId = pathname => pathname.replace('src/', '')
module.exports = {
    // dev 模式下开启网页自动刷新， 也可以修改build模式下仍然开启
    livereload: !build,
    // 是否 build 模式： true 时 开启压缩和bundles
    build,
    // 服务端开启gzip压缩
    gzip: true,
    // 仅对指定目录进行前端构建
    buildFilter: p => !p || /^(css|src|index\.html)\/?/.test(p),
    // amd模块根据文件路径设置模块ID
    getModuleId,
    // 中间件
    middlewares: [
        /**
         * lodash 模板： 支持文本中任意位置嵌入js <%=new Date%> 
         * 项目里面主要作为 requirejs urlArgs 生成，
         */
        {
            middleware: 'template',
            test: /(index\.html|require\.js)$/
        },
        /**
         * 开启 Typescript编译
         */
        {
            middleware: 'typescript',
            getModuleId
        },
        /**
         * serve端入口，根据onRoute属性处理请求
         */
        middle
    ],
    bundles: [
        {
            // 除了require.js都打包到index.js上面
            test: /src\/(?!require).*\.[jt]sx?$/,
            dist: 'src/index.js'
        }
    ],
    // npm run build 将前端代码构建到 output 路径
    output: require('path').join(__dirname, './output')
}
