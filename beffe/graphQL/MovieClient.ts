import { credentials } from "@grpc/grpc-js";
import { MoviesClient } from "../proto/stubs/movie_grpc_pb";

const port = 9000;

export const client = new MoviesClient(
  `localhost:${port}`,
  credentials.createInsecure()
);
