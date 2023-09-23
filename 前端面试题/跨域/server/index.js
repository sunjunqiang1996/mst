const Koa = require('koa');
const Router = require('koa-router')
const router = new Router
const app = new Koa

router.get('/api/getname', ctx => {
  // 请求name数据
  const name = 'wwwwwww'
  const func = ctx.query.func
  // getName(name)
  ctx.body = `
    ${func}('${name}')
  `
})

app.use(router.routes()).use(router.allowedMethods())
const port = 8889
app.listen(port, () => {
  console.log(`服务启动成功， 端口号是${port}`)
})