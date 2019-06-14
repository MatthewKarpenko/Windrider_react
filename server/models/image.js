const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    path: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Image', schema);