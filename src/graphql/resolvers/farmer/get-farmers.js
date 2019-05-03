const Farmer = require('../../../models/Farmer')
const FarmerGQL = require('../../types/Farmer')
const { GraphQLList } = require('graphql')

module.exports = {
  type: GraphQLList(FarmerGQL),
  resolve: () => {
    return Farmer.find({}).populate({ path: 'stocks', populate: { path: 'culture' } })
  }
}
