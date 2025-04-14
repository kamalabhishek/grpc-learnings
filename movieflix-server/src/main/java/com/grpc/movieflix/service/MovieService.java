package com.grpc.movieflix.service;

import com.grpc.*;
import com.grpc.movieflix.entity.MovieEntity;
import com.grpc.movieflix.mapper.MovieMapper;
import com.grpc.movieflix.repository.MovieRepository;
import io.grpc.stub.StreamObserver;
import lombok.extern.slf4j.Slf4j;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@GrpcService
@Slf4j
public class MovieService extends MoviesGrpc.MoviesImplBase {

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    MovieMapper movieMapper;

    @Override
    public void getMovies(EmptyRequest request, StreamObserver<Movie> responseObserver) {
        log.info("request received at getMovies");
        List<MovieEntity> movies = movieRepository.findAll();
        for (MovieEntity movieEntity: movies) {
            responseObserver.onNext(movieMapper.convertToMovie(movieEntity));
        }
        responseObserver.onCompleted();
    }

    @Override
    public void getMovie(Movie request, StreamObserver<Movie> responseObserver) {
        log.info("request received at getMovie");
        Optional<MovieEntity> result = movieRepository.findById(request.getId());
        if(result.isPresent()){
            log.info(result.get().toString());
            responseObserver.onNext(movieMapper.convertToMovie(result.get()));
            responseObserver.onCompleted();
        }
        else{
            throw new RuntimeException(String.format("movie not found with id %s", request.getId()));
        }
    }

    @Override
    public void saveMovie(Movie request, StreamObserver<MutationResponse> responseObserver) {
        log.info("request received at saveMovie");
        movieRepository.save(movieMapper.convertToMovieEntity(request));
        responseObserver.onNext(MutationResponse.newBuilder().setMessage("movie saved successfully").build());
        responseObserver.onCompleted();
    }

    @Override
    public void deleteMovie(DeleteRequest request, StreamObserver<MutationResponse> responseObserver) {
        log.info("request received at updateMovie");
        Optional<MovieEntity> result = movieRepository.findById(request.getId());
        if(result.isPresent()){
            movieRepository.delete(result.get());
            responseObserver.onNext(MutationResponse.newBuilder().setMessage("movie deleted successfully").build());
            responseObserver.onCompleted();
        }
        else{
            throw new RuntimeException(String.format("movie not found with id %s", request.getId()));
        }
    }

}
