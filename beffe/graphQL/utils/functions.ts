import { Movie } from "../../proto/stubs/movie_pb";
import { MovieMutationInput } from "./types";

export const requestObject = (movieInput: MovieMutationInput) => {
  const request = new Movie();
  request.setName(movieInput.name);
  request.setImage(movieInput.image);
  request.setDescription(movieInput.description);
  request.setGenre(movieInput.genre);
  request.setWatchlist(movieInput.watchlist);

  return request;
};
