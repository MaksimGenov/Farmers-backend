const { GraphQLID } = require('graphql')
const Farmer = require('../../../models/Farmer')
const FarmerGQL = require('../../types/Farmer')

module.exports = {
  type: FarmerGQL,
  args: {
    id: { type: GraphQLID }
  },
  resolve: (parent, { id }) => {
    return Farmer.findById(id).populate({path: 'stocks', populate: {path: 'culture'}})
  }
}
