import fs from 'fs'
import { resolve } from 'path'
import Koa from 'koa'
import session from 'koa-session'
import bodyparser from 'koa-bodyparser'
import serve from 'koa-static'
import mongoose from 'mongoose'
import routes from './routes'

// 在 mongoose 中使用 Node.js 原生 Promise
// mongoose内置Promise已不推荐使用
mongoose.Promise = global.Promise
// 连接数据库
mongoose.connect('mongodb://localhost:27017/smzdm', {
	useMongoClient: true
})

// 绑定error事件
mongoose.connection.on('error', console.error.bind(console, 'connect mongodb failed'))

/**
 * 创建了一个Koa应用
 * koa--基于Node.js平台的web开发框架
 * https://koa.bootcss.com/
 */
const app = new Koa()

// 使用koa-static中间件
// 通过koa-static中间件对static中的文件提供http静态服务
// 自定义了一个中间件读取views文件夹中的index.html文件
// 并把读取的内容返加给浏览器
// app.use(serve(resolve(__dirname, '../static')))
// app.use(async (ctx, next) => {
// 	const template = fs.readFileSync(resolve(__dirname, '../views/index.html'), 'utf-8')
// 	ctx.body = template
// })

app.keys = ['secretkeyyy']
app.use(session({
	key: 'smzdm:sess',  // cookie的名称
	maxAge: 86400000,   // session有效期，单位为毫秒
	overwrite: true,    // 是否覆盖已存在的同名session, 为true则覆盖
	httpOnly: true,     // 是否只通过http获取
	signed: true,       // 是否创建签名
	rolling: false,     // 若为true会强制在每次请求中都为session设置标识符cookie, session有效期也会重置
}, app))
app.use(bodyparser())   // 使用 bodyparser

app.use(serve(resolve(__dirname, '../static')))
routes(app)

app.listen(8989, () => console.log('Server is running at http://localhost:8989'))