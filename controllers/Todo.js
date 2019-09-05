const TodoModel = require('../models/Todo')

const initializeTodo = (todoName, todoActivity) => {
    return new TodoModel({
        name: todoName,
        activity: todoActivity,
        dateCreated: new Date().toLocaleDateString()
    })
}

const create = (todoName, todoActivity, res) => {
    return initializeTodo(todoName, todoActivity).save().then(() => {
        res.redirect('/all-todos')
    })
    .catch(err => { if (err) throw err; })
}

const setEditFields = (id, res) => {
    TodoModel.findById(id)
        .then(({_id, name, activity}) => {
            res.render('edit-todo', {_id, name, activity})
        })
}

const edit = (id ,updatedTodo, res) => {
    
    TodoModel.findByIdAndUpdate({"_id": id}, updatedTodo)
        .then((doc) => {
            res.redirect('/all-todos')
        })
        .catch(err => {if (err) throw err})
}

const remove = (id, res) => {
    TodoModel.findByIdAndRemove({"_id": id})
        .then(() => res.redirect('/all-todos'))
        .catch(err => {if (err) throw err})
}

const getAll = (res) => {
    TodoModel.find().then(data => {
        res.render('all-todos', { todos: data })
    })
}
module.exports = {
    create,
    setEditFields,
    edit,
    remove,
    getAll,
}