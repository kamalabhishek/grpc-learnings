import { ApolloServer } from "apollo-server";
import { Query } from "./resolvers/Query";
import { Mutation } from "./resolvers/Mutation";
import { typeDefs } from "./schema";
import { logger } from "./interceptors/logger";
import { authenticateRequest } from "./interceptors/authentication";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  context: ({ req, res }) => {
    logger(req, res);
    const authenticatedUser = authenticateRequest(req, res);
    const ctx = {
      user: authenticatedUser,
    };
    return ctx;
  },
});

server.listen().then(({ url }) => {
  console.log("server is ready at " + url);
});
