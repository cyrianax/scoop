const UserModel = require('../../model/model.user.js')

module.exports = async ctx => {
  const { openid, phone, nickName, avatarUrl, company, title, vocationIds } = ctx.request.body
  try {
    const result = await UserModel.findOne({ phone })
    if (!result) {
      const user = new UserModel({ openid, phone, nickName, avatarUrl, company, title, vocationIds })
      const newUser = await user.save()
      const token = ctx.jwt.sign(newUser)
      ctx.body = newUser
    }
  } catch (e) {
    ctx.throw(e)
  }
}
