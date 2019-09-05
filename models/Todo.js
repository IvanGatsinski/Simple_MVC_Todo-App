const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    activity: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        required: true,
    }
})

const TodoModel = mongoose.model('Todos', todoSchema)

module.exports = TodoModel