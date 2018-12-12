const UserModel = require('../../model/model.user.js')

module.exports = async ctx => {
  const users = await UserModel.find({ inviterId: ctx.user._id })
  ctx.body = users
}
