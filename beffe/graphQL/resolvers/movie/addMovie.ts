import { client } from "../../MovieClient";
import { requestObject } from "../../utils/functions";
import { MovieMutationResponse } from "../../utils/types";
import { v4 as uuid } from "uuid";
import { AuthenticationError } from "apollo-server";

export const addMovie = (parent, { movieInput }, { user }) => {
  if (!user) {
    throw new AuthenticationError("Invalid Credentials");
  } else {
    return new Promise<MovieMutationResponse>((resolve, reject) => {
      const request = requestObject(movieInput);
      request.setId(uuid());
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
