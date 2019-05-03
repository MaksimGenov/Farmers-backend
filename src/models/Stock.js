const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = mongoose.SchemaTypes

const StockSchema = new Schema({
  farmer: { type: ObjectId, required: true, ref: 'Farmer' },
  culture: { type: ObjectId, required: true, ref: 'Culture' },
  totalQuantity: { type: String, required: true, default: 0 },
  currentQuantity: { type: String, required: true, default: 0 }
})

module.exports = mongoose.model('Stock', StockSchema)
