import { makeExecutableSchema } from 'graphql-tools'
import resolvers from 'App/data/resolvers'
import typeDefs from 'App/data/schema'

const { AdonisHandler, graphqlAdonis } = require('apollo-server-adonis')
const schema = makeExecutableSchema({ typeDefs, resolvers })

export default class GqlController {
  public static post (): typeof AdonisHandler {
    return graphqlAdonis({
      schema: schema,
    })
  }
}
