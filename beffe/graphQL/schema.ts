import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    movies(filter: MovieFilterInput): [Movie!]!
    movie(id: ID!): Movie!
    login(name: String!, password: String!): String
  }

  type Mutation {
    addMovie(movieInput: MovieInput!): MutationResponse!
    updateMovie(id: ID!, movieInput: MovieInput!): MutationResponse!
    deleteMovie(id: ID!): MutationResponse!
  }

  type MutationResponse {
    status: Int
    message: String
  }

  type Movie {
    id: ID!
    name: String!
    description: String!
    genre: String!
    image: String!
    watchlist: Boolean!
  }

  input MovieInput {
    name: String!
    description: String!
    genre: String!
    image: String!
    watchlist: Boolean!
  }

  input MovieFilterInput {
    genre: String
    watchlist: Boolean
  }
`;
