const TodoList = require('../models/todo_model');

module.exports = function(req,res) {
    TodoList.find({}, (err,tasks) => {
        if(err){console.log("uggh, tasks not found in db"); return;}

        return res.render('home', {
            tasks_list: tasks
        })
    })
}