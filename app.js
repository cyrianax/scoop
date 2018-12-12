const Path = require('path')
const Koa = require('koa')
const Config = require('./config')

// third-party middleware
const koaLogger = require('koa-logger')
const koaBodyparser = require('koa-bodyparser')
// const koaCors = require('kcors')
const koaStatic = require('koa-static')
const koaJWT = require('koa-jwt')

// middleware
// const enumerate = require('./middleware/enum.js')
const jwt = require('./middleware/jwt.js')
// const mongoose = require('./middleware/mongoose.js')
// const redis = require('./middleware/redis.js')
const router = require('./middleware/router.js')
const schedule = require('./middleware/schedule.js')

// main
const app = new Koa()

app.use(koaLogger())
app.use(koaBodyparser())
app.use(koaStatic((Path.resolve(__dirname, './static'))))
// app.use(mongoose())
app.use(redis())
// app.use(enumerate())
app.use(jwt())
app.use(schedule())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(Config.port)
