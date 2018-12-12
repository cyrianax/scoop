const redis = require('redis')
const { promisify } = require('util')

const client = redis.createClient()
client.fetch = promisify(client.get).bind(client)

module.exports = () => {
  return async (ctx, next) => {
    ctx.redis = client
    await next()
  }
}
