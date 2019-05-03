const { GraphQLSchema } = require('graphql')
const RootQuery = require('./types/RootQuery')
const RootMutation = require('./types/RootMutation')

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})
