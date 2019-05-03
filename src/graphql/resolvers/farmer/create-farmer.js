const { GraphQLNonNull: NonNull } = require('graphql')
const Farmer = require('../../../models/Farmer')
const FarmerGQL = require('../../types/Farmer')
const FarmerInputGQL = require('../../types/FarmerInput')

module.exports = {
  type: FarmerGQL,
  args: {
    farmerInput: { type: NonNull(FarmerInputGQL) }
  },
  resolve: (parent, { farmerInput: { name, town, phoneNumbers } }) => {
    return Farmer.create({ name, town, phoneNumbers })
  }
}
