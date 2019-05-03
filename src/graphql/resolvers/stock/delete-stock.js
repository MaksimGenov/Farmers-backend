const { GraphQLID } = require('graphql')
const { Types: mongooseTypes } = require('mongoose')
const Stock = require('../../../models/Stock')
const Farmer = require('../../../models/Farmer')
const StockGQL = require('../../types/Stock')

module.exports = {
  type: StockGQL,
  args: {
    id: { type: GraphQLID }
  },
  resolve: async (parent, { id }) => {
    if (!mongooseTypes.ObjectId.isValid(id)) {
      throw new Error(`id: "${id}" is invalid.`)
    }

    const stock = await Stock.findById(id).populate('culture')

    if (!stock) {
      throw new Error(`Stock with id: "${id}" does not exist.`)
    }

    let farmer = await Farmer.findById(stock.farmer._id)
    farmer.stocks = farmer.stocks.filter(id => id.toString() !== stock._id.toString())

    await stock.remove()
    await farmer.save()

    return stock
  }
}
