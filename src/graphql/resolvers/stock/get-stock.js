const { GraphQLID } = require('graphql')
const Stock = require('../../../models/Stock')
const StockGQL = require('../../types/Stock')

module.exports = {
  type: StockGQL,
  args: {
    id: { type: GraphQLID }
  },
  resolve: (parent, { id }) => {
    return Stock.findById(id).populate('culture')
  }
}
