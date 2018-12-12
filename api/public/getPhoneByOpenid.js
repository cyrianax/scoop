module.exports = async ctx => {
  const { openid, iv, encryptedData } = ctx.request.body
  try {
    const sessionKey = await ctx.redis.fetch(openid)
    if (sessionKey) {
      const data = ctx.wechat.decryptData(sessionKey, encryptedData, iv)
      ctx.body = data
    }
  } catch (e) {
    ctx.throw(e)
  }
}
