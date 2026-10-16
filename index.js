// startStandaloneServer is the quickest way to run a GraphQL API - no Express needed.

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";


// Build the server from our schema (the contract) and resolvers (the logic).

const server = new ApolloServer({typeDefs, resolvers});

// Start it listening on port 4000. This returns URL once it's up.
const { url } = await startStandaloneServer(server, {
    listen: {port : 4000},
});

console.log(`Server is ready at ${url}`);