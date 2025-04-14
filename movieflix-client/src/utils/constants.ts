export type movie = {
  id: string,
  name: string;
  description: string;
  image:string;
  genre:string;
  watchlist: boolean;
};

export type data = Record<string, { name: string; movies: movie[] }>;

export type movieData = {
  movies: movie[] | undefined;
};

export const MOVIE_DATA = {
  name: "",
  description: "",
  image: '',
  genre: '',
  watchlist:false
};

export type movieInput = {
  name: string;
  description: string;
  image: string;
  genre: string;
  watchlist: boolean;
};

export const GENRES = ['horror', 'action', 'drama', 'all']
