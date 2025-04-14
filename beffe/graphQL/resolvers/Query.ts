import { movies } from "./movie/getAllMovies";
import { movie } from "./movie/getByMovieId";
import { login } from "./user/login";

export const Query = {
  movie,
  movies,
  login,
};
