const mongoose = require("mongoose")

const assignmentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    subject: {
        type: String,
        require: true
    },
    sdate: {
        type: Date,
        default: Date.now() + 2592000000
    },
    year: {
        type: String,
        require: true
    },
    section: {
        type: String,
        require: true
    },
    image: {
        type: String,
        required: true
    },
    reg: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}
);

module.exports = mongoose.model('Assignment', assignmentSchema)

