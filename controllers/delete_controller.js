const TodoList = require('../models/todo_model')

module.exports = function(req,res) {
    const toBeDeleted = req.body.checked; //It can be undefined (if there is no checkbox checked), string (for 1 value checked), array (for more than 1 values checked)
    
    if(typeof(toBeDeleted) == "string"){
        TodoList.findByIdAndDelete(toBeDeleted, (err) => {
            if(err){console.log("Error deleting task ");}
        })
    }
    else if(typeof(toBeDeleted) == "object"){
        for(let i of toBeDeleted){
            TodoList.findByIdAndDelete(i, (err) => {
                if(err){console.log("Error deleting task ");}
            })
        }
    }

    return res.redirect('back');
}