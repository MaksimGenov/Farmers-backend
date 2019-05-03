const { GraphQLObjectType } = require('graphql')
const farmer = require('../resolvers/farmer/get-farmer')
const farmers = require('../resolvers/farmer/get-farmers')
const stock = require('../resolvers/stock/get-stock')
const culture = require('../resolvers/culture/get-culture')
const cultures = require('../resolvers/culture/get-all-cultures')

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    farmer,
    farmers,
    stock,
    culture,
    cultures
  })
})
