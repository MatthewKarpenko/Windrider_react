const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    images: [{
        type: Schema.Types.ObjectId, ref: 'Image'
    }]
});

module.exports = mongoose.model('Album', schema);