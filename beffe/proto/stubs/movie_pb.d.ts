// package: com.grpc
// file: movie.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Movie extends jspb.Message { 
    getId(): string;
    setId(value: string): Movie;

    getName(): string;
    setName(value: string): Movie;

    getDescription(): string;
    setDescription(value: string): Movie;

    getGenre(): string;
    setGenre(value: string): Movie;

    getImage(): string;
    setImage(value: string): Movie;

    getWatchlist(): boolean;
    setWatchlist(value: boolean): Movie;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Movie.AsObject;
    static toObject(includeInstance: boolean, msg: Movie): Movie.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Movie, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Movie;
    static deserializeBinaryFromReader(message: Movie, reader: jspb.BinaryReader): Movie;
}

export namespace Movie {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        genre: string,
        image: string,
        watchlist: boolean,
    }
}

export class MutationResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): MutationResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MutationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MutationResponse): MutationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MutationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MutationResponse;
    static deserializeBinaryFromReader(message: MutationResponse, reader: jspb.BinaryReader): MutationResponse;
}

export namespace MutationResponse {
    export type AsObject = {
        message: string,
    }
}

export class DeleteRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRequest;
    static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
    export type AsObject = {
        id: string,
    }
}

export class EmptyRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyRequest;
    static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
    export type AsObject = {
    }
}
