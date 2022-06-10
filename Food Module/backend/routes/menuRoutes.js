const express = require('express');
const Router = express.Router();
const {updateMenu, showMenu, addOrder,removeOrder} = require('../controllers/menuController')

Router.route('/showMenu').get(showMenu);

Router.route('/updateMenu').post(updateMenu);

Router.route('/addOrder').post(addOrder);
Router.route('/removeOrder').post(removeOrder);



module.exports = Router;