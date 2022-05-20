const dotenv = require('dotenv')

dotenv.config() //可以将.env文件中的数据读取道这里

//process进程；env环境变量

module.exports = process.env //process.env是.env中的内容，相当于集合
