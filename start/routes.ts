/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
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
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return 'Did you mean to open /graphiql'
})

import { graphiqlAdonis } from 'apollo-server-adonis'
import GqlController from 'App/Controllers/Http/GqlController'

Route.get('graphiql', graphiqlAdonis({ endpointURL: '/graphql' }))
// post() is called asynchronously internally, so this syntax is performant
Route.post('graphql', GqlController.post())
