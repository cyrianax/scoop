// 通用模块
const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

// 定义Schema
const schema = new Schema({
	// 手机
	phone: String,
	// wechat openid
	openid: String,
    // 昵称
	nickName: String,
	// 公司
	company: String,
	// 头衔
	title: String,
	// 行业
	vocationIds: [Number],
	// 状态
	statusId: {
		type: Number,
		default: 1
	},
	// 推荐人Id
	inviterId: Schema.Types.ObjectId,
	// 头像地址
	avatarUrl: {
		type: String,
		default: 'https://kongming.online/default_avatar.jpg'
	},
	// 创建时间
	createDate: {
		type: Date,
		default: Date.now
	},
	// 激活时间
	activeDate: Date,
	// 英雄币
	coins: {
		type: Number,
		default: 0
	},
	// 机器人
	bot: Boolean,
	// 随机键
	random: Number
})

// 定义Model
const model = Mongoose.model('user', schema)

// 导出数据模型
module.exports = model
