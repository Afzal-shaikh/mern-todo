// Todo schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const TodoSchema = new Schema({
    user_id:{
        type:string
    },
    content:{
        type:string
    },
    date:{
        type: Date,
        default : Date.now
    },

});

module.exports = Todo = mongoose.model('todo',TodoSchema);