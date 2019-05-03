const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/Farmers_DB'

module.exports = () => mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true })
