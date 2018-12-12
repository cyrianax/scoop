const OrderModel = require('../../model/model.order.js')
const UserModel = require('../../model/model.user.js')

module.exports = async ctx => {
  try {
    // 查询订单
    const orders = await OrderModel.find().limit(5).sort({ createDate: -1 })

    const list = []
    for (let i = 0; i < orders.length; i++) {
      const from = await UserModel.findOne({ _id: orders[i].from })
      const to = await UserModel.findOne({ _id: orders[i].to })
      list.push({
        order: orders[i],
        user: { from, to }
      })
    }
    console.log(list);
    ctx.body = list

  } catch (e) {
    ctx.throw(e)
  }
}
