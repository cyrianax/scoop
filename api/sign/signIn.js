const UserModel = require('../../model/model.user.js')

module.exports = async ctx => {
  const { phone, code } = ctx.request.body
  try {
    const smsCode = await ctx.redis.fetch(phone)
    if (smsCode) {
      if (smsCode === code) {
        const user = await UserModel.findOne({ phone })
        if (user) {
          const token = ctx.jwt.sign(user)
          ctx.body = {
            code: 0,
            data: { user, token }
          }
        } else {
          ctx.status = 401
          ctx.body = 'not found user'
        }
      } else {
        ctx.body = {
          code: -1, msg: '验证码错误'
        }
      }
    } else {
      ctx.body = {
        code: -1, msg: '验证码已过期'
      }
    }
  } catch (e) {
    ctx.throw(e)
  }
}
