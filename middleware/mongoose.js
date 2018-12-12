const Mongoose = require('mongoose')
const Config = require('../config')

module.exports = () => {
  Mongoose.Promise = global.Promise
  Mongoose.connect(Config.db).then(() => {
    console.log('::: Database has connected')
  }, err => {
    console.log(err)
  })

  return async (ctx, next) => {
    await next()
  }
}
