package com.grpc.movieflix.mapper;

import com.grpc.Movie;
import com.grpc.movieflix.entity.MovieEntity;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
@ExtendWith(MockitoExtension.class)
class MovieMapperTest {

    @InjectMocks
    MovieMapper movieMapper;

    @Test
    void movieMapperTest(){
        MovieEntity movieEntity = new MovieEntity("test", "test", "test", "test", "test", false);
        Movie movie = Movie.newBuilder().setId("test")
        .setName("test")
        .setDescription("test")
        .setGenre("test")
        .setWatchlist(false)
        .setImage("test").build();

        assertEquals(movieMapper.convertToMovie(movieEntity).getId(), movie.getId());
        assertEquals(movieMapper.convertToMovieEntity(movie).getDescription(), movieEntity.getDescription());
    }

}
