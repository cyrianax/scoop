const Axios = require('axios')
const Config = require('../../config')

module.exports = async ctx => {
  const code = ctx.query.code
  try {
    const result = await Axios({
      url: 'https://api.weixin.qq.com/sns/jscode2session',
      params: {
        appid: Config.appId,
        secret: Config.secret,
        js_code: code,
        grant_type: 'authorization_code'
      }
    })
    ctx.redis.set(result.data.openid, result.data.session_key)
    ctx.body = { openid: result.data.openid }
  }
  catch (e) {
    ctx.throw(401)
  }
}
