const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comic = new Schema({
    comic_filepath:{
        type: String
    },
    comic_name:{
        type: String
    }
});

module.exports = mongoose.model('Comic', Comic);