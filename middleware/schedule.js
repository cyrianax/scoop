const schedule = require('node-schedule')
const createOrderWithBot = require('../api/public/createOrderWithBot.js')

// 每分钟定时生成机器人订单
schedule.scheduleJob('33 * * * * *', createOrderWithBot)

module.exports = () => {
  return async (ctx, next) => {
    ctx.schedule = schedule
    await next()
  }
}
