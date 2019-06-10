const http = require('http')
const querystring = require('querystring')

// GET
// const server = http.createServer((req, res) => {
//   const method = req.method
//   console.log('method: ', method);
//   const url = req.url
//   console.log('url: ', url);
//   req.query = querystring.parse(url.split('?')[1])
//   console.log('query: ', req.query);
//   res.end(
//     JSON.stringify(req.query)
//   )
// })

// POST
const server = http.createServer((req, res) => {
  const method = req.method
  console.log('method: ', method);
  if (method === 'POST') {
    // req 数据格式
    console.log('content-type:', req.headers['content-type']);
    // 接收数据
    let postDate = ''
    req.on('data', chunk => {
      postDate += chunk.toString()
    })
    req.on('end', () => {
      console.log('postDate', postDate);

      res.end('hello post')
    })
  }
})
server.listen(3000)
console.log('3000 is listening');
