import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const port = process.env.PORT || 4000;
const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: typeof port === 'string' ? parseInt(port, 10) : port },
  });
  console.log(`🚀  Server ready at: ${url}`);
})();
