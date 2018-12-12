const UserModel = require('../../model/model.user.js')

module.exports = async ctx => {
  const phone = ctx.request.body.phone
  try {
    const user = await UserModel.findOne({ phone })
    ctx.body = { user }
  } catch (e) {
    ctx.throw(e)
  }
}
