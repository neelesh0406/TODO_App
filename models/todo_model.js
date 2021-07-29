const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    due_date: {
        type: Date
    }
})

const TodoList = new mongoose.model('TodoList', todoListSchema);

module.exports = TodoList;