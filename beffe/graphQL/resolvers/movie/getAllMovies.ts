import { AuthenticationError } from "apollo-server";
import { EmptyRequest, Movie } from "../../../proto/stubs/movie_pb";
import { client } from "../../MovieClient";

export const movies = (parent, { filter }, { user }) => {
  if (!user) {
    throw new AuthenticationError("Invalid Credentials");
  } else {
    return new Promise<Movie.AsObject[]>((resolve, reject) => {
      const request = new EmptyRequest();
      const stream = client.getMovies(request);
      const movies: Movie.AsObject[] = [];
      stream.on("data", (movie) => movies.push(movie.toObject()));
      stream.on("error", reject);
      if (filter.watchlist && filter.genre) {
        stream.on("end", () =>
          resolve(
            movies.filter(
              (movie) =>
                movie.watchlist === true && movie.genre === filter.genre
            )
          )
        );
      } else if (filter.watchlist) {
        stream.on("end", () =>
          resolve(movies.filter((movie) => movie.watchlist === true))
        );
      } else if (filter.genre) {
        stream.on("end", () =>
          resolve(movies.filter((movie) => movie.genre === filter.genre))
        );
      } else {
        stream.on("end", () => resolve(movies));
      }
    });
  }
};
