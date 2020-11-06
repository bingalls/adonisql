/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return 'Did you mean to open /graphiql'
})

const { graphiqlAdonis, graphqlAdonis } = require('apollo-server-adonis')
const { makeExecutableSchema } = require('graphql-tools')

import resolvers from 'App/data/resolvers'
import typeDefs from 'App/data/schema'

const schema = makeExecutableSchema({ typeDefs, resolvers })

Route.post('/graphql', graphqlAdonis({
  schema: schema,
}))
Route.get('/graphql', graphqlAdonis({
  schema: schema,
}))

Route.get(
  '/graphiql',
  graphiqlAdonis({
    endpointURL: '/graphql',
  }),
)
