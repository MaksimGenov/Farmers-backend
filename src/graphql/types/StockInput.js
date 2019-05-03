const {
  GraphQLNonNull: NonNull,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLString
} = require('graphql')

const StockType = new GraphQLInputObjectType({
  name: 'StockInput',
  fields: () => ({
    farmerId: { type: NonNull(GraphQLID) },
    culture: { type: NonNull(GraphQLString) },
    totalQuantity: { type: NonNull(GraphQLInt) },
    currentQuantity: { type: GraphQLInt }
  })
})

module.exports = StockType
