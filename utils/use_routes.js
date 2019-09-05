const home = require('../routes/home')
const todos = require('../routes/todos')

function app_routes() {
    return [
        home,
        todos
    ]
}

module.exports = app_routes
