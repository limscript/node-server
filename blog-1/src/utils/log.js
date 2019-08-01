const fs = require('fs')
const path = require('path')

// 写日志
function writeLog(wirteStream, log) {
  wirteStream.write(log + '\n') // 关键代码
}

// 生成 write Stream
function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName)
  const writeStream = fs.createWriteStream(fullFileName, {
    flags: 'a'
  })
  return writeStream
}

// 写日志访问
const accessWriteStream = createWriteStream('access.log')
function access(log) {
  writeLog(accessWriteStream, log)
}

module.exports = {
  access
}
