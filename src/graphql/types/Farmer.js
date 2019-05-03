const Stock = require('./Stock')
const {
  GraphQLNonNull: NonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Farmer',
  fields: () => ({
    _id: { type: NonNull(GraphQLID) },
    name: { type: NonNull(GraphQLString) },
    town: { type: NonNull(GraphQLString) },
    stocks: { type: GraphQLList(NonNull(Stock)) },
    phoneNumbers: { type: GraphQLList(NonNull(GraphQLString)) }
  })
})
