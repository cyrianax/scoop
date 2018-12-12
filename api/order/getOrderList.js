const OrderModel = require('../../model/model.order.js')
const UserModel = require('../../model/model.user.js')

module.exports = async ctx => {
  const { type } = ctx.query

  try {
    // 查询订单
    let query = {}
    query[type] = ctx.user._id
    const list = await OrderModel.find(query)

    // 用户详情
    const myUser = await UserModel.findOne({ _id: ctx.user._id })

    // 订单用户类型
    const personType = type === 'from' ? 'to' : 'from'

    // 获取订单的用户详情
    const orderUserIds = list.map(order => order[personType])
    const orderUsers = await UserModel.find({ _id: { '$in': orderUserIds } })

    // 生成订单列表
    const orderList = list.map(order => {
      const { _id, statusId, intentId, description, bonus, createDate } = order
      const idx = orderUsers.findIndex(user => user._id.toString() === order[personType].toString())

      // 订单详情
      let orderDetail = { _id, statusId, intentId, description, bonus, createDate }
      orderDetail[type] = myUser
      orderDetail[personType] = orderUsers[idx]
      orderDetail['intentText'] = ctx.enum.orderIndent[intentId].value
      orderDetail['statusText'] = ctx.enum.orderStatus[statusId].value
      orderDetail['bonusCoins'] = Math.floor((bonus * 0.8))

      return orderDetail
    })

    ctx.body = orderList

  } catch (e) {
    ctx.throw(e)
  }
}
