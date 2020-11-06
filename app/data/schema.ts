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

export default typeDefs
