const { GraphQLObjectType } = require('graphql')
const createCulture = require('../resolvers/culture/create-culture')
const createStock = require('../resolvers/stock/create-stock')
const createFarmer = require('../resolvers/farmer/create-farmer')
const deleteStock = require('../resolvers/stock/delete-stock')

module.exports = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: () => ({
    createCulture,
    createStock,
    createFarmer,
    deleteStock
  })
})
