const mongoose = require('mongoose');

const dailymenu = new mongoose.Schema({
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