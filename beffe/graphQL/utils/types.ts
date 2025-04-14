export type MovieMutationResponse = {
  status: number;
  message: string;
};

export type MovieMutationInput = {
  name: string;
  description: string;
  genre: string;
  image: string;
  watchlist: boolean;
};

export type User = {
  id: string;
  name: string;
  password: string;
};

export type JWTUser = {
  id: string;
  name: string;
};

export interface JwtPayload {
  data: JWTUser;
}
