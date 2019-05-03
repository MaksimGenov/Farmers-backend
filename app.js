const express = require('express')
const graphqlHttp = require('express-graphql')
const gqlSchema = require('./src/graphql/Schema')
const startDatabase = require('./database')
const port = process.env.PORT || 5000

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS,GET')
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

app.use('/graphql', graphqlHttp({
  schema: gqlSchema,
  graphiql: true
}))

startDatabase()
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => console.log(`server is running on port: ${port}`))
  })
  .catch(error => console.log(error))
