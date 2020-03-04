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
        type: []
    },
    genre:{
        type: []
    },
    chapters:[{
        number:{
            type: Number
        },
        date:{
            type: Date
        }
    }],
    latestchapter:{
        type: Number
    },
    summary:{
        type: String
    },
    status:{
        type: String
    }
});


module.exports = mongoose.model('Comic', Comic);