//类
class UserController {
  //注册
  async register(ctx,next){
    ctx.body = '用户注册成功'
  }
  //登录
  async login(ctx,next){
    ctx.body = '登录成功'
  }
}

//实例化对象
module.exports = new UserController()



