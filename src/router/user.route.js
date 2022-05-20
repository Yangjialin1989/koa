const Router = require('koa-router')

//导入类中的register方法
const { register,login } = require('../controller/user.controller')

const router = new Router({prefix: '/users'})

//  注册接口
router.post('/register',register)

//  登录接口
router.post('/login',login)


module.exports = router
