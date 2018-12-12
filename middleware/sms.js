const SMSClient = require('@alicloud/sms-sdk')
const { accessKeyId, secretAccessKey } = require('../config')

const smsClient = new SMSClient({ accessKeyId, secretAccessKey })

module.exports = () => {
  return async (ctx, next) => {
    ctx.sms = smsClient
    await next()
  }
}
