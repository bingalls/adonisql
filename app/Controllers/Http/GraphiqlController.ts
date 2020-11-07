import Response from '@ioc:Adonis/Core/Response'
const { graphiqlAdonis } = require('apollo-server-adonis')

export default class GraphiqlController {
  public get (): typeof Response {
    return graphiqlAdonis({
      endpointURL: '/graphql',
    })
  }
}
