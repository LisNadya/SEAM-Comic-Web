const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comic = new Schema({
    filepath:{
        type: String
    },
    title:{
        type: String
    },
    author:{
        type: String
    },
    genre:{
        type: String
    },
    latestchapter:{
        type: Number
    },
    summary:{
        type: String
    }
});


module.exports = mongoose.model('Comic', Comic);