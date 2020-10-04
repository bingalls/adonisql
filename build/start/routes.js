"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return 'Did you mean to open /graphiql';
});
const { graphiqlAdonis, graphqlAdonis } = require('apollo-server-adonis');
const { makeExecutableSchema } = require('graphql-tools');
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
`;
const Career_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Career"));
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const resolvers = {
    Query: {
        careers: async () => await Database_1.default.query().from('careers'),
        career: async () => await Database_1.default.query().from('careers').limit(1),
    },
    Mutation: {
        createCareer: async (root, args) => {
            void (root);
            const career = new Career_1.default();
            career.email = args.email.toString();
            career.description = args.description.toString();
            const result = await career.save();
            return result.toString();
        },
    },
};
const schema = makeExecutableSchema({ typeDefs, resolvers });
Route_1.default.post('/graphql', graphqlAdonis({
    schema: schema,
}));
Route_1.default.get('/graphql', graphqlAdonis({
    schema: schema,
}));
Route_1.default.get('/graphiql', graphiqlAdonis({
    endpointURL: '/graphql',
}));
//# sourceMappingURL=routes.js.map