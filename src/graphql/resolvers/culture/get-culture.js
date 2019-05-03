const { GraphQLString } = require('graphql')
const Culture = require('../../../models/Culture')
const CultureGQL = require('../../types/Culture')

module.exports = {
  type: CultureGQL,
  args: {
    name: { type: GraphQLString }
  },
  resolve: (parent, { name }) => {
    return Culture.findOne({ name })
  }
}
