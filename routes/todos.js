const router = require('express').Router()
const Todo = require('../controllers/Todo')

router.get('/add-todo', (req, res, next) => {
    res.render('add-todo')
})

router.post('/add-todo', (req, res, next) => {
    const { name, activity } = req.body
    Todo.create(name, activity, res)
})

router.get('/all-todos', (req, res, next) => {
    Todo.getAll(res)  
})

router.post('/edit-todo/:id', (req, res, next) => {
    const id = req.params.id
    const updatedTodoItem = req.body

    Todo.edit(id ,updatedTodoItem , res)
})

router.post('/delete-todo/:id', (req, res, next) => {
    const id = req.params.id
    Todo.remove(id, res)
})

router.get('/edit-todo/:id', (req, res, next) => {
    const id = req.params.id
    // console.log(req.params)
    Todo.setEditFields(id , res)
})



module.exports = router