const UserModel = require('../../model/model.user.js')

module.exports = async ctx => {
  const { vocationIds } = ctx.request.body
  let query = {
    '$nor': [{ _id: ctx.user._id }],
  }
  if (vocationIds.length) {
    query['vocationIds'] = { '$in': vocationIds }
  }

  query['random'] = { '$gt': Math.random() }
  let result = await UserModel.find(query).limit(5)
  while (result.length < 5) {
    query['random'] = { '$gt': Math.random() }
    result = await UserModel.find(query).limit(5)
  }

  ctx.body = result
}
