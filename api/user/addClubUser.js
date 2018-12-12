const UserModel = require('../../model/model.user.js')

module.exports = async ctx => {
  const { phone, nickName, company, title, vocationIds } = ctx.request.body.user
  const result = await UserModel.findOne({ phone })
  if (!result) {
    const user = new UserModel({
      phone, nickName, company, title, vocationIds,
      inviterId: ctx.user._id,
      statusId: 2,
    })
    const newUser = await user.save()
    ctx.body = { user: newUser, code: 0 }
  }
  else {
    ctx.body = {
      code: -1,
      msg: '已有用户使用该手机号码'
    }
  }
}
