const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Banner = new Schema({
    banner_filepath:{
        type: String
    }
});

module.exports = mongoose.model('Banner', Banner);