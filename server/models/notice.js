const mongoose = require("mongoose")
const { timestamps } = require('mongodb')

const noticeSchema = mongoose.Schema({
    topic: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true
    },
    image: {
        // public_id: {
        //     type: String,
        //     required: true
        // },
        // url: {
        //     type: String,
        //     required: true
        // }
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}
);

module.exports = mongoose.model('Notice', noticeSchema)

