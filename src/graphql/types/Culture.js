const {
  GraphQLNonNull: NonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Culture',
  fields: () => ({
    _id: { type: NonNull(GraphQLID) },
    name: { type: NonNull(GraphQLString) }
  })
})
