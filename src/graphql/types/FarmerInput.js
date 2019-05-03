const {
  GraphQLNonNull: NonNull,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql')

module.exports = new GraphQLInputObjectType({
  name: 'FarmerInput',
  fields: () => ({
    name: { type: NonNull(GraphQLString) },
    town: { type: NonNull(GraphQLString) },
    phoneNumbers: {type: GraphQLList(GraphQLString)}
  })
})
