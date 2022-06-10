const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    breakfast: {
        type: 'array',
        quantity: 'array'
    },
    lunch: {
        type: 'array' ,
        quantity: 'array'

        },
    snacks: {
        type: 'array',
        quantity: 'array'

    },
    dinner: { 
        type: 'array',
        quantity: 'array'

    },


})

const DailyMenu = mongoose.model("Menu", menuSchema);

module.exports = DailyMenu;