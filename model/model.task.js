// 通用模块
const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

// 定义Schema
const schema = new Schema({
	// 邀请者
	from: Schema.Types.ObjectId,
	// 被邀请者
	to: Schema.Types.ObjectId,
	// 需求
	description: String,
	// 目的
	intentId: Number,
	// 打赏
	bonus: Number,
	// 状态
	statusId: {
		type: Number,
		default: 1
	},
	// 创建时间
	createDate: {
		type: Date,
		default: Date.now
	},
})

// 定义Model
const model = Mongoose.model('order', schema)

// 导出数据模型
module.exports = model
