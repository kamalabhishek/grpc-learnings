import { AuthenticationError } from "apollo-server";
import { Movie } from "../../../proto/stubs/movie_pb";
import { client } from "../../MovieClient";

export const movie = (parent, { id }, { user }) => {
  if (!user) {
    throw new AuthenticationError("Invalid Credentials");
  } else {
    return new Promise<Movie.AsObject>((resolve, reject) => {
      const request = new Movie();
      request.setId(id);
      client.getMovie(request, (err, movie) => {
        if (err) {
          reject(err);
        } else {
          resolve(movie.toObject());
        }
      });
    });
  }
};
