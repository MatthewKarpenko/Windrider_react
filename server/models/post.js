const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    proriderId: {
        type: Schema.Types.ObjectId, ref: 'Prorider',
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('Post', schema);