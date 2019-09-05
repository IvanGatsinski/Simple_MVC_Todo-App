require('dotenv').config()
const app = require('express')()
const port = 3000;

const bodyParser = require('body-parser')

const connect_to_db = require('./utils/db_connection')

const app_routes = require('./utils/use_routes')

app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'pug')

app_routes().forEach(route => app.use(route))

connect_to_db()
    .then(() => {
        app.listen(port)
    })
    .catch(err => {
        if (err) throw err
    })
