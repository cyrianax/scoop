const OrderModel = require('../../model/model.order.js')
const UserModel = require('../../model/model.user.js')

module.exports =  async ctx => {
  const query = {
    'bot': true,
    'random': { '$gt': Math.random() }
  }
  // 随机选取个机器人用户
  let bots = await UserModel.find(query).limit(2)

  while (bots.length < 2) {
    query['random'] = { '$gt': Math.random() }
    bots = await UserModel.find(query).limit(2)
  }

  const order = {
    from: bots[0]._id,
    to: bots[1]._id,
    description: '',
    intentId: Math.floor(Math.random() * 2) + 1
  }

  try {
    const result = await OrderModel.create(order)
    ctx.body = result
  } catch (e) {
    ctx.throw(e)
  }
}
