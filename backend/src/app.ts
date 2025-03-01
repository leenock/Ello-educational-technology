import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
})();