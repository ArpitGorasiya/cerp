const mongoose = require('mongoose')
const { Schema } = mongoose

const markSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    exam: {
        type: String,
        required: true
    },
    marks: {
        type: String,
        default: 30
    },
    totalMarks: {
        type: Number,
        default: 100 
    },
    department: {
        type: String
    },
    // semester: {
    //     type:Number
    // },
    section: {
        type: String
    },
    // subject:{
    //     type: Schema.Types.ObjectId
    // }
})

module.exports = mongoose.model('mark', markSchema)
