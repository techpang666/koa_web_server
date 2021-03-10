// 创建服务器实例
const Koa = require('koa')
const serve = require('koa-static')
const app = new Koa()

// 利用静态插件, 将 Public 下面的文件提供访问服务
app.use(serve(__dirname + '/public'))

// 开启服务器即可
app.listen(3333, () => {
	console.log('服务器已经正常开启, 访问 http://127.0.0.1:3333')
})
