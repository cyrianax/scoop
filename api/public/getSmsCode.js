const Config = require('../../config')

module.exports = async ctx => {
  const phone = ctx.request.body.phone
  const code  = Math.random().toFixed(6).slice(-6)

  try {
    // const result = await ctx.sms.sendSMS({
    //   PhoneNumbers: phone,
    //   SignName: Config.SignName,
    //   TemplateCode: Config.TemplateCode,
    //   TemplateParam: `{"code":"${code}"}`
    // })

    ctx.redis.set(phone, code)
    ctx.redis.expire(phone, 300)

    ctx.body = { code: 0, smsCode: code }

  } catch (e) {
    ctx.body = e
  }
}
