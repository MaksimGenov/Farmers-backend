const Stock = require('../../../models/Stock')
const Culture = require('../../../models/Culture')
const Farmer = require('../../../models/Farmer')
const StockGQL = require('../../types/Stock')
const StockInputGQL = require('../../types/StockInput')

module.exports = {
  type: StockGQL,
  args: {
    stockInput: { type: StockInputGQL }
  },
  resolve: async (parent, { stockInput }) => {
    const { farmerId, culture: cultureName, totalQuantity, currentQuantity } = stockInput

    let [farmer, culture] = await Promise.all([
      Farmer.findById(farmerId).populate({ path: 'stocks', populate: { path: 'culture' } }),
      Culture.findOne({ name: cultureName })
    ])

    if (!farmer) throw new Error('farmer does not exist')

    const hasCulture = farmer.stocks.map(s => s.culture.name).includes(cultureName)

    if (hasCulture) throw new Error('Farmer already have that stock.')

    if (!culture) {
      culture = await Culture.create({name: cultureName})
    }

    let stock = await Stock.create({ culture, totalQuantity, currentQuantity, farmer })

    farmer.stocks.push(stock._id)

    await farmer.save()

    return { ...stock._doc, culture }
  }
}
