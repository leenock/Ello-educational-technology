import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000; // Parse the port and ensure it's a number
  const { url } = await startStandaloneServer(server, {
    listen: { port }, // Pass the port as a number
  });
  console.log(`🚀  Server ready at: ${url}`);
})();
