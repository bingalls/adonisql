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
  return { hello: 'world' }
})

const { graphiqlAdonis, graphqlAdonis } = require('apollo-server-adonis')

const { makeExecutableSchema } = require('graphql-tools')

// database without async/await in router is too slow
// move this code into a controller
import Database from '@ioc:Adonis/Lucid/Database'
let careers = Database.query().from('careers')

// GraphQL schema in string form
const typeDefs = `
  type Career {
    email: String
    description: String
  }
  type Query {
    careers: [Career]
    career: [Career]
  }
  type Mutation {
    createCareer(email: String, description: String): String
  }
`

import Career from 'App/Models/Career'
const resolvers = {
  Query: {
    careers: () => careers,
    career: () => careers.paginate(1, 1),
  },
  Mutation: {
    createCareer: (root, args) => { //(root, args, context, info)
      void(root) // syntax sugar to lint unused param
      const career = new Career()
      career.email = args.email.toString()
      career.description = args.description.toString()
      career.save()
    },
  },
}

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
