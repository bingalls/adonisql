// import Response from '@ioc:Adonis/Core/Response'
const { graphiqlAdonis } = require('apollo-server-adonis')

export default class GraphiqlController {
  public static get () {
    return graphiqlAdonis({
      endpointURL: '/graphql',
    })
  }
}
