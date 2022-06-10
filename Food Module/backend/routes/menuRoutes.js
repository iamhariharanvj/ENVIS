const express = require('express');
const Router = express.Router();
const {updateMenu, showMenu} = require('../controllers/menuController')

Router.route('/showMenu').get(showMenu)

Router.route('/updateMenu').post(updateMenu)

module.exports = Router;