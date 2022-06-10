const express = require('express');
const Router = express.Router();

const {getRecord, showStudentRecord, updateRecord} = require('../controllers/studentRecordController');

Router.route('/showStudentRecord').get(showStudentRecord);
Router.route('/getRecord').get(getRecord);
Router.route('/updateRecord').post(updateRecord);

module.exports = Router;