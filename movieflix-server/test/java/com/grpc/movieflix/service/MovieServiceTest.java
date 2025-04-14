package com.grpc.movieflix.service;

import com.grpc.DeleteRequest;
import com.grpc.EmptyRequest;
import com.grpc.Movie;
import com.grpc.MutationResponse;
import com.grpc.movieflix.entity.MovieEntity;
import com.grpc.movieflix.mapper.MovieMapper;
import com.grpc.movieflix.repository.MovieRepository;
import io.grpc.stub.StreamObserver;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class MovieServiceTest {

    @InjectMocks
    MovieService movieService;

    @Mock
    MovieMapper movieMapper;

    @Mock
    MovieRepository movieRepository;

    @Test
    void getAllMoviesTest() throws Exception {
        MovieEntity movieEntity = new MovieEntity("test", "test", "test", "test", "test", false);
        Movie movie = Movie.newBuilder().setId("test")
                .setName("test")
                .setDescription("test")
                .setGenre("test")
                .setWatchlist(false)
                .setImage("test").build();
        List<MovieEntity> movieEntities = new ArrayList<>();
        movieEntities.add(movieEntity);

        EmptyRequest emptyRequest = EmptyRequest.newBuilder().build();
        StreamObserver<Movie> observer = mock(StreamObserver.class);
        Mockito.when(movieRepository.findAll()).thenReturn(movieEntities);
        Mockito.when(movieMapper.convertToMovie(movieEntity)).thenReturn(movie);
        movieService.getMovies(emptyRequest, observer);
        Mockito.verify(observer, times(1)).onCompleted();
        ArgumentCaptor<Movie> captor = ArgumentCaptor.forClass(Movie.class);
        Mockito.verify(observer, times(1)).onNext(captor.capture());
        List<Movie> movieList = captor.getAllValues();
        assertEquals(movieEntities.get(0).getId(),movieList.get(0).getId());
    }

    @Test
    void getMovieTest() throws Exception {
        MovieEntity movieEntity = new MovieEntity("test", "test", "test", "test", "test", false);
        Movie movie = Movie.newBuilder().setId("test")
                .setName("test")
                .setDescription("test")
                .setGenre("test")
                .setWatchlist(false)
                .setImage("test").build();
        StreamObserver<Movie> observer = mock(StreamObserver.class);
        Mockito.when(movieRepository.findById(movie.getId())).thenReturn(Optional.of(movieEntity));
        Mockito.when(movieMapper.convertToMovie(movieEntity)).thenReturn(movie);
        movieService.getMovie(movie, observer);
        Mockito.verify(observer, times(1)).onCompleted();
        ArgumentCaptor<Movie> captor = ArgumentCaptor.forClass(Movie.class);
        Mockito.verify(observer, times(1)).onNext(captor.capture());
        Movie response = captor.getValue();
        assertEquals(movie.getId(),response.getId());
    }

    @Test
    void getMovieExceptionTest() throws  Exception{
        Movie movie = Movie.newBuilder().setId("test")
                .setName("test")
                .setDescription("test")
                .setGenre("test")
                .setWatchlist(false)
                .setImage("test").build();
        StreamObserver<Movie> observer = mock(StreamObserver.class);
        Mockito.when(movieRepository.findById(movie.getId())).thenReturn(Optional.empty());
        RuntimeException thrown = assertThrows(RuntimeException.class, ()->{
            movieService.getMovie(movie, observer);
        });
        assertEquals(("movie not found with id test"), thrown.getMessage());
    }

    @Test
    void saveMovieTest() throws Exception {
        MovieEntity movieEntity = new MovieEntity("test", "test", "test", "test", "test", false);
        Movie movie = Movie.newBuilder().setId("test")
                .setName("test")
                .setDescription("test")
                .setGenre("test")
                .setWatchlist(false)
                .setImage("test").build();
        MutationResponse mutationResponse = MutationResponse.newBuilder().setMessage("movie saved successfully").build();
        StreamObserver<MutationResponse> observer = mock(StreamObserver.class);
        movieRepository.save(movieEntity);
        Mockito.when(movieMapper.convertToMovieEntity(movie)).thenReturn(movieEntity);
        movieService.saveMovie(movie, observer);
        Mockito.verify(observer, times(1)).onCompleted();
        ArgumentCaptor<MutationResponse> captor = ArgumentCaptor.forClass(MutationResponse.class);
        Mockito.verify(observer, times(1)).onNext(captor.capture());
        MutationResponse response = captor.getValue();
        assertEquals(mutationResponse.getMessage(),response.getMessage());
    }

    @Test
    void deleteMovieTest() throws Exception {
        MovieEntity movieEntity = new MovieEntity("test", "test", "test", "test", "test", false);
        Movie movie = Movie.newBuilder().setId("test")
                .setName("test")
                .setDescription("test")
                .setGenre("test")
                .setWatchlist(false)
                .setImage("test").build();
        DeleteRequest deleteRequest = DeleteRequest.newBuilder().setId("test").build();
        StreamObserver<MutationResponse> observer = mock(StreamObserver.class);
        MutationResponse mutationResponse = MutationResponse.newBuilder().setMessage("movie deleted successfully").build();
        Mockito.when(movieRepository.findById(deleteRequest.getId())).thenReturn(Optional.of(movieEntity));
        movieRepository.delete(movieEntity);
        movieService.deleteMovie(deleteRequest, observer);
        Mockito.verify(observer, times(1)).onCompleted();
        ArgumentCaptor<MutationResponse> captor = ArgumentCaptor.forClass(MutationResponse.class);
        Mockito.verify(observer, times(1)).onNext(captor.capture());
        MutationResponse response = captor.getValue();
        assertEquals(mutationResponse.getMessage(),response.getMessage());
    }

    @Test
    void deleteMovieExceptionTest() throws  Exception{
        DeleteRequest deleteRequest = DeleteRequest.newBuilder().setId("test").build();
        StreamObserver<MutationResponse> observer = mock(StreamObserver.class);
        Mockito.when(movieRepository.findById(deleteRequest.getId())).thenReturn(Optional.empty());
        RuntimeException thrown = assertThrows(RuntimeException.class, ()->{
            movieService.deleteMovie(deleteRequest, observer);
        });
        assertEquals(("movie not found with id test"), thrown.getMessage());
    }

}
