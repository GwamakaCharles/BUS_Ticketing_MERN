const mongoose = require('mongoose');

const Places = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})