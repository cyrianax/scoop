const Axios = require('axios')
const Config = require('../../config')
const UserModel = require('../../model/model.user.js')

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
    if (!result.data.errcode) {
      const { openid, session_key } = result.data
      const user = await UserModel.findOne({ openid })
      const token = user ? ctx.jwt.sign(user) : null
      ctx.redis.set(openid, session_key)
      ctx.body = { openid, user, token, code: 0 }
    } else {
      ctx.body = { code: result.data.errcode }
    }
  }
  catch (e) {
    ctx.throw(401)
  }
}
