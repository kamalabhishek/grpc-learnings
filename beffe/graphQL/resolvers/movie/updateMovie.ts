import { AuthenticationError } from "apollo-server";
import { client } from "../../MovieClient";
import { requestObject } from "../../utils/functions";
import { MovieMutationResponse } from "../../utils/types";

export const updateMovie = (parent, { id, movieInput }, { user }) => {
  if (!user) {
    throw new AuthenticationError("Invalid Credentials");
  } else {
    return new Promise<MovieMutationResponse>((resolve, reject) => {
      const request = requestObject(movieInput);
      request.setId(id);
      client.saveMovie(request, (err, response) => {
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
