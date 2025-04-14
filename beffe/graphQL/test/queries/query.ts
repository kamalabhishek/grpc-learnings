import { gql } from "apollo-server";


export const GET_LOGIN = gql`
  query ($name: String!, $password: String!) {
    login(name: $name, password: $password)
  }
`;

export const UPDATE_MOVIE = gql`
  mutation ($updateMovieId: ID!, $movieInput: MovieInput!) {
    updateMovie(id: $updateMovieId, movieInput: $movieInput) {
      status
      message
    }
  }
`;

export const GET_MOVIES = gql`
  query ($filter: MovieFilterInput) {
    movies(filter: $filter) {
      id
      name
      description
      image
      watchlist
      genre
    }
  }
`;

export const NEW_MOVIE = gql`
  mutation ($movieInput: MovieInput!) {
    addMovie(movieInput: $movieInput) {
      message
      status
    }
  }
`;
