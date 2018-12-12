const UserModel = require('../../model/model.user.js')
const users = require('../../static/data/user.json')
const company = require('../../static/data/company.json')
const title = require('../../static/data/title.json')

module.exports = async ctx => {
  const bots = users.map(user => {
    const randomNum = Math.random()
    return {
      phone: '13000000000',
      nickName: user,
      company: company[Math.floor(randomNum * 1000)].name,
      title: title[Math.floor(randomNum * 56)],
      vocationIds: [company[Math.floor(randomNum * 1000)].vocationId],
      avatarUrl: `https://kongming.online/avatars/${Math.floor(randomNum * 782)}.jpg`,
      random: Math.random(),
      bot: true
    }
  })

  try {
    const result = await UserModel.insertMany(bots)
    ctx.body = 'create success'
  } catch (e) {

  }
}
