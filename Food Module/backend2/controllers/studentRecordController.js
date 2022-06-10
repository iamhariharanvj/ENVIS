const StudentRecord = require('../models/studentRecords');
// const bodyParser = require('body-parser');

const showStudentRecord = (req, res) => {
    res.send("working");
}

const getRecord = (req, res) => {
    const roomNo = "E_03";
    const rollNumber = "64155";
    var index;
    try {
        StudentRecord.findOne({roomNo: roomNo}, function(err, docs) {
            // console.log(docs);
            console.log(docs);
            console.log(docs["roomData"]);
            for(var i=0; i<docs["roomData"].length; i++) {
                if (docs["roomData"][i]["rollNo"] == rollNumber) {
                    index = i;
                    console.log(i);
                }
            }
        });
    } catch (err) {
        console.log(err);
    }
}

const updateRecord = (req, res) => {
    console.log(req.body)
    const roomNumber = req.body.roomNumber;
    const rollNumber = req.body.rollNumber;

    try {
        StudentRecord.findOne({roomNo: roomNumber}, function (err, docs) {
            // console.log(docs);
            console.log(docs);
            console.log(docs["roomData"]);
            for(var i=0; i<docs["roomData"].length; i++) {
                if (docs["roomData"][i]["rollNo"] == rollNumber) {
                    console.log(i);
                    var change;
                    console.log(docs.roomData[i].studentIn);
                    if (docs.roomData[i].studentIn) {
                        change = false;
                    } else {
                        change = true;
                    }
                    docs.roomData[i].studentIn = change;
                    console.log(docs);
                    docs.save();
                    console.log("Updated!");
                    res.end()
                    break;
                }
            }
            res.end();
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports.showStudentRecord = showStudentRecord;
module.exports.getRecord = getRecord;
module.exports.updateRecord = updateRecord;