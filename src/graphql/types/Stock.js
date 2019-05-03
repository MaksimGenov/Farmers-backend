const Culture = require('./Culture')
const {
  GraphQLObjectType,
  GraphQLNonNull: NonNull,
  GraphQLID,
  GraphQLInt
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Stock',
  fields: () => ({
    _id: { type: NonNull(GraphQLID) },
    culture: { type: NonNull(Culture) },
    totalQuantity: { type: NonNull(GraphQLInt) },
    currentQuantity: { type: NonNull(GraphQLInt) }
  })
})
