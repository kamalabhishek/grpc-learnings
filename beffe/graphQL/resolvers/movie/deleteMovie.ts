import { AuthenticationError } from "apollo-server";
import { DeleteRequest } from "../../../proto/stubs/movie_pb";
import { client } from "../../MovieClient";
import { MovieMutationResponse } from "../../utils/types";

export const deleteMovie = (parent, { id }, { user }) => {
  if (!user) {
    throw new AuthenticationError("Invalid Credentials");
  } else {
    return new Promise<MovieMutationResponse>((resolve, reject) => {
      const request = new DeleteRequest();
      request.setId(id);
      client.deleteMovie(request, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve({
            status: 200,
            message: response.toObject().message,
          });
        }
      });
    });
  }
};
