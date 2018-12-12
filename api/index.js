const KoaRouter = require('koa-router')
const api = new KoaRouter()

// sign
api.post('/sign/signIn', require('./sign/signIn'))
api.get('/sign/signInFromWechat', require('./sign/signInFromWechat'))
api.post('/sign/signUpFromWechat', require('./sign/signUpFromWechat'))

// public
api.get('/public/userTool', require('./public/userTool'))
api.post('/public/checkUser', require('./public/checkUser'))
api.post('/public/getPhoneByOpenid', require('./public/getPhoneByOpenid'))
api.post('/public/getSmsCode', require('./public/getSmsCode'))
api.get('/public/getVocationList', require('./public/getVocationList'))
api.post('/public/getWechatOpenid', require('./public/getWechatOpenid'))
api.get('/public/createBotUser', require('./public/createBotUser'))
api.get('/public/createOrderWithBot', require('./public/createOrderWithBot'))
api.get('/public/getOrderNews', require('./public/getOrderNews'))

// user
api.post('/user/getUserList', require('./user/getUserList'))
api.post('/user/addClubUser', require('./user/addClubUser'))
api.get('/user/getClubUsers', require('./user/getClubUsers'))

// order
api.post('/order/create', require('./order/create'))
api.get('/order/getOrderList', require('./order/getOrderList'))
api.post('/order/updateOrder', require('./order/updateOrder'))

module.exports = api
