const { GraphQLList } = require('graphql')
const Culture = require('../../../models/Culture')
const CultureGQL = require('../../types/Culture')

module.exports = {
  type: GraphQLList(CultureGQL),
  resolve: () => Culture.find()
}
