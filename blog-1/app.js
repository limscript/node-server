const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

// 用于处理 post data
const getPostData = (req) => {
  const promise = new Promise((resove, reject) => {
    if (req.method !== 'POST') {
      resove({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      resove({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += String(chunk)
    })
    req.on('end', () => {
      if (!postData) {
        resove({})
        return
      }
      resove(JSON.parse(postData))
    })

  })
  return promise
}

const serverHandle = (req, res) => {
  //设置返回格式
  res.setHeader('Content-type', 'application/json')

  // 获取path
  const url = req.url
  req.path = url.split('?')[0]

  // 解析query
  req.query = querystring.parse(url.split('?')[1])

  // 处理postData
  getPostData(req).then(postData => {
    req.body = postData
    // 处理blog路由
    const blogResult = handleBlogRouter(req, res)
    if (blogResult) {
      blogResult.then(blogData => {
        res.end(JSON.stringify(blogData))
      })
      return
    }

    // 处理user路由
    const userResult = handleUserRouter(req, res)
    if (userResult) {
      userResult.then(userData => {
        res.end(JSON.stringify(userData))
      })
      return
    }

    // 404
    res.writeHead(404, { 'Content-type': 'text/plain' })
    res.write('404 Not Found\n')
    res.end()
  })
}

module.exports = serverHandle
