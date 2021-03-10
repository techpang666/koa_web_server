// 创建服务器实例
const Koa = require('koa')
const app = new Koa()

// 加载koa的静态插件
const serve = require('koa-static')
// 利用静态插件 渲染public目录 提供页面服务
app.use(serve(__dirname + '/public'))

// 开启服务器
app.listen(3333, () => {
	console.log('服务器已启动')
})
