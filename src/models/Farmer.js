const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = mongoose.SchemaTypes

const Farmer = new Schema({
  name: { type: String, required: true },
  town: { type: String, required: true },
  phoneNumbers: { type: [String], required: true },
  stocks: { type: [{ type: ObjectId, ref: 'Stock' }] }
})

module.exports = mongoose.model('Farmer', Farmer)
