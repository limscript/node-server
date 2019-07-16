const redis = require('redis')
const { REDIS_CONF } = require('../config/db')

// 创建客户端
const redisClint = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClint.on('error', err => {
  console.error(err);
})

function set(key, val) {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  redisClint.set(key, val, redisClint.print)
}

function get(key) {
  const promise = new Promise((resolve, reject) => {

    redisClint.get(key, (err, val) => {
      if (err) {
        reject(err);
        return
      }

      if (val == null) {
        resolve(null)
      }

      try {
        resolve(JSON.parse(val))
      } catch (error) {
        resolve(val)
      }
    })
  })
  return promise
}

module.exports = {
  set,
  get
}
