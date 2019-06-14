const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	name: {
		type: String,
		required: true
	},
	surname: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: false
	},
	phone: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
	},
	password: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false
	},
	experience: {
		type: String,
		required: false
	},
	instagramLink: {
		type: String,
		required: false
	},
    photo: {
        type: Schema.Types.ObjectId, ref: 'Image',
        required: false
    },
    albums: [{
        type: Schema.Types.ObjectId, ref: 'Album',
        required: false
    }],
    posts: [{
        type: Schema.Types.ObjectId, ref: 'Post',
        required: false
    }]
});

module.exports = mongoose.model('Prorider', schema);