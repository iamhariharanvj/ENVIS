const mongoose = require('mongoose');

const studentRecords = new mongoose.Schema({
    roomNo: {
        type: String
    },
    roomData: [
        {
            rollNo: String,
            studentIn: Boolean
        }
    ]
})

const StudentRecords = mongoose.model("studentRecords", studentRecords)

module.exports = StudentRecords