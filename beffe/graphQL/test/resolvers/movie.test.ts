import { addMocksToSchema } from "@graphql-tools/mock";
import { ApolloServer } from "apollo-server";
import { Mutation } from "../../resolvers/Mutation";
import { Query } from "../../resolvers/Query";
import { typeDefs } from "../../schema";
import { makeExecutableSchema } from "@graphql-tools/schema";
import {
  GET_LOGIN,
  GET_MOVIES,
  NEW_MOVIE,
  UPDATE_MOVIE,
} from "../queries/query";

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => "Steel Pot",
  Boolean: () => true,
  MutationResponse: () => ({
    status: 200,
    message: "Test Successful",
  }),
  Movie: () => ({
    id: "testId",
    name: "testName",
    description: "testDescription",
    genre: "testGenre",
    image: "testImage",
    watchlist: false,
  }),
};

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({
      typeDefs,
      resolvers: {
        Query,
        Mutation,
      },
    }),
    mocks,
  }),
});

describe("Movie Resolver tests", () => {
  test("Should return movies", async () => {
    let result = await server.executeOperation({
      query: GET_MOVIES,
    });
    expect(result).toBeTruthy();
    expect(result).toHaveProperty("data");
  });

  test("Should Login", async () => {
    let result = await server.executeOperation({
      query: GET_LOGIN,
      variables: { name: "nikhil", password: "Nikhil@123" },
    });
    expect(result).toBeTruthy();
    expect(result).toHaveProperty("data");
  });

  test("Should add new movie", async () => {
    let result = await server.executeOperation({
      query: NEW_MOVIE,
      variables: {
        name: "testName",
        description: "testDescription",
        genre: "testGenre",
        image: "testImage",
        watchlist: false,
      },
    });
    expect(result).toBeTruthy();
    expect(result).toHaveProperty("data");
  });

  test("Should update new movie", async () => {
    let result = await server.executeOperation({
      query: UPDATE_MOVIE,
      variables: {
        updateMovieId: "test",
        movieInput: {
          name: "testName",
          description: "testDescription",
          genre: "testGenre",
          image: "testImage",
          watchlist: false,
        },
      },
    });
    expect(result).toBeTruthy();
    expect(result).toHaveProperty("data");
  });
});
