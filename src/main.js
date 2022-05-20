//服务端
const Koa = require('koa')

//node


//第三方



//自己编写
const {APP_PORT} = require('./config/config.default')






const app = new Koa()

//中间件
//ctx 记录app的所有上下文
app.use((ctx,next) => {
  //暴露在客户端
  ctx.body = 'hello koa api'
})


app.listen(APP_PORT,()=>{
  console.log(`server is running on http://localhost:${APP_PORT}`)
})





