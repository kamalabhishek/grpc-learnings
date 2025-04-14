// package: com.grpc
// file: movie.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as movie_pb from "./movie_pb";

interface IMoviesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getMovies: IMoviesService_IgetMovies;
    getMovie: IMoviesService_IgetMovie;
    saveMovie: IMoviesService_IsaveMovie;
    deleteMovie: IMoviesService_IdeleteMovie;
}

interface IMoviesService_IgetMovies extends grpc.MethodDefinition<movie_pb.EmptyRequest, movie_pb.Movie> {
    path: "/com.grpc.Movies/getMovies";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<movie_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<movie_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<movie_pb.Movie>;
    responseDeserialize: grpc.deserialize<movie_pb.Movie>;
}
interface IMoviesService_IgetMovie extends grpc.MethodDefinition<movie_pb.Movie, movie_pb.Movie> {
    path: "/com.grpc.Movies/getMovie";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<movie_pb.Movie>;
    requestDeserialize: grpc.deserialize<movie_pb.Movie>;
    responseSerialize: grpc.serialize<movie_pb.Movie>;
    responseDeserialize: grpc.deserialize<movie_pb.Movie>;
}
interface IMoviesService_IsaveMovie extends grpc.MethodDefinition<movie_pb.Movie, movie_pb.MutationResponse> {
    path: "/com.grpc.Movies/saveMovie";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<movie_pb.Movie>;
    requestDeserialize: grpc.deserialize<movie_pb.Movie>;
    responseSerialize: grpc.serialize<movie_pb.MutationResponse>;
    responseDeserialize: grpc.deserialize<movie_pb.MutationResponse>;
}
interface IMoviesService_IdeleteMovie extends grpc.MethodDefinition<movie_pb.DeleteRequest, movie_pb.MutationResponse> {
    path: "/com.grpc.Movies/deleteMovie";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<movie_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<movie_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<movie_pb.MutationResponse>;
    responseDeserialize: grpc.deserialize<movie_pb.MutationResponse>;
}

export const MoviesService: IMoviesService;

export interface IMoviesServer {
    getMovies: grpc.handleServerStreamingCall<movie_pb.EmptyRequest, movie_pb.Movie>;
    getMovie: grpc.handleUnaryCall<movie_pb.Movie, movie_pb.Movie>;
    saveMovie: grpc.handleUnaryCall<movie_pb.Movie, movie_pb.MutationResponse>;
    deleteMovie: grpc.handleUnaryCall<movie_pb.DeleteRequest, movie_pb.MutationResponse>;
}

export interface IMoviesClient {
    getMovies(request: movie_pb.EmptyRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<movie_pb.Movie>;
    getMovies(request: movie_pb.EmptyRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<movie_pb.Movie>;
    getMovie(request: movie_pb.Movie, callback: (error: grpc.ServiceError | null, response: movie_pb.Movie) => void): grpc.ClientUnaryCall;
    getMovie(request: movie_pb.Movie, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.Movie) => void): grpc.ClientUnaryCall;
    getMovie(request: movie_pb.Movie, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.Movie) => void): grpc.ClientUnaryCall;
    saveMovie(request: movie_pb.Movie, callback: (error: grpc.ServiceError | null, response: movie_pb.MutationResponse) => void): grpc.ClientUnaryCall;
    saveMovie(request: movie_pb.Movie, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.MutationResponse) => void): grpc.ClientUnaryCall;
    saveMovie(request: movie_pb.Movie, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.MutationResponse) => void): grpc.ClientUnaryCall;
    deleteMovie(request: movie_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: movie_pb.MutationResponse) => void): grpc.ClientUnaryCall;
    deleteMovie(request: movie_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.MutationResponse) => void): grpc.ClientUnaryCall;
    deleteMovie(request: movie_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.MutationResponse) => void): grpc.ClientUnaryCall;
}

export class MoviesClient extends grpc.Client implements IMoviesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getMovies(request: movie_pb.EmptyRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<movie_pb.Movie>;
    public getMovies(request: movie_pb.EmptyRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<movie_pb.Movie>;
    public getMovie(request: movie_pb.Movie, callback: (error: grpc.ServiceError | null, response: movie_pb.Movie) => void): grpc.ClientUnaryCall;
    public getMovie(request: movie_pb.Movie, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.Movie) => void): grpc.ClientUnaryCall;
    public getMovie(request: movie_pb.Movie, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.Movie) => void): grpc.ClientUnaryCall;
    public saveMovie(request: movie_pb.Movie, callback: (error: grpc.ServiceError | null, response: movie_pb.MutationResponse) => void): grpc.ClientUnaryCall;
    public saveMovie(request: movie_pb.Movie, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.MutationResponse) => void): grpc.ClientUnaryCall;
    public saveMovie(request: movie_pb.Movie, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.MutationResponse) => void): grpc.ClientUnaryCall;
    public deleteMovie(request: movie_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: movie_pb.MutationResponse) => void): grpc.ClientUnaryCall;
    public deleteMovie(request: movie_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: movie_pb.MutationResponse) => void): grpc.ClientUnaryCall;
    public deleteMovie(request: movie_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: movie_pb.MutationResponse) => void): grpc.ClientUnaryCall;
}
