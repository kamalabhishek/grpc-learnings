// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require("@grpc/grpc-js");
var movie_pb = require('./movie_pb.js');

function serialize_com_grpc_DeleteRequest(arg) {
  if (!(arg instanceof movie_pb.DeleteRequest)) {
    throw new Error('Expected argument of type com.grpc.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_grpc_DeleteRequest(buffer_arg) {
  return movie_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_grpc_EmptyRequest(arg) {
  if (!(arg instanceof movie_pb.EmptyRequest)) {
    throw new Error('Expected argument of type com.grpc.EmptyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_grpc_EmptyRequest(buffer_arg) {
  return movie_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_grpc_Movie(arg) {
  if (!(arg instanceof movie_pb.Movie)) {
    throw new Error('Expected argument of type com.grpc.Movie');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_grpc_Movie(buffer_arg) {
  return movie_pb.Movie.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_grpc_MutationResponse(arg) {
  if (!(arg instanceof movie_pb.MutationResponse)) {
    throw new Error('Expected argument of type com.grpc.MutationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_grpc_MutationResponse(buffer_arg) {
  return movie_pb.MutationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MoviesService = exports.MoviesService = {
  getMovies: {
    path: '/com.grpc.Movies/getMovies',
    requestStream: false,
    responseStream: true,
    requestType: movie_pb.EmptyRequest,
    responseType: movie_pb.Movie,
    requestSerialize: serialize_com_grpc_EmptyRequest,
    requestDeserialize: deserialize_com_grpc_EmptyRequest,
    responseSerialize: serialize_com_grpc_Movie,
    responseDeserialize: deserialize_com_grpc_Movie,
  },
  getMovie: {
    path: '/com.grpc.Movies/getMovie',
    requestStream: false,
    responseStream: false,
    requestType: movie_pb.Movie,
    responseType: movie_pb.Movie,
    requestSerialize: serialize_com_grpc_Movie,
    requestDeserialize: deserialize_com_grpc_Movie,
    responseSerialize: serialize_com_grpc_Movie,
    responseDeserialize: deserialize_com_grpc_Movie,
  },
  saveMovie: {
    path: '/com.grpc.Movies/saveMovie',
    requestStream: false,
    responseStream: false,
    requestType: movie_pb.Movie,
    responseType: movie_pb.MutationResponse,
    requestSerialize: serialize_com_grpc_Movie,
    requestDeserialize: deserialize_com_grpc_Movie,
    responseSerialize: serialize_com_grpc_MutationResponse,
    responseDeserialize: deserialize_com_grpc_MutationResponse,
  },
  deleteMovie: {
    path: '/com.grpc.Movies/deleteMovie',
    requestStream: false,
    responseStream: false,
    requestType: movie_pb.DeleteRequest,
    responseType: movie_pb.MutationResponse,
    requestSerialize: serialize_com_grpc_DeleteRequest,
    requestDeserialize: deserialize_com_grpc_DeleteRequest,
    responseSerialize: serialize_com_grpc_MutationResponse,
    responseDeserialize: deserialize_com_grpc_MutationResponse,
  },
};

exports.MoviesClient = grpc.makeGenericClientConstructor(MoviesService);
