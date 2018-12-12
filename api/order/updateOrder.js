const OrderModel = require('../../model/model.order.js')
const UserModel = require('../../model/model.user.js')

module.exports = async ctx => {
  let token = ctx.request.headers.authorization
  let user = Jwt.verify(token.replace('Bearer ', ''), Config.jwtSecret)

  const {_id, statusId, type, isSender} = ctx.request.body
  let newStatusId = 0
  switch (type) {
    case 'accept':
    newStatusId = 2
    break
    case 'confirm':
    if (statusId === 2) {
      newStatusId = isSender ? 4 : 3
    }
    if (statusId === 3 || statusId === 4) {
      newStatusId = 5
    }
    break
    case 'reject':
    newStatusId = 6
    break
    case 'cancel':
    newStatusId = 7
    break
  }


  let result = await OrderModel.update({_id}, {'$set': {statusId: newStatusId}})
  ctx.body = result
}
