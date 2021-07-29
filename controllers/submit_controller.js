const TodoList = require("../models/todo_model"); // Database model imported 

module.exports = function(req,res) {

    return TodoList.create({
        description: req.body.description,
        category: req.body.category,
        due_date: req.body.due_date
    }, (err, newTask) => {
        if(err){console.log("Creating task failed"); return;}

        return res.redirect('back');
    })

}