const mongoose = require('mongoose')

const connectionString = process.env.MONGOOSE_CONNECTION_STRING

const connect_to_db = function () {
    return mongoose.connect(connectionString, { 
        useNewUrlParser: true,
        useFindAndModify: false 
    })
}

module.exports = connect_to_db