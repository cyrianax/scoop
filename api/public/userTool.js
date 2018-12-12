const UserModel = require('../../model/model.user.js')

module.exports = async ctx => {
  let user = new UserModel({
    phone: '15211003076',
    nickName: 'excella',
    company: '湘邮',
    title: '前端负责人',
    statusId: 2,
  })

  let result = await user.save();
  ctx.body = result
}
