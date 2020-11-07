import resolvers from 'App/data/resolvers'
import Response from '@ioc:Adonis/Core/Response'
import typeDefs from 'App/data/schema'

const { graphqlAdonis } = require('apollo-server-adonis')
const { makeExecutableSchema } = require('graphql-tools')
const schema = makeExecutableSchema({ typeDefs, resolvers })

export default class GraphqlController {
  public get (): typeof Response {
    return graphqlAdonis({
      schema: schema,
    })
  }

  public post (): typeof Response {
    return graphqlAdonis({
      schema: schema,
    })
  }
}
