import Career from 'App/Models/Career'
import Database from '@ioc:Adonis/Lucid/Database'

interface ArgType {
  readonly description: string
  readonly email: string
}

const resolvers = {
  Query: {
    careers: async () => await Database.query().from('careers'),
    career: async () => await Database.query().from('careers').limit(1),
  },
  Mutation: {
    createCareer: async (root :any, args: ArgType) => { //(root, args, context, info)
      void(root) // syntax sugar to lint unused param
      const career = new Career()
      career.email = args.email.toString()
      career.description = args.description.toString()
      const result = await career.save()
      return result.toString()
    },
  },
}

export default resolvers
