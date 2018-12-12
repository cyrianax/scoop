const UserModel = require('../../model/model.user.js')

module.exports = async ctx => {
  let {phone, openid, nickName, company, title, vocationIds, avatarUrl} = ctx.request.body

  let result = await UserModel.findOne({phone})
  if (result) {
    let modifyResult = await UserModel.findByIdAndUpdate({_id: result._id}, {
      $set: {
        openid,
        nickName,
        company,
        title,
        vocationIds,
        avatarUrl,
        activeDate: new Date(),
        statusId: 1,
      }
    })

    if (modifyResult) {
      const token = Jwt.sign({_id: modifyResult._id, phone, nickName, avatarUrl: modifyResult.avatarUrl}, Config.jwtSecret)
      ctx.body = {
        phone,
        nickName,
        avatarUrl: result.avatarUrl,
        token
      }
    }
    else {
      ctx.throw(401)
    }
  }
}
