const Jwt = require('jsonwebtoken')
const Config = require('../config')

module.exports = () => {
  const jwt = {
    sign(userData) {
      const { _id, phone, openid, nickname } = userData
      return Jwt.sign({ _id, phone, openid, nickname }, Config.jwtSecret)
    },
    verify(token) {
      return Jwt.verify(token.replace('Bearer ', ''), Config.jwtSecret)
    }
  }
  
  return async (ctx, next) => {
    ctx.jwt = jwt

    const token  = ctx.request.headers.authorization
    if (token) {
      ctx.user = ctx.jwt.verify(token)
    }

    await next()
  }
}
