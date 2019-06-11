const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleUserRouter = (req, res) => {
  const method = req.method // GET POST

  // 登录
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.query
    const result = login(username, password)
    if (result) {
      return new SuccessModel(result)
    } else {
      return new ErrorModel('登录失败！')
    }
  }
}

module.exports = handleUserRouter
