const OrderModel = require('../../model/model.order.js')

module.exports = async ctx => {
  const { description, intentId, list } = ctx.request.body
  const orders = list.map(person => ({
    from: ctx.user._id,
    to: person._id,
    bonus: person.bonus,
    description,
    intentId
  }))

  try {
    const result = await OrderModel.create(orders)
    ctx.body = result
  } catch (e) {
    ctx.throw(e)
  }
}
