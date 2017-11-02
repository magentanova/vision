const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const reportSchema = new Schema({
	nickname: {type: String, required: true},
	reportType: {type: String, required: true},
	user: {type: Schema.ObjectId, required: true},
	status: {type: String, default: 'processing'},
	archived: {type: Boolean, default: false}
})

module.exports = {
   Report: createModel('Report', reportSchema),
}
