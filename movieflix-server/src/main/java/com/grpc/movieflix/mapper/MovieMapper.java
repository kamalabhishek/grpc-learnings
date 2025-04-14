package com.grpc.movieflix.mapper;

import com.grpc.Movie;
import com.grpc.movieflix.entity.MovieEntity;
import org.springframework.stereotype.Service;

@Service
public class MovieMapper {

    public MovieEntity convertToMovieEntity(Movie movie){
        MovieEntity movieEntity=new MovieEntity();
        movieEntity.setId(movie.getId());
        movieEntity.setName(movie.getName());
        movieEntity.setDescription(movie.getDescription());
        movieEntity.setGenre(movie.getGenre());
        movieEntity.setImage(movie.getImage());
        movieEntity.setWatchlist(movie.getWatchlist());
        return movieEntity;
    }

    public Movie convertToMovie(MovieEntity movieEntity) {
        return Movie.newBuilder().setId(movieEntity.getId())
                .setName(movieEntity.getName())
                .setDescription(movieEntity.getDescription())
                .setGenre(movieEntity.getGenre())
                .setImage(movieEntity.getImage())
                .setWatchlist(movieEntity.getWatchlist()).build();
    }
}
