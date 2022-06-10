const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    breakfast: {
        type: 'array'
    },
    lunch: {
         type: 'array' 
        },
    snacks: {
        type: 'array'
    },
    dinner: { 
        type: 'array' 
    },


})

const DailyMenu = mongoose.Model("Menu", menuSchema);

module.exports = DailyMenu;